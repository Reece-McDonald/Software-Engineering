package util

import (
	"github.com/golang-jwt/jwt/v4"
	"time"
)

const SecretKey = "secret"

// GenerateJwt Generates jwt token used for cookies.
func GenerateJwt(issuer string) (string, error) {
	claims := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.RegisteredClaims{
		Issuer:    issuer,
		ExpiresAt: &jwt.NumericDate{Time: time.Now().Add(time.Hour * 24)},
	})

	return claims.SignedString([]byte(SecretKey))
}

// ParseJwt Parses the jwt to return the Issuer (Issuer corresponds to the ID of the user in the database.)
func ParseJwt(cookie string) (string, error) {
	token, err := jwt.ParseWithClaims(cookie, &jwt.RegisteredClaims{}, func(token *jwt.Token) (interface{}, error) {
		return []byte(SecretKey), nil
	})

	if err != nil || !token.Valid {
		return "", err
	}

	claims := token.Claims.(*jwt.RegisteredClaims)

	return claims.Issuer, nil
}
