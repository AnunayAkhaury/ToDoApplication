# 1) Build stage: build the React app
FROM node:18-alpine AS build
WORKDIR /app

# Copy package.json and package-lock.json first for better caching
COPY package*.json ./
RUN npm install

# Copy the rest of your frontend code
COPY . .

# Build the production bundle
RUN npm run build

# 2) Production stage: serve the files using Nginx
FROM nginx:stable-alpine
# Remove the default Nginx index page
RUN rm -rf /usr/share/nginx/html/*
# Copy the React build output to Nginx's html folder
COPY --from=build /app/build /usr/share/nginx/html

# Cloud Run will listen on 8080 by default. Nginx normally listens on 80, so let's re-map:
EXPOSE 8080
# Replace the default nginx.conf so it listens on 8080
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
