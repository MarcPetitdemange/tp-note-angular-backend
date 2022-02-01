FROM node:17-alpine3.14
ENV NODE_ENV=production

WORKDIR /

COPY . .

RUN npm install --production


CMD [ "npm", "run", "start" ]
