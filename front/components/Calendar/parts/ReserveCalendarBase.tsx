import {createContext, useCallback, useState} from "react";
import FullCalendar from "@fullcalendar/react";
import {
    DateSelectArg,
    DayCellContentArg,
    EventApi,
    EventClickArg,
    EventContentArg,
    EventInput,
} from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import allLocales from "@fullcalendar/core/locales-all";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import styled from '@emotion/styled'
import Modal, {ModalProps} from "@/components/Calendar/parts/Modal";


type UserDataType = {
    name:string
    srtTime: string
    endTime: string
}

const StyleWrapper = styled.div`
  .fc .fc-toolbar.fc-header-toolbar {
    //background: rgb(229,229,229);
    margin-bottom: 0;
  }
  .fc .fc-toolbar-title {
    font-size: 1.5rem;
    color: #37362f;
    font-weight: bold;
  }
  .fc .fc-button-primary {
    font-size: 1rem;
    background-color: #2563eb;
    color: #ffffff;
    //border: none;
    //outline: none;
    border-color: #ffffff;
  }
  .fc .fc-button-primary:hover{
    background-color: #3b82f6;
  }
  
  .fc .fc-today-button {
    background-color: #2563eb;
    color: #ffffff;
    border-color: #ffffff;
    //border: none;
    //outline: none;
  }
  .fc .fc-today-button:hover{
    background-color: #3b82f6;
    cursor: pointer;
  }
  .fc .fc-button-primary:not(:disabled):active,
  .fc .fc-button-primary:not(:disabled).fc-button-active {
    background-color: #2563eb;
    color: #ffffff;
    border-color: #ffffff;
    box-shadow: none;
  }
  .fc .fc-button-primary:not(:disabled):active:hover,
  .fc .fc-button-primary:not(:disabled).fc-button-active:hover{
    background-color: #3b82f6;
  }
  .fc .fc-button-primary:not(:disabled):focus,
  .fc .fc-button-primary:not(:disabled).fc-button-focus {
    background-color: #2563eb;
    color: #ffffff;
    box-shadow: none;
  }
  .fc .fc-button-primary:not(:disabled):focus:hover,
  .fc .fc-button-primary:not(:disabled).fc-button-focus:hover{
    background-color: #3b82f6;
  }
  .fc .fc-today-button:disabled {
    opacity: 1;
  }
`
export const UserDataContext = createContext({name: "", srtTime: "", endTime: ""})
export const UserDataProvider = UserDataContext.Provider

const ReserveCalendarBase = (props: {dataList: EventInput[]}) =>  {



    const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);
    const [modalProps, setModalProps] = useState<ModalProps | undefined>()
    const [userData, setUserData] = useState<UserDataType>({name: "", srtTime: "", endTime: ""})

    // 時間表示制御
    const renderEventContent = (eventContent: EventContentArg) => (
        <div className={"font-sans bg-blue-600 text-white relative w-full rounded-sm"}>
            <b>{eventContent.timeText.replace("時", ":00")}</b>
            <i className={"ml-1 font-bold"}>{eventContent.event.title}</i>
            {/*<i>{eventContent.event.description}</i>*/}
        </div>
    );
    // 日にち表示制御
    const editDayStr = (e: DayCellContentArg) => {
        const { date, dayNumberText } = e
        let renderDayNumberText = ""
        renderDayNumberText = dayNumberText.replace('日', '')
        return renderDayNumberText
    };

    // ID取得
    let eventGuid = 0
    const createEventId = () => String(eventGuid++);

    const handleEvents = useCallback(
        (events: EventApi[]) => setCurrentEvents(events),
        []
    );

    // modal表示
    // 新規作成
    const handleDateSelect = useCallback(async(selectInfo: DateSelectArg) => {
        const result = await new Promise<string>((resolve) => {
            setModalProps({
                onClose: resolve,
                name: "",
                srtTime: selectInfo.startStr.substring(0, selectInfo.startStr.indexOf("+")),
                endTime: selectInfo.endStr.substring(0, selectInfo.endStr.indexOf("+")),
            })
        })

        if (result === "edit") {
            let calendarApi = selectInfo.view.calendar;
            calendarApi.unselect();

            if (selectInfo.allDay){
                userData.srtTime = selectInfo.startStr.substring(0, selectInfo.startStr.indexOf("T"))
                userData.endTime = selectInfo.endStr.substring(0, selectInfo.endStr.indexOf("T"))
            }
            if (userData.name) {
                calendarApi.addEvent({
                    // id: createEventId(),
                    title: userData.name,
                    start: selectInfo.startStr,
                    end: selectInfo.endStr,
                    allDay: selectInfo.allDay,
                    // description
                });
            }
            window.alert("予約を登録しました。");
        }
        setModalProps(undefined)
        userData.name = "";
        userData.srtTime = "";
        userData.endTime = "";

    }, []);
    // 編集
    const handleEventClick = useCallback(async(clickInfo: EventClickArg) => {
        const result = await new Promise<string>((resolve) => {
            setModalProps({
                onClose: resolve,
                name: clickInfo.event.title,
                srtTime: clickInfo.event.startStr.substring(0, clickInfo.event.startStr.indexOf("+")),
                endTime: clickInfo.event.startStr.substring(0, clickInfo.event.startStr.indexOf("+")),
            })
        })
        if (result === "edit") {
            clickInfo.event.remove();
            let calendarApi = clickInfo.view.calendar;
            calendarApi.unselect();
            if (userData.name) {
                calendarApi.addEvent({
                    // id: createEventId(),
                    title: userData.name,
                    start: userData.srtTime,
                    end: userData.endTime,
                    // description
                });
            }
            window.alert("予約を変更しました。");
        }
        else if (result === 'delete') {
            clickInfo.event.remove();
            window.alert("予約を削除しました。");
        }
        setModalProps(undefined)
        userData.name = "";
        userData.srtTime = "";
        userData.endTime = "";
    }, []);

    return (
        <div className={""}>
            <StyleWrapper>
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
                    headerToolbar={{
                        start: "prev,next today",
                        center: "title",
                        end: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
                    }}
                    // titleFormat={{
                    //     year: "numeric",
                    //     month: "short",
                    //     day: "numeric",
                    // }}
                    // businessHours={{
                    //     daysOfWeek: [1, 2, 3, 4, 5],
                    //     startTime: "0:00",
                    //     endTime: "24:00",
                    // }}
                    initialView="timeGridWeek"
                    slotDuration="00:30:00"
                    eventContent={renderEventContent}
                    selectable={true}
                    editable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    allDaySlot={true}
                    navLinks={true}
                    // businessHours={true}
                    initialEvents={props.dataList}
                    locales={allLocales}
                    locale="ja"
                    eventsSet={handleEvents}
                    select={handleDateSelect}
                    eventClick={handleEventClick}
                    eventColor={"#2563eb"}
                    // eventBorderColor={"black"}
                    // displayEventTime={false}
                    // displayEventEnd={true}
                    dayCellContent={editDayStr}
                    aspectRatio={1.6}
                />
            </StyleWrapper>
            {modalProps &&
                <UserDataProvider value={userData}>
                    <Modal {...modalProps} />
                </UserDataProvider>
            }
        </div>
    );
}

export default ReserveCalendarBase;

