package models

type Notebook struct {
	Owner       string   `json:"owner" db:"owner"`
	Title       string   `json:"title" db:"title"`
	Description string   `json:"description" db:"description"`
	Notes       []string `json:"notes" db:"notes"`
}
