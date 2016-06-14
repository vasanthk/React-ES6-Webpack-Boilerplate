FROM node:slim

RUN mkdir /reactEs6
COPY ./.babelrc /reactEs6/
COPY ./package.json /reactEs6/
COPY ./server.js /reactEs6/
COPY ./webpack.config.js /reactEs6/
COPY ./webpack.config.production.js /reactEs6/
COPY ./index.html /reactEs6/
WORKDIR /reactEs6

EXPOSE 5000

RUN npm install
CMD cd /reactEs6; npm start
COPY ./scripts /reactEs6/scripts
