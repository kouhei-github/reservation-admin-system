package spread

import (
	"encoding/json"
	"net-http/myapp/controller"
	"net-http/myapp/repository"
	"net-http/myapp/service"
	"net/http"
)

func CreateHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	response := controller.Response{Status: 405, Text: "Method Not Allowed"}
	if r.Method != "POST" {
		w.WriteHeader(405)
		json.NewEncoder(w).Encode(response)
		return
	}
	var payload PostPayload
	err := json.NewDecoder(r.Body).Decode(&payload)
	if err != nil {
		service.WriteLogFile(err.Error())
		response.Status = 502
		response.Text = "Internel Server Error"
		json.NewEncoder(w).Encode(response)
		return
	}

	// 認証の処理
	service.WriteLogFile("payload.Auth")
	service.WriteLogFile(payload.Auth)

	// 保存
	spreadentity := repository.SpreadSheetEntity{SpreadId: payload.SpreadId, SheetName: payload.SheetName}
	err = spreadentity.Create()
	if err != nil {
		service.WriteLogFile("保存失敗")
		service.WriteLogFile(err.Error())
		return
	}

	data := []map[string]string{
		{
			"status": "405",
			"text":   "completed",
		},
		{
			"status": "405",
			"text":   "completed",
		},
	}
	if err := json.NewEncoder(w).Encode(data); err != nil {
		service.WriteLogFile(err.Error())
		return
	}
}
