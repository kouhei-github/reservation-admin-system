package spread

import (
	"encoding/json"
	"net-http/myapp/controller"
	"net-http/myapp/repository"
	"net-http/myapp/service"
	"net/http"
)

func FindByAllHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	if r.Method != "GET" {
		response := controller.Response{Status: 405, Text: "Method Not Allowed"}
		// Header情報の追加方法
		//header := w.Header()
		//header.Set("cookie", "aaaa")
		w.WriteHeader(405)
		json.NewEncoder(w).Encode(response)
	}

	values, err := repository.GetAll()
	if err != nil {
		service.WriteLogFile("全権取得に失敗しました")
		service.WriteLogFile(err.Error())
		return
	}
	if err := json.NewEncoder(w).Encode(values); err != nil {
		service.WriteLogFile(err.Error())
		return
	}
}

func FindBySheetName(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	if r.Method != "GET" {
		response := controller.Response{Status: 405, Text: "Method Not Allowed"}
		// Header情報の追加方法
		//header := w.Header()
		//header.Set("cookie", "aaaa")
		w.WriteHeader(405)
		json.NewEncoder(w).Encode(response)
	}

	query := r.URL.Query()
	sheetName := query.Get("sheet_name")
	entity := repository.SpreadSheetEntity{SheetName: sheetName}

	values, err := entity.FindBySheetName()
	if err != nil {
		service.WriteLogFile("シート名で取得できませんでした")
		service.WriteLogFile(err.Error())
		return
	}
	if err := json.NewEncoder(w).Encode(values); err != nil {
		service.WriteLogFile(err.Error())
		return
	}
}
