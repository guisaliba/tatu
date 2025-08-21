# Tatu - Tattoo Studio Management System

A comprehensive NestJS application for managing tattoo studios, built with modern technologies and best practices.

## 🚀 Quick Start

### Prerequisites

- Docker and Docker Compose
- Node.js 18+ (for local development)
- npm or yarn

### Environment Setup

The project uses environment-specific configurations:

- `.env` - Development environment variables
- `.env.prod` - Production environment variables

### Development with Docker

```bash
# Clone the repository
git clone <repository-url>
cd tatu

# Start development environment
make dev-up

# View logs
make dev-logs

# Run database migrations
make dev-migrate

# Generate Prisma client
make dev-generate

# Stop development environment
make dev-down
```

### Production with Docker

```bash
# Build and start production environment
make prod-up

# View production logs
make prod-logs

# Stop production environment
make prod-down
```

### Local Development

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Generate Prisma client
npm run prisma:generate

# Run database migrations
npm run prisma:migrate

# Start development server
npm run start:dev
```

## 📁 Project Structure

```txt
src/
├── auth/                 # Authentication module
├── users/               # User management
├── studios/             # Studio management
├── appointments/        # Appointment scheduling
├── payments/           # Payment processing
├── ai/                 # AI chat functionality
└── shared/             # Shared services and utilities

prisma/
├── schema.prisma       # Database schema
└── migrations/         # Database migrations

docker/                 # Docker configurations
├── Dockerfile          # Development container
└── Dockerfile.prod     # Production container
```

## 🗄️ Database Schema

The application uses Prisma with PostgreSQL and includes the following main entities:

- **User**: User accounts with authentication
- **Studio**: Tattoo studio information
- **Appointment**: Booking management
- **Social**: Social media links
- **Payments**: Payment tracking
- **Chat**: AI chat sessions

## 🔧 Available Scripts

### Development

```bash
npm run start:dev      # Start development server
npm run build          # Build for production
npm run test           # Run unit tests
npm run test:e2e       # Run end-to-end tests
npm run lint           # Run linting
npm run format         # Format code with Prettier
```

### Database

```bash
npm run prisma:generate    # Generate Prisma client
npm run prisma:migrate     # Run migrations
npm run prisma:studio      # Open Prisma Studio
npm run prisma:seed        # Seed database
```

### Docker Commands (via Makefile)

```bash
make dev-up           # Start development environment
make dev-down         # Stop development environment
make dev-logs         # View development logs
make prod-up          # Start production environment
make prod-down        # Stop production environment
make prod-logs        # View production logs
```

## 🧪 Testing

The project includes comprehensive test coverage:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run e2e tests
npm run test:e2e

# Generate coverage report
npm run test:cov
```

## 🏭 Production Deployment

The application is production-ready with:

- Multi-stage Docker builds for optimized images
- Environment-specific configurations
- Security hardening (non-root user, minimal attack surface)
- Health checks and proper logging
- External database connectivity (Supabase)

## 📚 API Documentation

The API follows REST principles with the following main endpoints:

- `/auth` - Authentication endpoints
- `/users` - User management
- `/studios` - Studio operations
- `/appointments` - Appointment scheduling
- `/payments` - Payment processing
- `/ai` - AI chat functionality

## 🔒 Security Features

- Password hashing with bcrypt
- JWT-based authentication
- Type-safe database operations with Prisma
- Input validation and sanitization
- Environment variable protection

## 📄 License

This project is licensed under the MIT License.
