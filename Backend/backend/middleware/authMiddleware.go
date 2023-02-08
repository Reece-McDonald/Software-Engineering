package middleware

import (
	"Ga1ors/util"
	"github.com/gofiber/fiber/v2"
)

// IsAuthenticated Validates that the current user is logged in and is a valid one
func IsAuthenticated(c *fiber.Ctx) error {
	cookie := c.Cookies("jwt")

	if _, err := util.ParseJwt(cookie); err != nil {
		c.Status(fiber.StatusUnauthorized)
		return c.JSON(fiber.Map{
			"message": "User unauthenticated",
		})
	}

	return c.Next() // go to next route
}
