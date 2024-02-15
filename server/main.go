package main

import (
	"github.com/gin-gonic/gin"
	"server/initializers"
)

func main() {
	initializers.LoadEnv()

	router := gin.Default() // Using gin
	router.GET("/", func(context *gin.Context) {
		context.JSON(200, gin.H{
			"message": "hello world",
		})
	})
	router.Run() // listen and serve on 0.0.0.0:8080
}
