package models

type Chat struct {
	Users             []string `json:"users" db:"users"`
	Dm_blocker        string   `json:"dm_blocker" db:"dm_blocker"`
	Is_group_chat     bool     `json:"is_group_chat" db:"is_group_chat"`
	Group_name        string   `json:"group_name" db:"group_name"`
	Group_description string   `json:"group_description" db:"group_description"`
}
