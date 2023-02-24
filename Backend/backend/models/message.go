package models

/*
import (
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)
*/
type Message struct {
	Id        uint   `json:"id"`
	FirstName string `json:"firstName"`
	LastName  string `json:"lastName"`
	message   string `json:"messsage"`
}

/*
func (user *User) SetPassword(password string) {
	userPassword, _ := bcrypt.GenerateFromPassword([]byte(password), 14)

	user.Password = userPassword
}

func (user *User) ComparePassword(password string) error {
	return bcrypt.CompareHashAndPassword(user.Password, []byte(password))
}

// Count Used in paginate to retrieve numbers of users in database.
func (user *User) Count(db *gorm.DB) int64 {
	var total int64

	db.Model(&User{}).Count(&total)

	return total
}

// Take Used in retrieving the number of users for the current page based on the offset and limit of
// the pagination function.
func (user *User) Take(db *gorm.DB, limit int, offset int) interface{} {
	var users []User

	db.Offset(offset).Limit(limit).Find(&users)

	return users
}
*/
