package controllers

import (
	"Ga1ors/models"
	"github.com/gofiber/fiber/v2"
)

func Register(c *fiber.Ctx) error {
	user := models.User{
		FirstName: "John",
		LastName:  "Smith",
		Email:     "john@smith.com",
		Password:  "johnsmith1",
	}

	return c.JSON(user)
}
