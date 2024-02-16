PROJECT_NAME = server

setup:
	@echo "[*] Initializing Go module..."
	@rm go.mod
	@go mod init $(PROJECT_NAME)
	@echo "[*] Getting dependencies..."
	@go get -u github.com/gin-gonic/gin
	@go get github.com/nedpals/supabase-go
	@go get -u gorm.io/gorm
	@go get -u gorm.io/driver/postgres
	@go get github.com/joho/godotenv
	@go get github.com/google/uuid

.PHONY: setup

