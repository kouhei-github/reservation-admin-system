package util

import (
	"encoding/json"
	"net-http/myapp/domain/model/course"
)

type Utility struct{}

func NewUtility() *Utility {
	return &Utility{}
}

func (u Utility) GetCourseDataToArray(courses []course.Course) ([][]string, error) {
	var result [][]string
	for _, data := range courses {
		arrayString, err := data.ArrayString()
		result = append(result, arrayString)
		if err != nil {
			return [][]string{
				{""},
			}, err
		}
	}
	return result, nil
}

// ToCourse TODO Course型に変換 引数型要検討
func (u Utility) ToCourse(body *json.Decoder) (course.Course, error) {
	var courseForm = course.Course{}
	return courseForm, nil
}
