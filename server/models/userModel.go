package models

import (
	"github.com/google/uuid"
)

type User struct {
	username    string
	email       string
	password    string
	description string
	roles       []string
	notebooks   []uuid.UUID
}
