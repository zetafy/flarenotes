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
		Users             []string `json:"users"`
		Messages          []string `json:"messages"`
		Dm_blocker        string   `json:"dm_blocker"`
		Is_group_chat     bool     `json:"is_group_chat"`
		Group_name        string   `json:"group_name"`
		Group_description string   `json:"group_description"`
	}

	if err := context.Bind(&body); err != nil {
		context.JSON(400, gin.H{"error": err.Error()})
		return
	}

	chat := models.Chat{
		Users:             body.Users,
		Messages:          body.Messages,
		Dm_blocker:        body.Dm_blocker,
		Is_group_chat:     body.Is_group_chat,
		Group_name:        body.Group_name,
		Group_description: body.Group_description,
	}

	var results []models.Notebook
	err := supabase.DB.From("chats").Insert(&chat).Execute(&results)
	if err != nil {
		context.JSON(400, gin.H{"error": err.Error()})
		return
	}

	context.JSON(201, gin.H{
		"status": 201,
		"chat":   chat,
	})
}

func UpdateChat(context *gin.Context) {
	id := context.Param("id")

	supabase := initializers.Supabase()

	var body struct {
		Users             []string `json:"users"`
		Messages          []string `json:"messages"`
		Dm_blocker        string   `json:"dm_blocker"`
		Is_group_chat     bool     `json:"is_group_chat"`
		Group_name        string   `json:"group_name"`
		Group_description string   `json:"group_description"`
	}

	if err := context.Bind(&body); err != nil {
		context.JSON(400, gin.H{"error": err.Error()})
		return
	}

	chat := models.Chat{
		Users:             body.Users,
		Messages:          body.Messages,
		Dm_blocker:        body.Dm_blocker,
		Is_group_chat:     body.Is_group_chat,
		Group_name:        body.Group_name,
		Group_description: body.Group_description,
	}

	var results []models.Chat
	err := supabase.DB.From("chats").Update(&chat).Eq("id", id).Execute(&results)
	if err != nil {
		context.JSON(400, gin.H{"error": err.Error})
		return
	}

	context.JSON(200, gin.H{
		"status": 200,
		"chat":   chat,
	})
}

func DeleteChat(context *gin.Context) {
	id := context.Param("id")

	supabase := initializers.Supabase()

	var results []models.Chat
	err := supabase.DB.From("chats").Delete().Eq("id", id).Execute(&results)
	if err != nil {
		context.JSON(400, gin.H{"error": err.Error()})
		return
	}

	context.JSON(200, gin.H{"message": "Chat deleted successfully"})
}
