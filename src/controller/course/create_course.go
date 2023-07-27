package course

import (
	"encoding/json"
	"net-http/myapp/controller"
	"net-http/myapp/usecase/course"
	"net-http/myapp/utils"
	"net/http"
)

type CreateCourseHandle struct {
	Service *course.CreateCourse
}

func NewCreateCourseHandler(s *course.CreateCourse) *CreateCourseHandle {
	return &CreateCourseHandle{Service: s}
}

// CreateCourseHandler コース新規作成コントローラー
func (ru *CreateCourseHandle) CreateCourseHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	if r.Method != "POST" {
		response := controller.Response{Status: 405, Text: "Method Not Allowed"}
		w.WriteHeader(405)
		err := json.NewEncoder(w).Encode(response)
		if err != nil {
			return
		}
		return
	}

	jwtToken := r.Header.Get("Authorization")
	// usecase呼び出し
	err := ru.Service.CreateCourse(jwtToken, json.NewDecoder(r.Body))
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
	err = json.NewEncoder(w).Encode("")
	if err != nil {
		return
	}
	utils.WriteLogFile("完了しました")
}
