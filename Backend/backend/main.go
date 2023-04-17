package main

import (
	"Ga1ors/database"
	"Ga1ors/routes"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func DeleteMsg() {
	database.DB.Exec("UPDATE users SET posted_today = false")
	database.MDB.Exec("DELETE FROM messages")
}

// Resource: 'https://www.udemy.com/course/angular-go-admin/'
func main() {
	database.Connect()

	database.ConnectMsg()

	app := fiber.New()

	app.Use(cors.New(cors.Config{ // block requests from different ports, allows frontend to get cookies
		AllowCredentials: true,
	}))

	routes.Setup(app)

	runTime := 20 * time.Second

	// Schedule your function to run at the desired time
	time.AfterFunc(runTime, DeleteMsg)

	app.Listen(":8000")
	// Block the main goroutine from exiting
	select {}
}
