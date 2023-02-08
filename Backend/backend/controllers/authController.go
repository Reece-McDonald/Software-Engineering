package controllers

import (
	"Ga1ors/database"
	"Ga1ors/models"
	"Ga1ors/util"
	"github.com/gofiber/fiber/v2"
	"strconv"
	"time"
)

// Register Allows for the registering of a user. Uses endpoint ['/api/register']
// when adding a new user. If successful, will add new user to database.
// POST REQUEST
func Register(c *fiber.Ctx) error { // TODO: Only UF emails are allowed
	var userRegisterInformation map[string]string

	if err := c.BodyParser(&userRegisterInformation); err != nil {
		return err
	}

	if userRegisterInformation["password"] != userRegisterInformation["passwordConfirm"] {
		c.Status(400)
		return c.JSON(fiber.Map{
			"message": "Passwords do not match",
		})
	}

	user := models.User{
		FirstName: userRegisterInformation["firstName"],
		LastName:  userRegisterInformation["lastName"],
		Email:     userRegisterInformation["email"],
	}

	user.SetPassword(userRegisterInformation["password"])

	database.DB.Create(&user)

	return c.JSON(user)
}

// Login Allows for a user to login. Uses endpoint ['/api/register']
// when users try to log in. Checks for valid email in database
// and valid password for that email.
// POST REQUEST
func Login(c *fiber.Ctx) error { // TODO: Only UF emails are allowed
	var userLoginInformation map[string]string

	if err := c.BodyParser(&userLoginInformation); err != nil {
		return err
	}

	var user models.User

	database.DB.Where("email = ?", userLoginInformation["email"]).First(&user) // get user from database

	if user.Id == 0 {
		c.Status(404)
		return c.JSON(fiber.Map{
			"message": "User not found",
		})
	}

	if err := user.ComparePassword(userLoginInformation["password"]); err != nil {
		c.Status(400)
		return c.JSON(fiber.Map{
			"message": "Passwords do not match",
		})
	}

	token, err := util.GenerateJwt(strconv.Itoa(int(user.Id)))

	if err != nil {
		return c.SendStatus(fiber.StatusInternalServerError)
	}

	// Creates session cookie using JWT. Important for check that user is logged in throughout the session.
	cookie := fiber.Cookie{
		Name:     "jwt",
		Value:    token,
		Expires:  time.Now().Add(time.Hour * 24),
		HTTPOnly: true, // frontend can't access cookie
	}

	c.Cookie(&cookie)

	return c.JSON(fiber.Map{
		"message": "Successful login",
	})
}

// User Allows for the retrieval of the current user from the database
// based on cookie. Uses endpoint ['/api/user'].
// GET REQUEST
func User(c *fiber.Ctx) error {
	cookie := c.Cookies("jwt")

	id, _ := util.ParseJwt(cookie)

	var user models.User

	database.DB.Where("id = ?", id).First(&user)

	return c.JSON(user)
}

// Logout Allows for currently logged-in user to be logged out.
// Uses endpoint ['/api/logout'].
// POST REQUEST
func Logout(c *fiber.Ctx) error {
	cookie := fiber.Cookie{ // Remove cookie by setting it to the past
		Name:     "jwt",
		Value:    "",
		Expires:  time.Now().Add(-time.Hour), // Set to past in order to remove cookie.
		HTTPOnly: true,
	}

	c.Cookie(&cookie)

	return c.JSON(fiber.Map{
		"message": "Successful log out",
	})
}

// UpdateInfo Allows for updating the user data (does not include password).
// Uses endpoint ['/api/users/info'].
// PUT REQUEST
func UpdateInfo(c *fiber.Ctx) error {
	var userUpdatedInformation map[string]string

	if err := c.BodyParser(&userUpdatedInformation); err != nil {
		return err
	}

	cookie := c.Cookies("jwt")

	id, _ := util.ParseJwt(cookie)

	userId, _ := strconv.Atoi(id)

	user := models.User{
		Id:        uint(userId),
		FirstName: userUpdatedInformation["firstName"],
		LastName:  userUpdatedInformation["lastName"],
		Email:     userUpdatedInformation["email"],
	}

	database.DB.Model(&user).Updates(user)

	return c.JSON(user)

}

// UpdatePassword Allows for changing of the password of a user. Uses endpoint ['/api/users/password'].
// PUT REQUEST
func UpdatePassword(c *fiber.Ctx) error {
	var userUpdatedPassword map[string]string

	if err := c.BodyParser(&userUpdatedPassword); err != nil {
		return err
	}

	if userUpdatedPassword["password"] != userUpdatedPassword["passwordConfirm"] {
		c.Status(400)
		return c.JSON(fiber.Map{
			"message": "Passwords do not match",
		})
	}

	cookie := c.Cookies("jwt")

	id, _ := util.ParseJwt(cookie)

	userId, _ := strconv.Atoi(id)

	user := models.User{
		Id: uint(userId),
	}

	user.SetPassword(userUpdatedPassword["password"])

	database.DB.Model(&user).Updates(user)

	return c.JSON(user)
}
