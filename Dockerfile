FROM node:alpine

WORKDIR /frontend

COPY /frontend/package.json /frontend

RUN npm install

EXPOSE 3000

COPY . /frontend

CMD ["npm", "start"]