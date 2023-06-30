package route

import (
	"net-http/myapp/controller"
)

func (router *Router) GetAuthRouter() {
	// 認証許可
	router.Mutex.HandleFunc("/auth", controller.HandlerTwo)
}
