package course

import (
	"encoding/json"
	"net-http/myapp/controller"
	"net-http/myapp/usecase/course"
	"net-http/myapp/utils"
	"net/http"
)

type GetCourseHandle struct {
	Service *course.GetCourse
}

func NewGetCourseHandler(s *course.GetCourse) *GetCourseHandle {
	return &GetCourseHandle{Service: s}
}

// GetCourseHandler コース情報取得コントローラー
func (ru *GetCourseHandle) GetCourseHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	if r.Method != "GET" {
		response := controller.Response{Status: 405, Text: "Method Not Allowed"}
		w.WriteHeader(405)
		json.NewEncoder(w).Encode(response)
		return
	}

	jwtToken := r.Header.Get("Authorization")
	// usecase呼び出し
	courses, err := ru.Service.GetCourse(jwtToken)
	if err != nil {
		response := controller.Response{Status: 500, Text: err.Error()}
		w.WriteHeader(response.Status)
		err := json.NewEncoder(w).Encode(response)
		if err != nil {
			return
		}
		utils.WriteLogFile(err.Error())
		return
	}
	err = json.NewEncoder(w).Encode(courses)
	if err != nil {
		return
	}
	utils.WriteLogFile("完了しました")
}
