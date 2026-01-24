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
RUN bun run build

# Start
EXPOSE 9000
CMD ["bun", "run", "start"]
