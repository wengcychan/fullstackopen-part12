FROM node:16

WORKDIR /usr/src/app

COPY . .

ENV REACT_APP_BACKEND_URL=http://localhost:3000/

ENV PORT=5001

RUN npm install

CMD ["npm", "start"]