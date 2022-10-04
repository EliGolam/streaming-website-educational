# Replica of a Streaming Website

## Analysis

## Versions

### 0.5: Improvements

#### 0.5.5: Added Simple slider for contents

#### 0.5.4: Dynamically created all explore sections

#### 0.5.3: Created 3 arrays for popular, trending and topRated

#### 0.5.2: Adjusted apiData to be more scalable

#### 0.5.1: Added Explore page

### 0.4: MileStone 4

#### 0.4.5: Fixed issue with v-show not working properly

* V-show was not working when applied to the component directly

#### 0.4.4: Added hover effect on cards

#### 0.4.3: Fixed responsive card size

#### 0.4.2: Added styling to cards

#### 0.4.1: Added basic styling to the whole app

### 0.3: MileStone 3

Add Movie Cover and Stars (rating)

#### 0.3.12: Caught image not found error

* (TODO) Need to implement fix with alternative images

#### 0.3.11: Implemented InteractiveCardComponent

#### 0.3.10: Added additional subcomponents for better scalability

* Added InteractiveCardComponent for each movie/tv series
* Added a rating system for each item

#### 0.3.9: Changed some variable names for better readability

#### 0.3.8: Added TOTAL_STARS constant for easy changes

* TOTAL_STARS in data allows to easily switch between 5 and 10 stars by simply modifying one attribute

#### 0.3.7: Added empty stars

#### 0.3.6: Added full and halfStars

#### 0.3.5: Created getStars function to turn rating into stars

#### 0.3.4: Created getRating function to turn the string into proper rating format

#### 0.3.3: Added Font Awesome Stars (full, empty and half)

#### 0.3.2: Created getPosterSrc to retrieve poster image

#### 0.3.1: Added TMDB_IMG_API to create path

### 0.2: Milestone 2

Dynamically add language flag based on original language

#### 0.2.2: Added getFlagSrc function to retrieve flag image from API

#### 0.2.1: Added FLAG_API with proper endpoint

### 0.1: Milestone 1

#### 0.1.1: Implemented Card component for each movie

#### 0.1.0: Correctly displayed movies on screen from API

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
