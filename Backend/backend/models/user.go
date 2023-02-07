package models

type User struct {
	Id        uint   `json:"id"`
	FirstName string `json:"firstName"`
	LastName  string `json:"lastName"`
	Email     string `json:"email" gorm:"unique"` // email should be unique in database
	Password  []byte `json:"-"`                   // password won't show in api requests
}
