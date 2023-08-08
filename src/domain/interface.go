package domain

import (
	"net-http/myapp/domain/model/course"
	"net-http/myapp/domain/model/reservations"
	"net-http/myapp/domain/model/user"
)

// AdminUserRepository 管理者ユーザーのリポジトリ
type AdminUserRepository interface {
	SaveAdminUser(user *user.AdminUser) error
	FindAdminUserByEmail(email string) (*user.AdminUser, error)
	UpdateAdminUser(user *user.AdminUser) error
	FindAdminUserById(id float64) (*user.AdminUser, error)
}

// AuthJwtToken JWTTokenの処理
type AuthJwtToken interface {
	CreateJwtToken(serId uint) (string, error)
	AuthorizationProcess(tokenString string) (float64, error)
}

// CompanyRepository Companyに紐つく処理
type CompanyRepository interface {
	GetUserData() ([]user.AdminUser, error)
}

// CourseRepository コースに紐づく処理
type CourseRepository interface {
	Select() ([]course.Course, error)
	Insert(course *course.Course) error
	Update(course *course.Course) error
	Delete() error
}

// ReserveRepository 予約管理に紐づく処理　DB：reservation.reservations
type ReserveRepository interface {
	Select() ([]reservations.Reserve, error)
	Insert(reserve reservations.Reserve) error
	Update(reserve reservations.Reserve) error
	Delete() error
}
