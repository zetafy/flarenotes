package models

type Note struct {
	Authors  []string `json:"authors" db:"authors"`
	Title    string   `json:"title" db:"title"`
	Content  string   `json:"content" db:"content"`
	Notebook string   `json:"notebook" db:"notebook"`
}
