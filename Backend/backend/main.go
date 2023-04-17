package main

import (
	"Ga1ors/database"
	"Ga1ors/routes"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

// Resource: 'https://www.udemy.com/course/angular-go-admin/'
func main() {
	database.Connect()

	database.ConnectMsg()

	app := fiber.New()

	app.Use(cors.New(cors.Config{ // block requests from different ports, allows frontend to get cookies
		AllowCredentials: true,
	}))

	routes.Setup(app)
	
	//runTime := time.Date(time.Now().Year(), time.Now().Month(), time.Now().Day(), 12, 0, 0, 0, time.Local)

	// Schedule your function to run at the desired time
	//time.AfterFunc(runTime.Sub(time.Now()), doSomething)

	

	app.Listen(":8000")
	// Block the main goroutine from exiting
	//select {}
}
