<p align="center">
  <a href="https://www.medusajs.com">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/59018053/229103275-b5e482bb-4601-46e6-8142-244f531cebdb.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/59018053/229103726-e5b529a3-9b3f-4970-8a1f-c6af37f087bf.svg">
      <img alt="Medusa logo" src="https://user-images.githubusercontent.com/59018053/229103726-e5b529a3-9b3f-4970-8a1f-c6af37f087bf.svg" width=100>
    </picture>
  </a>
  <a href="https://railway.app/template/gkU-27?referralCode=-Yg50p">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://railway.app/brand/logo-light.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://railway.app/brand/logo-dark.svg">
      <img alt="Railway logo" src="https://railway.app/brand/logo-light.svg" width=100>
    </picture>
  </a>
</p>

<h2 align="center">
  Prebaked medusajs 2.0 monorepo
</h2>
<h4 align="center">
  Backend + Storefront + postgres + redis + MinIO + MeiliSearch
</h4>
<p align="center">
Combine Medusa's modules for your commerce backend with the newest Next.js 14 features for a performant storefront.</p>

<h2 align="center">
  Need help?<br>
  <a href="https://funkyton.com/medusajs-2-0-is-finally-here/">Step by step deploy guide, and video instructions</a>
</h2>

<h3 align="center">
  NEW! Looking for medusa B2B? <br>
  <a href="https://github.com/rpuls/medusa-b2b-for-railway/">Checkout the new B2B quickstart for Railway repository</a>
</h3>



## About this boilerplate
This boilerplate is a monorepo consisting of the officially released MedusaJS 2.0 backend and storefront application. It is a pre-configured, ready-to-deploy solution, modified for seamless deployment on [railway.app](https://railway.app?referralCode=-Yg50p).

Updated: to `version 2.12.1` 🥳

## Deploy with no manual setup in minutes
[![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/deploy/gkU-27?referralCode=-Yg50p)


## Preconfigured 3rd party integrations

- MinIO file storage: Replaces local file storage with MinIO cloud storage, automatically creating a 'medusa-media' bucket for your media files. [README](backend/src/modules/minio-file/README.md)
- Resend email integration [Watch setup video](https://youtu.be/pbdZm26YDpE?si=LQTHWeZMLD4w3Ahw) - special thanks to [aleciavogel](https://github.com/aleciavogel) for Resend notification service, and react-email implementation! [README](backend/src/modules/email-notifications/README.md)
- Stripe payment service: [Watch setup video](https://youtu.be/dcSOpIzc1Og)
- Meilisearch integration by [Rokmohar](https://github.com/rokmohar/medusa-plugin-meilisearch): Adds powerful product search capabilities to your store. When deployed on Railway using the template, MeiliSearch is automatically configured. (For non-railway'ers: [Watch setup video](https://youtu.be/hrXcc5MjApI))

# Local Development Setup

## Quick Start (Recommended)

The easiest way to run the entire stack locally is using Docker for infrastructure services while running your application code directly on your machine for fast development.

### Prerequisites
- **Node.js** (v18 or higher)
- **pnpm** or **npm**
- **Docker Desktop** (for Postgres, Redis, MeiliSearch, MinIO)

### Architecture Overview

**What runs in Docker (Infrastructure):**
- Postgres (Database)
- Redis (Cache)
- MeiliSearch (Search Engine)
- MinIO (File Storage)

**What runs locally (Application Code):**
- Backend (Medusa Server)
- Storefront (Next.js)

This setup gives you the best of both worlds: easy infrastructure management + fast development with hot-reload.

---

### Step 1: Start Infrastructure Services

```bash
# Start all infrastructure services with Docker
docker-compose up -d

# Verify all services are running
docker-compose ps
```

This will start:
- **Postgres** on `localhost:5432`
- **Redis** on `localhost:6379`
- **MeiliSearch** on `localhost:7700`
- **MinIO** on `localhost:9001` (console) and `localhost:9002` (API)

---

### Step 2: Setup Backend

```bash
cd backend

# Install dependencies
pnpm install

# Create environment file
cp .env.template .env

# Initialize database (run migrations and seed data)
pnpm ib

# Start backend development server
pnpm dev
```

The backend will be available at:
- **API**: http://localhost:9000
- **Admin Dashboard**: http://localhost:9000/app
- **Login**: admin@test.com / supersecret

---

### Step 3: Setup Storefront

Open a new terminal window:

```bash
cd storefront

# Install dependencies
pnpm install

# Create environment file
cp .env.local.template .env.local

# Start storefront development server
pnpm dev
```

The storefront will be available at: **http://localhost:8000**

---

## Alternative: Connect to Railway Services

If you prefer to use your Railway database and services instead of local Docker containers:

1. Copy the `DATABASE_URL` from Railway and add it to `backend/.env`
2. Copy other service URLs (Redis, MeiliSearch, MinIO) from Railway
3. Skip the Docker setup and just run the backend and storefront locally

---

## Useful Commands

### Docker Services
```bash
# Stop all services
docker-compose down

# Stop and remove all data (clean slate)
docker-compose down -v

# View logs
docker-compose logs -f

# Restart a specific service
docker-compose restart postgres
```

### Backend
```bash
cd backend

# Reinitialize database
pnpm ib

# Run migrations only
pnpm medusa migrations run

# Seed database
pnpm medusa seed

# Start development server
pnpm dev

# Build for production
pnpm build && pnpm start
```

### Storefront
```bash
cd storefront

# Start development server (with hot-reload)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

---

## Accessing Services

| Service | URL | Credentials |
|---------|-----|-------------|
| Storefront | http://localhost:8000 | - |
| Backend API | http://localhost:9000 | - |
| Admin Dashboard | http://localhost:9000/app | admin@test.com / supersecret |
| MeiliSearch | http://localhost:7700 | Master Key: `masterKey` |
| MinIO Console | http://localhost:9001 | minioadmin / minioadmin |

---

## Troubleshooting

**Port already in use:**
```bash
# Find what's using the port (example for port 5432)
lsof -i :5432

# Kill the process
kill -9 <PID>
```

**Database connection issues:**
```bash
# Check if Postgres is running
docker-compose ps postgres

# Connect to database directly
docker exec -it medusa-postgres psql -U postgres -d medusa
```

**MinIO bucket not created:**
- Access MinIO console at http://localhost:9001
- Login with minioadmin/minioadmin
- Create bucket named "medusa-media" manually

---

## Video Tutorials
- Backend setup: https://youtu.be/PPxenu7IjGM
- Storefront setup: https://youtu.be/PPxenu7IjGM

## Useful resources
- How to setup credit card payment with Stripe payment module: https://youtu.be/dcSOpIzc1Og
- https://funkyton.com/medusajs-2-0-is-finally-here/#succuessfully-deployed-whats-next
  
<p align="center">
  <a href="https://funkyton.com/">
    <div style="text-align: center;">
      A template by,
      <br>
      <picture>
        <img alt="FUNKYTON logo" src="https://res-5.cloudinary.com/hczpmiapo/image/upload/q_auto/v1/ghost-blog-images/funkyton-logo.png" width=200>
      </picture>
    </div>
  </a>
</p>
