package routes

import (
  "github.com/gin-gonic/gin"
  "server/handlers"
)

func SetupRoutes(router *gin.Engine) {
	router.GET("/", handlers.HealthCheck)
	router.POST("/users", handlers.CreateUser)
}
