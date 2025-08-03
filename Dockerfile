FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN pnpm install

COPY . .
RUN npm run build
CMD [ "npm", "run", "start:dev" ]
