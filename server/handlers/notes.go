package handlers

import (
	"github.com/gin-gonic/gin"
	"server/initializers"
	"server/models"
)

func FetchAllNotes(context *gin.Context) {
	supabase := initializers.Supabase()

	var results []models.Note
	err := supabase.DB.From("notes").Select("*").Execute(&results)
	if err != nil {
		context.JSON(400, gin.H{"error": err.Error()})
		return
	}

	context.JSON(200, gin.H{
		"status": 200,
		"notes":  results,
	})
}

func FetchNoteById(context *gin.Context) {
	id := context.Param("id")

	supabase := initializers.Supabase()

	var notes []models.Notebook
	err := supabase.DB.From("notes").Select("*").Eq("id", id).Execute(&notes)
	if err != nil {
		context.JSON(400, gin.H{"error": err.Error()})
		return
	}

	if len(notes) == 0 {
		context.JSON(404, gin.H{"error": "Notebook not found"})
		return
	}

	note := notes[0]
	context.JSON(200, gin.H{
		"status": 200,
		"notes":  note,
	})
}

func CreateNote(context *gin.Context) {

	supabase := initializers.Supabase()
	var body struct {
		Authors  []string `json:"authors"`
		Title    string   `json:"title"`
		Content  string   `json:"content"`
		Notebook string   `json:"notebook"`
	}

	if err := context.Bind(&body); err != nil {
		context.JSON(400, gin.H{"error": err.Error()})
		return
	}

	note := models.Note{
		Authors:  body.Authors,
		Title:    body.Title,
		Content:  body.Content,
		Notebook: body.Notebook,
	}

	var results []models.Notebook
	err := supabase.DB.From("notebooks").Insert(&note).Execute(&results)
	if err != nil {
		context.JSON(400, gin.H{"error": err.Error()})
		return
	}

	context.JSON(201, gin.H{
		"status": 201,
		"note":   note,
	})
}

func UpdateNote(context *gin.Context) {
	id := context.Param("id")

	supabase := initializers.Supabase()

	var body struct {
		Authors  []string `json:"owner"`
		Title    string   `json:"title"`
		Content  string   `json:"content"`
		Notebook string   `json:"notebook"`
	}

	if err := context.Bind(&body); err != nil {
		context.JSON(400, gin.H{"error": err.Error()})
		return
	}

	note := models.Note{
		Authors:  body.Authors,
		Title:    body.Title,
		Content:  body.Content,
		Notebook: body.Notebook,
	}

	var results []models.Notebook
	err := supabase.DB.From("notes").Update(&note).Eq("id", id).Execute(&results)
	if err != nil {
		context.JSON(400, gin.H{"error": err.Error})
		return
	}

	context.JSON(201, gin.H{
		"status": 201,
		"note":   note,
	})
}

func DeleteNote(context *gin.Context) {
	id := context.Param("id")

	supabase := initializers.Supabase()

	var results []models.User
	err := supabase.DB.From("notes").Delete().Eq("id", id).Execute(&results)
	if err != nil {
		context.JSON(400, gin.H{"error": err.Error()})
		return
	}

	context.JSON(200, gin.H{"message": "Note deleted successfully"})
}
