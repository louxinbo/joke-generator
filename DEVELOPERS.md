#### Setup

Install [node above v16](https://nodejs.org/en/download/)

```
# Install all Dependencies
npm install -g yarn
yarn install
```

#### Running the app

```
yarn start
```

#### Testing the app

```
yarn test
```

#### Buiding the app

```
yarn build
```

#### Project Structure

-   components: Reusable Components
-   hooks: Reusable custom hoooks
-   lib: Helper functions and utilities (api)
-   pages: Pages and navigation

#### Future work

-   Accessibility
-   JokePage is a bit big, should break it down furthure
-   use React Router to handle multiple pages
-   Install more eslint plugins
-   Configure Husky, lint-staged, pre-commit hooks to check code quality
