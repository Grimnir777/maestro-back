FROM node:12.16.1-alpine As development

WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:12.16.1-alpine as production

WORKDIR /app
COPY --from=development /app ./
CMD ["npm", "run", "start:prod"]
