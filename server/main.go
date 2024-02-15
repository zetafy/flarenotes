package main

import (
	"github.com/gin-gonic/gin"
	"server/initializers"
	"server/routes"
)

func main() {
	initializers.LoadEnv()

	router := gin.Default()
	routes.SetupRoutes(router)

	router.Run() // listen and serve on 0.0.0.0:8080
}
