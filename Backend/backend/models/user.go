package models

import (
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

type User struct {
	Id        uint   `json:"id"`
	FirstName string `json:"firstName"`
	LastName  string `json:"lastName"`
	Email     string `json:"email" gorm:"unique"` // email should be unique in database
	Password  []byte `json:"-"`                   // password won't show in api requests
}

func (user *User) SetPassword(password string) {
	userPassword, _ := bcrypt.GenerateFromPassword([]byte(password), 14)

	user.Password = userPassword
}

func (user *User) ComparePassword(password string) error {
	return bcrypt.CompareHashAndPassword(user.Password, []byte(password))
}

func (user *User) Count(db *gorm.DB) int64 {
	var total int64

	db.Model(&User{}).Count(&total)

	return total
}

// display each user during get request as json
func (user *User) Take(db *gorm.DB, limit int, offset int) interface{} {
	var users []User

	db.Offset(offset).Limit(limit).Find(&users)

	return users
}
