package repository

import (
	"gorm.io/gorm"
)

type SpreadSheetEntity struct {
	gorm.Model
	SpreadId  string `json:"spread_id" binding:"required"`
	SheetName string `json:"sheet_name" binding:"required"`
}

func (spread *SpreadSheetEntity) Create() error {
	result := db.Create(spread)
	if result.Error != nil {
		return result.Error
	}
	return nil
}

func GetAll() ([]*SpreadSheetEntity, error) {
	var values []*SpreadSheetEntity
	result := db.Find(&values)
	if result.Error != nil {
		return values, result.Error
	}
	return values, nil
}

func (entity *SpreadSheetEntity) FindBySheetName() ([]*SpreadSheetEntity, error) {
	var values []*SpreadSheetEntity
	result := db.Where("sheet_name LIKE ?", "%"+entity.SheetName+"%").Find(&values)
	if result.Error != nil {
		return values, result.Error
	}
	return values, nil
}
