package models

import (
	"gorm.io/gorm"
)

type Message struct {
	IdNum     uint   `json:"id"`
	FirstName string `json:"firstName"`
	LastName  string `json:"lastName"`
	Message   string `json:"messagePost"`
	CTime     string `json:"currentTime"`
}

// Count Used in paginate to retrieve numbers of users in database.
func (message *Message) Count(db *gorm.DB) int64 { //might have to change to MDB
	var total int64

	db.Model(&Message{}).Count(&total)

	return total
}

// Take Used in retrieving the number of messages for the current page based on the offset and limit of
// the pagination function.
func (message *Message) Take(db *gorm.DB, limit int, offset int) interface{} {
	var msgs []Message

	db.Offset(offset).Limit(limit).Find(&msgs)

	return msgs
}
