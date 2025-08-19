# Variables
COMPOSE_DEV=docker compose
COMPOSE_PROD=docker compose -f docker-compose.prod.yml --env-file .env.prod
ENV ?= dev

# Choose compose command based on environment
COMPOSE=$(if $(filter prod,$(ENV)),$(COMPOSE_PROD),$(COMPOSE_DEV))

.PHONY: help dev prod build build-prod down logs ps exec migrate reset studio format lint test env-dev env-prod env test-env

help:
	@echo "Tatu - Tattoo Studio Management System"
	@echo ""
	@echo "Development Commands:"
	@echo "  make dev         - Start development environment"
	@echo "  make build       - Rebuild development containers"
	@echo ""
	@echo "Production Commands:"
	@echo "  make prod        - Start production environment"
	@echo "  make build-prod  - Rebuild production containers"
	@echo ""
	@echo "Environment Testing:"
	@echo "  make env         - Check environment variables (make env ENV=prod)"
	@echo "  make env-dev     - Check development environment variables"
	@echo "  make env-prod    - Check production environment variables"
	@echo "  make test-env    - Test env vars via Node.js (make test-env ENV=prod)"
	@echo ""
	@echo "Environment-Aware Commands:"
	@echo "  make logs        - View logs (make logs ENV=prod)"
	@echo "  make ps          - List containers (make ps ENV=prod)"
	@echo "  make exec        - Open shell (make exec ENV=prod)"
	@echo "  make down        - Stop containers (make down ENV=prod)"

# Development environment
dev:
	$(COMPOSE_DEV) up -d
	@echo "Development environment started at http://localhost:8000"

# Build development
build:
	$(COMPOSE_DEV) up -d --build

# Production environment
prod:
	$(COMPOSE_PROD) up -d
	@echo "Production environment started at http://localhost:8000"

# Build production
build-prod:
	$(COMPOSE_PROD) up -d --build

# Environment-aware commands
down:
	$(COMPOSE) down
	@echo "$(ENV) containers stopped"

logs:
	$(COMPOSE) logs -f app

ps:
	$(COMPOSE) ps
	@echo "Showing containers for $(ENV) environment"

exec:
	$(COMPOSE) exec app sh

# Environment variable testing
env-dev:
	@echo "=== Development Environment Variables ==="
	$(COMPOSE_DEV) exec app env | grep -E "(NODE_ENV|DATABASE_URL|JWT_SECRET|SUPABASE|PORT)" | sort

env-prod:
	@echo "=== Production Environment Variables ==="
	$(COMPOSE_PROD) exec app env | grep -E "(NODE_ENV|DATABASE_URL|JWT_SECRET|SUPABASE|PORT)" | sort

env:
	@echo "=== $(ENV) Environment Variables ==="
	$(COMPOSE) exec app env | grep -E "(NODE_ENV|DATABASE_URL|JWT_SECRET|SUPABASE|PORT)" | sort

test-env:
	@echo "=== Testing $(ENV) Environment Variables via Node.js ==="
	$(COMPOSE) exec app node -e "console.log('NODE_ENV:', process.env.NODE_ENV); console.log('PORT:', process.env.PORT); console.log('DATABASE_URL:', process.env.DATABASE_URL ? 'SET (hidden)' : 'NOT SET'); console.log('JWT_SECRET:', process.env.JWT_SECRET ? 'SET (hidden)' : 'NOT SET'); console.log('SUPABASE_PROJECT_REF:', process.env.SUPABASE_PROJECT_REF || 'NOT SET');"

# Development-only commands
migrate:
	$(COMPOSE_DEV) exec app npx prisma migrate dev

studio:
	$(COMPOSE_DEV) exec app npx prisma studio

format:
	$(COMPOSE_DEV) exec app npm run format

lint:
	$(COMPOSE_DEV) exec app npm run lint

test:
	$(COMPOSE_DEV) exec app npm run test

db-test:
	$(COMPOSE_DEV) exec app npx prisma db pull --force
