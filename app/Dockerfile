
<<<<<<< HEAD
FROM node:18-alpine AS deps
=======
FROM node:18.15-alpine AS deps
>>>>>>> e8f9397cdcdfb409b62b5bd8cde3c2dd09eb50a6
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
<<<<<<< HEAD
RUN npm install -g npm@9.6.5
RUN  npm install --production --frozen-lockfile --force

FROM node:18-alpine AS builder
=======
RUN  npm install --production --frozen-lockfile --force

FROM node:18.16-alpine AS builder
>>>>>>> e8f9397cdcdfb409b62b5bd8cde3c2dd09eb50a6
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

<<<<<<< HEAD
FROM node:18-alpine AS runner
=======
FROM node:18.16-alpine AS runner
>>>>>>> e8f9397cdcdfb409b62b5bd8cde3c2dd09eb50a6
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "start"]