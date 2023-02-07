package controllers

import (
	"Ga1ors/database"
	"Ga1ors/models"
	"github.com/gofiber/fiber/v2"
	"math"
	"strconv"
)

func AllUsers(c *fiber.Ctx) error {
	page, _ := strconv.Atoi(c.Query("page", "1"))
	limit := 5
	offset := (page - 1) * limit

	var totalUsers int64
	var users []models.User

	database.DB.Offset(offset).Limit(limit).Find(&users)

	database.DB.Model(&models.User{}).Count(&totalUsers)

	return c.JSON(fiber.Map{
		"data": users,
		"meta": fiber.Map{
			"total":    totalUsers,
			"page":     page,
			"lastPage": math.Ceil(float64(int(totalUsers) / limit)),
		},
	})
}

func CreateUser(c *fiber.Ctx) error {
	var user models.User

	if err := c.BodyParser(&user); err != nil {
		return err
	}

	user.SetPassword("1234")

	database.DB.Create(&user)

	return c.JSON(user)
}

func GetUser(c *fiber.Ctx) error {
	id, _ := strconv.Atoi(c.Params("id"))

	user := models.User{
		Id: uint(id),
	}

	database.DB.Find(&user)

	return c.JSON(user)
}

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

func DeleteUser(c *fiber.Ctx) error {
	id, _ := strconv.Atoi(c.Params("id"))

	user := models.User{
		Id: uint(id),
	}

	database.DB.Delete(&user)

	return nil
}
