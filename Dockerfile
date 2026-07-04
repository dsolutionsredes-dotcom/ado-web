FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json* ./

ARG GIT_SHA=unknown
RUN echo "Build cache bust: $GIT_SHA" && npm install && npm install next@14.2.20 react@18.3.1 react-dom@18.3.1

COPY . .

RUN npx next build

FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=80
ENV HOSTNAME=0.0.0.0

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next

EXPOSE 80

CMD ["npx", "next", "start", "-p", "80", "-H", "0.0.0.0"]
