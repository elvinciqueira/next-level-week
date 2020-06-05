<h1 align="center">
  <img src=".github/logo.svg" alt="Logo"><br /><br />
  <img src=".github/home-background.svg" alt="Logo Image" height="200">
</h1>

<h3 align="center">
  Ecoleta - The easiest way to throw away your trash
</h3>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/elvinciqueira/next-level-week?color=%2334CB79">

  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/elvinciqueira/next-level-week?color=%2334CB79">
  
  <a href="https://github.com/elvinciqueira/next-level-week/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/elvinciqueira/next-level-week?color=%2334CB79">
  </a>
  
  <a href="https://github.com/elvinciqueira/next-level-week/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/elvinciqueira/next-level-week?color=%2334CB79">
  </a>
  
</p>

<p align="center">
  <a href="#recycle-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>
</p>



## :recycle: About the project

This project was developed on the Next Level Week event by [Rocketseat](https://rocketseat.com.br/) &nbsp;🚀💜

With the idea to help world ecosystem, this software provide a flow to create recyclable garbage collection points and show in a map around you. In the end, you can send a text message using the whatsapp or an email, and make the world better witout trash.

## 🚀 Technologies

Technologies that I used to develop this api

- [Node.js](https://nodejs.org/en/)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Leaflet](https://react-leaflet.js.org/)
- [Expo](https://expo.io/)
- [Express](https://expressjs.com/pt-br/)
- [Knex](http://knexjs.org/)
- [SQLite](https://www.sqlite.org/)
- [React Router DOM](https://reacttraining.com/react-router/)
- [React Navigation](https://reactnavigation.org/)
- [React Icons](https://react-icons.netlify.com/#/)
- [EditorConfig](https://editorconfig.org/)

## 💻 Getting started



### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- [Expo](https://expo.io/)

**Clone the project and access the folder**

```bash
$ git clone https://github.com/elvinciqueira/next-level-week.git && cd next-level-week
```

**Follow the steps below**

### Backend

```bash
# Starting from the project root folder, go to server folder
$ cd next-level-week/booster/backend

# Install the dependencies
$ yarn

# Use the script to run the migrations
$ yarn knex:migrate

# Use the script to run the seeds
$ yarn knex:seed

# To finish, run the api service
$ yarn dev

# Well done, project is started!
```

### Web

_Obs.: Before to continue, be sure to have the API running_

```bash
# Starting from the project root folder, go to frontend web folder
$ cd next-level-week/booster/web

# Install the dependencies
$ yarn

# Be sure the file 'src/services/api.ts' have the IP to your API

# Start the client
$ yarn start
```

### Mobile

_Obs.: Before to continue, be sure to have the API running_

```bash
# Starting from the project root folder, go to mobile folder
$ cd next-level-week/booster/mobile

# Install the dependencies
$ yarn

# Be sure the file 'src/services/api.ts' have the IP to your API

# Start the expo service and scan the QR code with Expo Client
$ yarn start
```

---

Made with 💜&nbsp; by Elvin Ciqueira