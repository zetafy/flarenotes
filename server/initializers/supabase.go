package initializers

import (
	supa "github.com/nedpals/supabase-go"
	"os"
)

func Supabase() *supa.Client {
	supabaseUrl := os.Getenv("DATABASE_URL")
	supabaseKey := os.Getenv("DATABASE_KEY")
	supabase := supa.CreateClient(supabaseUrl, supabaseKey)
	return supabase
}
