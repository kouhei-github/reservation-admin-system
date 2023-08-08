package utils

import (
	"fmt"
	"strconv"
	"unicode/utf8"
)

func CheckCharLength(checkValue string, checkLength int) (*string, error) {
	value := checkValue
	if utf8.RuneCountInString(value) > checkLength {
		return nil, fmt.Errorf("is invalid number of characters (" + strconv.Itoa(checkLength) + ")")
	}
	return &value, nil
}
