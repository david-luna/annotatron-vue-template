# Electron + Vue3 template with annotatron

Tempalte project created with Vue CLI and electron plugin for vue cli with the following features:

- TypeScript
- Jest
- ESLint
- Vue3
- Vue router for navigation
- Vuex for state management

The project contains a sample `BackendModule` with an `echo` service and a preload script
to connect main and rederer processes.

## Requirements

To properly work with this project you need:

- node v16+
- yarn berry

## Project setup

To have a clean setup of the project run the following commands

```sh
name=my-project &&
repo=https://github.com/david-luna/annotatron-vue-template.git &&
git clone --depth 1 --branch main $repo $name &&
cd $name &&
rm -rf .git &&
yarn install
```

### Compiles and hot-reloads for development

```sh
yarn serve
```

### Compiles and minifies for production

```sh
yarn build
```

### Run your unit tests

```sh
yarn test:unit
```

### Lints and fixes files

```sh
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
