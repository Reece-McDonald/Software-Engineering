package models

type User struct {
	Id        uint
	FirstName string
	LastName  string
	Email     string `gorm:"unique"` // email should be unique in database
	Password  string
}
