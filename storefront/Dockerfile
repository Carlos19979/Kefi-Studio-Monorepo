FROM oven/bun:1
WORKDIR /app

# Install dependencies
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Copy source
COPY . .

# Build
RUN bun run build

# Start
EXPOSE 8000
CMD ["bun", "run", "start"]
