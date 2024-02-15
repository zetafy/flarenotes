package initializers

import (
	"github.com/joho/godotenv"
	"log"
)

func LoadEnv() {
	err := godotenv.Load()

	if err != nil {
		log.Fatal("[*] Error: failed to load .env file!")
	}
}
