
FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./

COPY prisma ./prisma/

ENV  PORT=3000
ENV  JWT_SECRET="secret"
ENV  DATABASE_URL="postgresql://carrental_owner:npg_4GDA2owBFVlr@ep-green-wildflower-a8n4lws3-pooler.eastus2.azure.neon.tech/carrental?sslmode=require"
ENV  DIRECT_URL="postgresql://carrental_owner:npg_4GDA2owBFVlr@ep-green-wildflower-a8n4lws3-pooler.eastus2.azure.neon.tech/carrental"
COPY . .

RUN npm install
#
RUN npx prisma generate

EXPOSE 3000


CMD ["npm", "run", "dev"]
