package handlers

import (
	"github.com/gin-gonic/gin"
)

func HealthCheck(context *gin.Context) {
	context.JSON(200, gin.H{
		"message": "Server is running!",
	})
}
