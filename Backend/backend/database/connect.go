package database

import (
	"Ga1ors/models"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB
var mDB *gorm.DB

func Connect() {
	database, err := gorm.Open(mysql.Open("root:root@/ga1ors"), &gorm.Config{})       // TODO: Change from local database to cloud database
	msgDatabase, err := gorm.Open(mysql.Open("root:root@/ga1orsmsg"), &gorm.Config{}) // TODO: Change from local database to cloud database

	if err != nil {
		panic("Could not connect to database")
	}

	DB = database
	mDB = msgDatabase
	// populate database tables with users, posts, etc.
	database.AutoMigrate(&models.User{})
	msgDatabase.AutoMigrate(&models.Message{})

}
