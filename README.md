Simple starter forked from https://github.com/adhrinae/ts-react-parcel/tree/b6b4a7389794a0e88faff02ee9d12076a300a8cf

## Built in settings

* React + ReactDOM (16.3.0) -- Updated!
* Typescript (with TSLint setting)
* Prettier + tslint-config-prettier
* Test configuration using Jest + Enzyme
* Parcel bundler -- 1.7.0
* react-hot-loader

## How to set up the project

```
git clone git@github.com:emaren84/ts-react-parcel.git
cd ts-react-parcel
npm install

# or
yarn install (recommended)
```

## How to start development for the application

    npm run develop
    yarn develop

Execute the command and you can run & test the application on `localhost:1234` in the browser.

## How to build the application

    npm run build
    yarn build

The default output directory is `/dist`. You can change the destination wherever you want.

```
// package.json
// ...
"scripts": {
  // ...
  "build": "parcel build ./src/index.html -d YOUR_OUTPUT_DIR --public-url '/'" <- Change here
}
// ...
```

## How to test the application

    npm run test        # run test once
    npm run test:watch  # watch mode

    yarn test
    yarn test:watch

You have to create `__tests__` directory at the same location of files which you want to test.
Test file's name should be `SOURCE.test.ts/tsx/js` or `SOURCE.spec.ts/tsx/js`.
