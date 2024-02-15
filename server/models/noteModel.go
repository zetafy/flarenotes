package models

import "github.com/google/uuid"

type Note struct {
	authors  []string
	title    string
	content  string
	notebook uuid.UUID
}
