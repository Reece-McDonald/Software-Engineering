package controllers

import (
	"Ga1ors/database"
	"Ga1ors/models"
	"github.com/gofiber/fiber/v2"
	"strconv"
)

// These functions are useful for testing for particular users through the use of postman.
// Create, Update, and Delete can be manipulated using JSON inputs structure like a User struct.
// These functions are aimed more for admin work of a database

// AllUsers Allows for the retrieval of all users in the database in JSON form.
// Uses endpoints ['/api/users']
// GET REQUEST
func AllUsers(c *fiber.Ctx) error {
	page, _ := strconv.Atoi(c.Query("page", "1"))

	return c.JSON(models.Paginate(database.DB, &models.User{}, page))
}

// CreateUser Allows for the creation of a user using JSON.
// Uses endpoints ['/api/users']
// POST REQUEST
func CreateUser(c *fiber.Ctx) error {
	var user models.User

	if err := c.BodyParser(&user); err != nil {
		return err
	}

	user.SetPassword("1234")

	database.DB.Create(&user)

	return c.JSON(user)
}

// GetUser Allows for the retrieval of a particular user using their assigned
// ID in the database. Uses endpoints ['/api/users/:id']
// GET REQUEST
func GetUser(c *fiber.Ctx) error {
	id, _ := strconv.Atoi(c.Params("id"))

	user := models.User{
		Id: uint(id),
	}

	database.DB.Find(&user)

	return c.JSON(user)
}

// UpdateUser Allows for updating of a particular users using their
// assigned ID in the database. ['/api/users/:id']
// PUT REQUEST
func UpdateUser(c *fiber.Ctx) error {
	id, _ := strconv.Atoi(c.Params("id"))

	user := models.User{
		Id: uint(id),
	}

	if err := c.BodyParser(&user); err != nil {
		return err
	}

	database.DB.Model(&user).Updates(user)

	return c.JSON(user)
}

// DeleteUser Allows for deleting of a particular users using their
// assigned ID in the database. ['/api/users/:id']
// Delete REQUEST
func DeleteUser(c *fiber.Ctx) error {
	id, _ := strconv.Atoi(c.Params("id"))

	user := models.User{
		Id: uint(id),
	}

	database.DB.Delete(&user)

	return nil
}
