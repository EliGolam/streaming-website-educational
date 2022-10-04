# Replica of a Streaming Website

## Analysis

## Versions

### 0.0: Setup and learning

#### 0.0.11: Implemented reactive search with provide+inject and axios in ContentViewerComponent

#### 0.0.10: Implemented variable that checks when search is active

#### 0.0.9: Created Computed value that triggers whenever a new searchText is injected

#### 0.0.8: Tested working Axios

#### 0.0.7: Added env and Api data

* Created an .env folder and added a custom envPrifix inside vite.config.js
* Added the API data to apiData.js

#### 0.0.6: Implemented Reactive Provide Injection

This part made me incredibly proud. A full Reactive Provide-Inject isn't natively supported as of the time of this project, but following the documentation on the official website I created a reactive Provide Inject method.

* Added ```app.config.unwrapInjectedRef = true``` to main.js
* Added ```import { computed } from 'vue';``` to App.vue
* Wrote the injection method like this ```message: computed(() => `This is a Test for Provide-Inject ${this.search}`),``` in App.vue

#### 0.0.5: Implemented functional provide-inject

#### 0.0.4: Implemented functional $emit

#### 0.0.3: Added basic components to practice

#### 0.0.2: Added axios and Sass Loaders

#### 0.0.1: Created Vite Project

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
