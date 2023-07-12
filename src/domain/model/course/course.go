package course

import (
	"reflect"
	"time"
)

// Course DB：reservation.m_course
type Course struct {
	StoreId            int       `json:"store_id" gorm:"primary_key"`
	CourseId           int       `json:"course_id" gorm:"primary_key"`
	CourseName         string    `json:"course_name" gorm:"primary_key"`
	CourseKbn          int       `json:"course_kbn"`
	IsCourseNetReserve bool      `json:"is_course_net_reserve"`
	Price              int       `json:"price"`
	ItemNum            int       `json:"item_num"`
	Description        string    `json:"description"`
	Contents           string    `json:"contents"`
	FreeDrinkKbn       int       `json:"free_drink_kbn"`
	IsBuffet           bool      `json:"is_buffet"`
	Notes              string    `json:"notes"`
	Duration           int       `json:"duration"`
	AvailableMin       int       `json:"available_min"`
	AvailableMax       int       `json:"available_max"`
	AvailableDats      string    `json:"available_days"`
	AvailableTimeMin   time.Time `json:"available_time_min"`
	AvailableTimeMax   time.Time `json:"available_time_max"`
	ReserveDeadTimeMin string    `json:"reserve_dead_time_min"`
	ReserveDeadTimeMax time.Time `json:"reserve_dead_time_max"`
	IsHidden           bool      `json:"is_hidden"`
	IsDelete           bool      `json:"is_delete"`
	CreateUser         string    `json:"create_user"`
	CreateAt           time.Time `json:"create_at"`
	UpdateUser         string    `json:"update_user"`
	UpdateAt           time.Time `json:"update_at"`
	Remarks            string    `json:"remarks"`
}

func (course *Course) ArrayString() ([]string, error) {
	rowData := reflect.ValueOf(course)
	numRow := rowData.NumField()
	var rowDataStr []string
	for i := 0; i < numRow; i++ {
		value := rowData.Field(i).String()
		rowDataStr = append(rowDataStr, value)
	}
	return rowDataStr, nil
}
