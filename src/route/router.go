package route

import (
	"net-http/myapp/controller"
	"net-http/myapp/controller/spread"
	"net/http"
)

func GetRouter() *http.ServeMux {
	mux := http.NewServeMux()
	// 練習
	mux.HandleFunc("/", controller.Handler)
	mux.HandleFunc("/two", controller.HandlerTwo)

	// ブログ
	mux.HandleFunc("/blog", controller.FindByTitleHandler)
	mux.HandleFunc("/blog-post", controller.CreateBlogHandler)

	// Google SpreadSheet
	mux.HandleFunc("/spread/create", spread.CreateHandler)
	mux.HandleFunc("/spread/get/all", spread.FindByAllHandler)
	mux.HandleFunc("/spread/get", spread.FindBySheetName)

	return mux
}
