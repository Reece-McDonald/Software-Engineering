package routes

import (
	"Ga1ors/controllers"
	"Ga1ors/middleware"
	"github.com/gofiber/fiber/v2"
)

func Setup(app *fiber.App) {
	// Public Routes
	app.Post("/api/register", controllers.Register)
	app.Post("/api/login", controllers.Login)

	app.Use(middleware.IsAuthenticated)

	// Private Routes
	app.Get("/api/user", controllers.User)
	app.Post("/api/logout", controllers.Logout)

}
