# react-redux-webpack-docker-boilerplate
React based Web application setup.

### Table of contents
[Dependencies](#dependencies)

[Installation](#installation)

[Technologies](#technologies)



#### Dependencies
1- [Docker](https://docs.docker.com/docker-for-windows/install/) with docker-compose

2- [Git](https://git-scm.com/downloads)


#### Installation

1- Clone the repo

`git clone git@github.com:pnkj-kmr/react-redux-webpack-docker-boilerplate.git`

2- `docker-compose up --build` to run the web app.

3- build for production `npm run build` inside the container.

4- Unit testing will watch all your changes in the test files as well as create coverage folder for you. 
`npm test`


#### Technologies

* [React](https://github.com/facebook/react)
* [Redux](https://redux.js.org/basics/store/)
* [Webpack 4](https://github.com/webpack/webpack) 
* [Babel 7](https://github.com/babel/babel) [ transforming JSX and ES6,ES7,ES8 ]
* [Lodash](https://github.com/lodash/lodash)
* [Jest](https://github.com/facebook/jest) [ Unit test]
* [Enzyme](http://airbnb.io/enzyme/) for UI testing.
* [Eslint](https://github.com/eslint/eslint/) with airbnb config
* [Prettier](https://github.com/prettier/prettier) [ Code formatter ]
* [Style](https://github.com/webpack-contrib/style-loader) & [CSS Loader](https://github.com/webpack-contrib/css-loader) & [SASS-loader](https://github.com/webpack-contrib/sass-loader)
* etc.
