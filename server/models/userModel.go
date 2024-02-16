package models

type User struct {
	Username    string   `json:"username" db:"username"` // Adjust tag as needed
	Email       string   `json:"email" db:"email"`       // Example for GORM: gorm:"column:email"
	Password    string   `json:"password" db:"password"`
	Description string   `json:"description" db:"description"`
	Badges      []string `json:"badges" db:"badges"`
	Roles       []string `json:"roles" db:"roles"`         // Handling of slice types may vary
	Notebooks   []string `json:"notebooks" db:"notebooks"` // Adjust according to actual DB handling
	Followers   []string `json:"followers" db:"followers"`
	Following   []string `json:"following" db:"following"`
}
