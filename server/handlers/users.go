package handlers

import (
	"github.com/gin-gonic/gin"
	"server/initializers"
	"server/models"
)

func CreateUser(context *gin.Context) {
	supabase := initializers.Supabase()

	var body struct {
		Username    string   `json:"username"`
		Email       string   `json:"email"`
		Password    string   `json:"password"`
		Description string   `json:"description"`
		Roles       []string `json:"roles"`
		Notebooks   []string `json:"notebooks"` // Assuming you handle conversion to []uuid.UUID elsewhere if necessary
	}

	if err := context.Bind(&body); err != nil {
		context.JSON(400, gin.H{"error": err.Error()})
		return
	}

	user := models.User{
		Username:    body.Username,
		Email:       body.Email,
		Password:    body.Password,
		Description: body.Description,
		Roles:       body.Roles,
		Notebooks:   body.Notebooks,
	}

	var results []models.User
	if err := supabase.DB.From("users").Insert(&user).Execute(&results); err != nil {
		context.JSON(400, gin.H{"error": err.Error()})
		return
	}

	context.JSON(200, gin.H{
		"user": user,
	})
}
