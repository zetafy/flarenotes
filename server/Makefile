PROJECT_NAME = flarenotes

setup:
	@echo "[*] Initializing Go module..."
	@rm go.mod
	@go mod init $(PROJECT_NAME)
	@echo "[*] Getting dependencies..."
	@go get -u github.com/gin-gonic/gin
	@go get github.com/supabase/supabase-go
	@go get -u gorm.io/gorm
	@go get -u gorm.io/driver/postgres

.PHONY: setup

