package handlers

import (
	"github.com/gin-gonic/gin"
	"server/initializers"
	"server/models"
)

func FetchAllNotebooks(context *gin.Context) {
	supabase := initializers.Supabase()

	var results []models.Notebook
	err := supabase.DB.From("notebooks").Select("*").Execute(&results)
	if err != nil {
		context.JSON(400, gin.H{"error": err.Error()})
		return
	}

	context.JSON(200, gin.H{
		"status":    200,
		"notebooks": results,
	})
}

func FetchNotebookById(context *gin.Context) {
	id := context.Param("id")

	supabase := initializers.Supabase()

	var notebooks []models.Notebook
	err := supabase.DB.From("notebooks").Select("*").Eq("id", id).Execute(&notebooks)
	if err != nil {
		context.JSON(400, gin.H{"error": err.Error()})
		return
	}

	if len(notebooks) == 0 {
		context.JSON(404, gin.H{"error": "Notebook not found"})
		return
	}

	notebook := notebooks[0]
	context.JSON(200, gin.H{
		"status":    200,
		"notebooks": notebook,
	})
}

func CreateNotebook(context *gin.Context) {

	supabase := initializers.Supabase()

	var body struct {
		Owner       string   `json:"owner"`
		Title       string   `json:"title"`
		Description string   `json:"description"`
		Notes       []string `json:"notes"`
	}

	if err := context.Bind(&body); err != nil {
		context.JSON(400, gin.H{"error": err.Error()})
		return
	}

	notebook := models.Notebook{
		Owner:       body.Owner,
		Title:       body.Title,
		Description: body.Description,
		Notes:       body.Notes,
	}

	var results []models.Notebook
	err := supabase.DB.From("notebooks").Insert(&notebook).Execute(&results)
	if err != nil {
		context.JSON(400, gin.H{"error": err.Error()})
		return
	}

	context.JSON(201, gin.H{
		"status":   201,
		"notebook": notebook,
	})
}

func UpdateNotebook(context *gin.Context) {
	id := context.Param("id")

	supabase := initializers.Supabase()

	var body struct {
		Owner       string   `json:"owner"`
		Title       string   `json:"title"`
		Description string   `json:"description"`
		Notes       []string `json:"notes"`
	}

	if err := context.Bind(&body); err != nil {
		context.JSON(400, gin.H{"error": err.Error()})
		return
	}

	notebook := models.Notebook{
		Owner:       body.Owner,
		Title:       body.Title,
		Description: body.Description,
		Notes:       body.Notes,
	}

	var results []models.Notebook
	err := supabase.DB.From("notebooks").Update(&notebook).Eq("id", id).Execute(&results)
	if err != nil {
		context.JSON(400, gin.H{"error": err.Error})
		return
	}

	context.JSON(201, gin.H{
		"status":   201,
		"notebook": notebook,
	})
}

func DeleteNotebook(context *gin.Context) {
	id := context.Param("id") // Get the user ID from the request parameters

	supabase := initializers.Supabase()

	var results []models.User
	err := supabase.DB.From("notebooks").Delete().Eq("id", id).Execute(&results)
	if err != nil {
		context.JSON(400, gin.H{"error": err.Error()})
		return
	}

	context.JSON(200, gin.H{"message": "Notebook deleted successfully"})
}
