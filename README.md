# GitPeek: Peek at GitHub
![screenshot](smallss1.gif)

A Vue.js project that allows users to enter a github username and take a quick look at their repositories. This project was developed on Google Chrome with the help of Chrome Inspection Tools and a Vue plugin. Font sizes are responsive to screen size. Resources used to complete this project:
1) [Vue.js Documentation](https://vuejs.org/v2/guide/)
2) [Axios vs. fetch()](https://blog.logrocket.com/axios-or-fetch-api/)
3) [CSS Gradient Background Animation](https://codepen.io/P1N2O/pen/pyBNzX)
4) [GitHub API Developer Guide](https://developer.github.com/v3/)
5) [Vue-Markdown: MD to HTML](https://github.com/miaolz123/vue-markdown)
6) [FontAwesome with Vue](https://fontawesome.com/how-to-use/on-the-web/using-with/vuejs)

## Build Setup
This list is provided along with the `vue init` command. This app is being deployed on Heroku, and can be accessed at [here](https://gitpeek.herokuapp.com). Please note that there is a [rate limit of 60 requests/hour](https://developer.github.com/v3/#rate-limiting) because this project seems to be a generic app for the public, and not specific to one user's (my) search. Therefore, I chose to use unauthenticated requests.

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
