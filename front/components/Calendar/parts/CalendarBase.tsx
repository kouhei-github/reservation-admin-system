import {useCallback, useEffect, useState} from "react";
import FullCalendar from "@fullcalendar/react";
import {DateSelectArg, DayCellContentArg, EventApi, EventClickArg, EventContentArg} from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import allLocales from "@fullcalendar/core/locales-all";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import { EventInput } from "@fullcalendar/core";
import styled from '@emotion/styled'
import Modal from "@/components/Calendar/parts/Modal";


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

const CalendarBase = (props: {dataList: EventInput[]}) =>  {

    let eventGuid = 0
    const createEventId = () => String(eventGuid++);

    const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);
    const handleEvents = useCallback(
        (events: EventApi[]) => setCurrentEvents(events),
        []
    );
    const handleDateSelect = useCallback((selectInfo: DateSelectArg) => {
        let title = prompt("イベントのタイトルを入力してください")?.trim();
        let description = ""
        let calendarApi = selectInfo.view.calendar;
        calendarApi.unselect();
        if (title) {
            calendarApi.addEvent({
                // id: createEventId(),
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay,
                description
            });
        }
    }, []);
    const handleEventClick = useCallback((clickInfo: EventClickArg) => {
        if (
            window.confirm(`このイベント「${clickInfo.event.title}」を削除しますか`)
        ) {
            clickInfo.event.remove();
        }
    }, []);
    const renderEventContent = (eventContent: EventContentArg) => (
        <div className={"font-sans bg-blue-600 text-white relative w-full rounded-sm"}>
            <b>{eventContent.timeText.replace("時", ":00")}</b>
            <i className={"ml-1 font-bold"}>{eventContent.event.title}</i>
            {/*<i>{eventContent.event.description}</i>*/}
        </div>
    );

    const editDayStr = (e: DayCellContentArg) => {
        const { date, dayNumberText } = e
        let renderDayNumberText = ""
        renderDayNumberText = dayNumberText.replace('日', '')
        return renderDayNumberText
    };

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
                    initialView="timeGridWeek"
                    eventContent={renderEventContent}
                    selectable={true}
                    editable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    // allDaySlot={true}
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

        </div>
    );
}

export default CalendarBase;
