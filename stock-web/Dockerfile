FROM node:16-alpine AS development

ENV NODE_ENV development

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install
# Copy app files
COPY . .
# Expose port
EXPOSE 3001
# Start the app
CMD [ "npm", "start" ]