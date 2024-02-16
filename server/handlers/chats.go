package handlers

import (
	"github.com/gin-gonic/gin"
	"server/initializers"
	"server/models"
)

func FetchAllChats(context *gin.Context) {
	supabase := initializers.Supabase()

	var results []models.Chat
	err := supabase.DB.From("chats").Select("*").Execute(&results)
	if err != nil {
		context.JSON(400, gin.H{"error": err.Error()})
		return
	}

	context.JSON(200, gin.H{
		"status": 200,
		"chats":  results,
	})
}

func FetchChatById(context *gin.Context) {
	id := context.Param("id")

	supabase := initializers.Supabase()

	var chats []models.Chat
	err := supabase.DB.From("chats").Select("*").Eq("id", id).Execute(&chats)
	if err != nil {
		context.JSON(400, gin.H{"error": err.Error()})
		return
	}

	if len(chats) == 0 {
		context.JSON(404, gin.H{"error": "Notebook not found"})
		return
	}

	chat := chats[0]
	context.JSON(200, gin.H{
		"status": 200,
		"chats":  chat,
	})
}

func CreateChat(context *gin.Context) {

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

func UpdateChat(context *gin.Context) {
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

func DeleteChat(context *gin.Context) {
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
