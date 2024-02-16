package routes

import (
	"github.com/gin-gonic/gin"
	"server/handlers"
)

func SetRoutes(router *gin.Engine) {
	router.GET("/", handlers.HealthCheck)

	// Users
	router.GET("/users", handlers.FetchAllUsers)
	router.GET("/users/:id", handlers.FetchUserById)
	router.POST("/users", handlers.CreateUser)
	router.PATCH("/users/:id", handlers.UpdateUser)
	router.DELETE("/users/:id", handlers.DeleteUser)

	// Notebooks
	router.GET("/notebooks", handlers.FetchAllNotebooks)
	router.GET("/notebooks/:id", handlers.FetchNotebookById)
	router.POST("/notebooks", handlers.CreateNotebook)
	router.PATCH("/notebooks/:id", handlers.UpdateNotebook)
	router.DELETE("/notebooks/:id", handlers.DeleteNotebook)

	// Notes

	// Chats

}
