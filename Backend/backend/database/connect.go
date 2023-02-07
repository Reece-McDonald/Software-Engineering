package database

import (
	"Ga1ors/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	database, err := gorm.Open(mysql.Open("root:rhyan6815@/ga1ors"), &gorm.Config{})

	if err != nil {
		panic("Could not connect to database")
	}

	DB = database

	// populate database tables with users, posts, etc.
	database.AutoMigrate(&models.User{})
}
