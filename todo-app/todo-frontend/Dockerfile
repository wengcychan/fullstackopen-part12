FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm ci

ENV REACT_APP_BACKEND_URL=http://localhost:3000/

ENV PORT=5001

RUN npm run build

CMD ["npm", "start"]