FROM node:16

WORKDIR /usr/src/app

COPY . .

ENV PORT=5001

RUN npm install

CMD ["npm", "start"]