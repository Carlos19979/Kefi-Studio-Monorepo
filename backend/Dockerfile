FROM oven/bun:1

# Install Node.js and npm (required by some launcher scripts)
RUN apt-get update && apt-get install -y nodejs npm
WORKDIR /app

# Install dependencies
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Copy source
COPY . .

# Build
ARG BACKEND_PUBLIC_URL
ARG RAILWAY_PUBLIC_DOMAIN
ARG RAILWAY_PUBLIC_DOMAIN_VALUE

ENV BACKEND_PUBLIC_URL=$BACKEND_PUBLIC_URL
ENV RAILWAY_PUBLIC_DOMAIN=$RAILWAY_PUBLIC_DOMAIN
ENV RAILWAY_PUBLIC_DOMAIN_VALUE=$RAILWAY_PUBLIC_DOMAIN_VALUE

RUN bun run build

# Start
EXPOSE 9000
CMD ["bun", "run", "start"]
