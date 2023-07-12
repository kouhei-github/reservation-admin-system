package util

import (
	"encoding/json"
	"net-http/myapp/domain/model/course"
)

type utility struct{}

func NewUtility() *utility {
	return &utility{}
}

func (u utility) GetCourseDataToArray(courses []course.Course) ([][]string, error) {
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
func (u utility) ToCourse(body *json.Decoder) (course.Course, error) {
	var courseForm = course.Course{}
	return courseForm, nil
}
