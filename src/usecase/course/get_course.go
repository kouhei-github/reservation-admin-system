package course

import (
	"log"
	"net-http/myapp/domain"
	"net-http/myapp/repository"
	"net-http/myapp/usecase/course/util"
	"net-http/myapp/utils"
)

type GetCourse struct {
	AdminUserRepo domain.AdminUserRepository
	JwtRepo       domain.AuthJwtToken
}

// GetCourseData コース情報取得ユースケース
func (c *GetCourse) GetCourseData(jwtToken string) ([][]string, error) {
	userId, err := c.JwtRepo.AuthorizationProcess(jwtToken)
	if err != nil {
		return nil, err
	}

	userData, err := c.AdminUserRepo.FindAdminUserById(userId)
	if err != nil {
		return nil, err
	}

	if userData.IsLogin == false {
		return nil, utils.MyError{Message: "ログインしてください"}
	}

	courseRepository := &repository.Course{CompanyId: userData.CompanyId}
	//company := &repository.Company{CompanyId: 000000}

	// DB：select interfaceを通す
	courses, err := courseRepository.SelectCourseData()
	if err != nil {
		return [][]string{
			{""},
		}, err
	}
	// TODO 共通メソッドを使用して、course型に変更し、jsonにエンコードして返却したい
	result, err := util.NewUtility().GetCourseDataToArray(courses)
	if err != nil {
		return nil, err
	}
	log.Print(result)

	return result, nil
}
