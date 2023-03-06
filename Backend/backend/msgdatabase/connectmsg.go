package msgdatabase

import (
	"Ga1ors/models"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var MDB *gorm.DB

func ConnectMsg() {
	msgDatabase, err := gorm.Open(mysql.Open("root:root@/ga1orsmsg"), &gorm.Config{}) // TODO: Change from local database to cloud database

	if err != nil {
		panic("Could not connect to database")
	}

	MDB = msgDatabase
	// populate database tables with users, posts, etc.
	msgDatabase.AutoMigrate(&models.Message{})

}
