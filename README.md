# React ES6 Webpack Boilerplate

Boilerplate for kick starting a project with the following technologies:
* [React](https://github.com/facebook/react)
* [Babel 6](http://babeljs.io)
* [Webpack](http://webpack.github.io) for bundling
* [Webpack Dev Server](http://webpack.github.io/docs/webpack-dev-server.html)
* [React Transform](https://github.com/gaearon/react-transform-hmr) for hot reloading React components in real time.

The various webpack options used have been explained in detailed as comments in the config file. Should help with understanding the nitty-gritty :)


### Usage

```
npm install
npm start
Open http://localhost:5000
```

### Linting

ESLint with React linting options have been enabled.

```
npm run lint
```

### Run with Docker

```
docker build -t react-es6-webpack-boilerplate .
docker run -d -p 5000:5000 --name reac react-es6-webpack-boilerplate
Point to http://0.0.0.0:5000/
```
