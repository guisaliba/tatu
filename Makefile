# Variables
COMPOSE_DEV=docker compose
COMPOSE_PROD=docker compose -f docker-compose.prod.yml --env-file .env.prod
ENV ?= dev

# Choose compose command based on environment
COMPOSE=$(if $(filter prod,$(ENV)),$(COMPOSE_PROD),$(COMPOSE_DEV))

.PHONY: help dev prod build build-prod down logs ps exec migrate reset studio format lint test

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
    @echo "Environment-Aware Commands (add ENV=prod for production):"
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
