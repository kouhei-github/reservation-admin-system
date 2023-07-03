package domain

import (
	"net-http/myapp/domain/model/user"
)

type AdminUserRepository interface {
	SaveAdminUser(user *user.AdminUser) error
	FindAdminUserByEmail(email string) (*user.AdminUser, error)
	UpdateAdminUser(user *user.AdminUser) error
	FindAdminUserById(id float64) (*user.AdminUser, error)
}

type AuthJwtToken interface {
	CreateJwtToken(serId uint) (string, error)
	AuthorizationProcess(tokenString string) (float64, error)
}
