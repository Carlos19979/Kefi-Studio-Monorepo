FROM oven/bun:1
WORKDIR /app

# Install dependencies
# Install dependencies
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Build Args
ARG NEXT_PUBLIC_MEDUSA_BACKEND_URL
ARG NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY
ENV NEXT_PUBLIC_MEDUSA_BACKEND_URL=$NEXT_PUBLIC_MEDUSA_BACKEND_URL
ENV NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY=$NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY


# Copy source
COPY . .

# Build
RUN bun run build

# Start
EXPOSE 8000
CMD ["bun", "run", "start"]
