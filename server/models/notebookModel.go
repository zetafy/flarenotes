package models

import "github.com/google/uuid"

type Notebook struct {
  title string
  notes []uuid.UUID
}
