package models

import "gorm.io/gorm"

// Entity Used for populating JSON data. Allows for other types of data aside from user.
type Entity interface {
	Count(db *gorm.DB) int64
	Take(db *gorm.DB, limit int, offset int) interface{}
}
