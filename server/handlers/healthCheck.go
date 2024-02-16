package handlers

import (
	"github.com/gin-gonic/gin"
)

func HealthCheck(context *gin.Context) {
	helpMessage := `
███████╗██╗      █████╗ ██████╗ ███████╗███╗   ██╗ ██████╗ ████████╗███████╗███████╗
██╔════╝██║     ██╔══██╗██╔══██╗██╔════╝████╗  ██║██╔═══██╗╚══██╔══╝██╔════╝██╔════╝
█████╗  ██║     ███████║██████╔╝█████╗  ██╔██╗ ██║██║   ██║   ██║   █████╗  ███████╗
██╔══╝  ██║     ██╔══██║██╔══██╗██╔══╝  ██║╚██╗██║██║   ██║   ██║   ██╔══╝  ╚════██║
██║     ███████╗██║  ██║██║  ██║███████╗██║ ╚████║╚██████╔╝   ██║   ███████╗███████║
╚═╝     ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝ ╚═════╝    ╚═╝   ╚══════╝╚══════╝

Flarenotes API v0.1.0

(GET: /users) Fetch all users
(GET: /users/:id) Fetch user by id
(POST: /users) Create user
(PATCH: /users/:id) Update user by id
(DELETE: /users/:id) Delete user by id

(GET: /notebooks) Fetch all notebooks
(GET: /notebooks/:id) Fetch notebook by id
(POST: /notebooks) Create notebook
(PATCH: /notebooks/:id) Update notebook by id
(DELETE: /notebooks/:id) Delete notebook by id

(GET: /notes) Fetch all notes
(GET: /notes/:id) Fetch note by id
(POST: /notes) Create note
(PATCH: /notes/:id) Update note id
(DELETE: /notes/:id) Delete note by id

(GET: /chats) Fetch all chats
(GET: /chats/:id) Fetch chat by id
(POST: /chats) Create chat
(PATCH: /chats/:id) Update chat by id
(DELETE: /chats/:id) Delete chat by id

`
	context.String(200, helpMessage)
}
