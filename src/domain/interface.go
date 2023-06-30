package domain

import (
	"net-http/myapp/domain/model/user"
)

type AdminUserRepository interface {
	SaveAdminUser(user *user.AdminUser) error
	FindAdminUserByEmail(email string) (*user.AdminUser, error)
}

type AuthJwtToken interface {
	CreateJwtToken() (string, error)
	AuthorizationProcess(tokenString string) (string, error)
}
