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
	app.Post("/api/forum", controllers.Message)

	// Middleware uses for making sure that a valid user is logged in
	// Otherwise, other functions are not available.
	app.Use(middleware.IsAuthenticated)

	// Private Routes
	app.Put("/api/users/info", controllers.UpdateInfo)
	app.Put("/api/users/password", controllers.UpdatePassword)

	app.Get("/api/user", controllers.User)
	app.Post("/api/logout", controllers.Logout)

	app.Get("/api/msgs", controllers.AllMsgs)
	app.Post("/api/msgs", controllers.CreateMsg)
	app.Delete("/api/msgs", controllers.DeleteMsg)

	app.Get("/api/users", controllers.AllUsers)
	app.Post("/api/users", controllers.CreateUser)
	app.Get("/api/users/:id", controllers.GetUser)
	app.Put("/api/users/:id", controllers.UpdateUser)
	app.Delete("/api/users/:id", controllers.DeleteUser)
}
