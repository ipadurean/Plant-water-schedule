This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## How to install
You can use both npm or yarn, the version I used to create this project are:

```
$ node -v ; npm -v ; yarn -v
v13.3.0
6.12.1
1.21.1
```
If you just freshly installed yarn/npm you are good to go, else you might need to upgrade, for npm I use `n`

```
npm install -g n
```
to install it and after that select at least the stable version (what I used).

```
n stable
```

and now you have the latest stable version of node&npm.


`yarn install`/`npm install` to install dependencies

`yarn start`/`npm start` to start dev server with hot reload, it's live on `localhost:3000`.


`yarn run build`/`npm run build` to build prod bundle, it includes both treeshaking and uglify to optimize the code as much as possible.




## Tests

The testing environment is written in Jest and Enzyme.


`yarn test`/`npm test` run the tests with Jest and Enzyme




