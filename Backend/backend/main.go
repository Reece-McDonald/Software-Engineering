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

	app := fiber.New()

	app.Use(cors.New(cors.Config{ // block requests from different ports, allows frontend to get cookies
		AllowCredentials: true,
	}))

	routes.Setup(app)

	app.Listen(":8000")
}
