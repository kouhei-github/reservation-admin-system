package route

import (
	"net-http/myapp/controller"
	userHandling "net-http/myapp/controller/user"
	"net-http/myapp/repository"
	"net-http/myapp/repository/auth_infra"
	"net-http/myapp/usecase/user"
)

func (router *Router) GetAuthRouter() {
	// 認証許可
	getUser := userHandling.NewGetUserHandler(&user.GetUser{
		AdminUserRepo: &repository.Administer{},
		JwtRepo:       &auth_infra.JwtToken{},
	})
	router.Mutex.HandleFunc("/api/v1/users", getUser.GetUserHandler)

	router.Mutex.HandleFunc("/auth", controller.HandlerTwo)
}
