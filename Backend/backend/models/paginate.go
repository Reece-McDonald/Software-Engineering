package models

import (
	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"
	"math"
)

// Paginate Allows for the outputting of database data into JSON output.
// Each page is limited to 20 users. Once the limit has been reached, a new page is created.
func Paginate(db *gorm.DB, entity Entity, page int) fiber.Map {
	limit := 25
	offset := (page - 1) * limit

	data := entity.Take(db, limit, offset)

	totalUsers := entity.Count(db)

	return fiber.Map{
		"data": data,
		"meta": fiber.Map{
			"total":    totalUsers,
			"page":     page,
			"lastPage": math.Ceil(float64(int(totalUsers) / limit)),
		},
	}
}
