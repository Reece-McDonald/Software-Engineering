package models

import "golang.org/x/crypto/bcrypt"

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
