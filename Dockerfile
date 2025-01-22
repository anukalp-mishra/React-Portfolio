# Stage 1: Build the React app
FROM node:18 AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . ./
RUN npm run build

# Stage 2: Serve the React app with a distroless image
FROM gcr.io/distroless/nodejs18

WORKDIR /app

COPY --from=build /app/build /app/build

EXPOSE 3000
CMD ["node", "server.js"]