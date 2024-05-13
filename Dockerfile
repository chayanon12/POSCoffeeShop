FROM node:18

WORKDIR /app

COPY . /app

Run npm ci

RUN npm run build

EXPOSE 3000

CMD ["npx", "serve", "-s", "dist"]