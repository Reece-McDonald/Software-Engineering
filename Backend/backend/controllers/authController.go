package controllers

import (
	"Ga1ors/database"
	"Ga1ors/models"
	"Ga1ors/util"
	"strconv"
	"time"

	"github.com/gofiber/fiber/v2"
)

// Register Allows for the registering of a user. Uses endpoint ['/api/register']
// when adding a new user. If successful, will add new user to database.
// POST REQUEST
func Register(c *fiber.Ctx) error { // I believe this should be good. TODO: Only UF emails are allowed
	var userRegisterInformation map[string]string

	if err := c.BodyParser(&userRegisterInformation); err != nil {
		return err
	}

	if ValidUFEmail(userRegisterInformation["email"]) == false {
		c.Status(400)
		return c.JSON(fiber.Map{
			"message": "Invalid Email! (Must be a valid ufl.edu address)", // Prints error message
		})
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
func Login(c *fiber.Ctx) error { // I believe this should be good. TODO: Only UF emails are allowed
	var userLoginInformation map[string]string

	if err := c.BodyParser(&userLoginInformation); err != nil {
		return err
	}

	var user models.User

	// This should check for if an email exists or not, the register function will check for valid UF emails, so if the email doesn't exist it is neither a valid UF email nor one that exists.
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

func ValidUFEmail(e string) bool { // Function to inform user their email isn't valid; i.e. not a UF email (ending in @ufl.edu)
	if len(e) < 9 { // Checks if valid size, which is at least 9 chars, 8 for "@ufl.edu" and 1 for at least one preceding character.
		return false // returns false if the input email is less than a valid email length
	}
	var email int = len(e) - 8               // email will store the length of the email without "@uf.edu" for parsing of the username later
	var dom string = string(e[email:len(e)]) // dom will store the final 8 chars which should be the "@ufl.edu" for comparison
	if dom != "@ufl.edu" {                   // if-else for checking if the valid domain of "@ufl.edu" is in dom, if so, loop will break and UNinput is updated with the first part of the email
		return false // returns false if the dom variable doesn't include the proper domain.
	} else {
		return true // returns true if valid email
	}
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
