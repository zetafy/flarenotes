package main

import (
	"server/initializers"
	"server/routes"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	initializers.LoadEnv()

	router := gin.Default()

	router.Use(cors.New(cors.Config{
		AllowOrigins: []string{"*"},
		AllowMethods: []string{"GET", "POST", "PUT", "PATCH", "DELETE"},
		// AllowHeaders: []string{"Content-Type", "Access-Control-Allow-Origin", "Access-Control-Allow-Headers", "Access-Control-Allow-Methods", "Authorization"},
		AllowHeaders:  []string{"Content-Type", "Authorization"},
		ExposeHeaders: []string{"Content-Length", "Access-Control-Allow-Origin"},
	}))

	routes.SetRoutes(router)

	router.Run() // listen and serve on 0.0.0.0:8080
}
