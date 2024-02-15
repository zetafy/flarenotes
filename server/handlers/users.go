package handlers

import (
	"github.com/gin-gonic/gin"
	"server/initializers"
	"server/models"
)

func FetchAllUsers(context *gin.Context) {
	supabase := initializers.Supabase()

	var results []models.User
	err := supabase.DB.From("users").Select("*").Execute(&results)
	if err != nil {
		context.JSON(400, gin.H{"error": err.Error()})
		return
	}

	context.JSON(200, gin.H{
		"status": 200,
		"users":  results,
	})
}

func FetchUserById(context *gin.Context) {
	id := context.Param("id")

	supabase := initializers.Supabase()

	var users []models.User
	err := supabase.DB.From("users").Select("*").Eq("id", id).Execute(&users)
	if err != nil {
		context.JSON(400, gin.H{"error": err.Error()})
		return
	}

	if len(users) == 0 {
		context.JSON(404, gin.H{"error": "User not found"})
		return
	}

	user := users[0]
	context.JSON(200, gin.H{
		"status": 200,
		"users":  user,
	})
}

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
	err := supabase.DB.From("users").Insert(&user).Execute(&results)
	if err != nil {
		context.JSON(400, gin.H{"error": err.Error()})
		return
	}

	context.JSON(201, gin.H{
		"status": 201,
		"user":   user,
	})
}

func UpdateUser(context *gin.Context) {
	id := context.Param("id")

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
	err := supabase.DB.From("users").Update(&user).Eq("id", id).Execute(&results)
	if err != nil {
		context.JSON(400, gin.H{"error": err.Error()})
		return
	}

	context.JSON(200, gin.H{
		"status": 200,
		"user":   user,
	})
}

func DeleteUser(context *gin.Context) {
	id := context.Param("id") // Get the user ID from the request parameters

	supabase := initializers.Supabase()

	var results []models.User
	err := supabase.DB.From("users").Delete().Eq("id", id).Execute(&results)
	if err != nil {
		context.JSON(400, gin.H{"error": err.Error()})
		return
	}

	context.JSON(200, gin.H{"message": "User deleted successfully"})
}
