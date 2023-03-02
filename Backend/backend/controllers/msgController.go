package controllers

import (
	"Ga1ors/database"
	"Ga1ors/models"
	"Ga1ors/msgdatabase"
	"strconv"

	"github.com/gofiber/fiber/v2"
)

// These functions are useful for testing for particular users through the use of postman.
// Create, Update, and Delete can be manipulated using JSON inputs structure like a User struct.
// These functions are aimed more for admin work of a database

// AllUsers Allows for the retrieval of all users in the database in JSON form.
// Uses endpoints ['/api/msgs']
// GET REQUEST
func AllMsgs(c *fiber.Ctx) error {
	page, _ := strconv.Atoi(c.Query("page", "1"))

	return c.JSON(models.Paginate(msgdatabase.MDB, &models.Message{}, page))
}

// CreateUser Allows for the creation of a user using JSON.
// Uses endpoints ['/api/msgs']
// POST REQUEST
func CreateMsg(c *fiber.Ctx) error {
	var user models.User

	if err := c.BodyParser(&user); err != nil {
		return err
	}

	user.SetPassword("1234")

	database.DB.Create(&user)

	return c.JSON(user)
}

// GetUser Allows for the retrieval of a particular user using their assigned
// ID in the database. Uses endpoints ['/api/msgs/:id']
// GET REQUEST
func GetMsg(c *fiber.Ctx) error {
	id, _ := strconv.Atoi(c.Params("id"))

	user := models.User{
		Id: uint(id),
	}

	database.DB.Find(&user)

	return c.JSON(user)
}

// UpdateUser Allows for updating of a particular users using their
// assigned ID in the database. ['/api/msgs/:id']
// PUT REQUEST
func UpdateMsg(c *fiber.Ctx) error {
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
// assigned ID in the database. ['/api/msgs/:id']
// Delete REQUEST
func DeleteMsg(c *fiber.Ctx) error {
	id, _ := strconv.Atoi(c.Params("id"))

	user := models.User{
		Id: uint(id),
	}

	database.DB.Delete(&user)

	return nil
}
