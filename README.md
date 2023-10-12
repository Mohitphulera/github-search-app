# GitHub Search App

GitHub Search App is a React-based application that allows users to easily search for GitHub repositories and users.

![image](https://github.com/Mohitphulera/github-search-app/assets/30733552/bab83e82-36de-4f30-8c3d-83c53ffcef67)
![image](https://github.com/Mohitphulera/github-search-app/assets/30733552/ef684838-ab60-485c-9e50-e3827a00ca20)

## Features

- **Search GitHub Users**: Quickly find any user on GitHub by their username.
- **Search GitHub Repositories**: Discover repositories using keywords.
- **Clear Cache**: Clear the redis cache manually
- **Uses Deboucing**: Improves performance and reduce unnecessary renders
- **Redux Persists**: Tool used to seamlessly save the application’s Redux state object to AsyncStorage

In this application we are using redux-persist to store our state locally, so that on refreshing the page we do not loss our data. And debouncing is used to avoid unnecessary renders and unnecessary api calls to the backend as when we search for a user or a repository and type a character it does make  unnecessary api calls and renders if debounce is not used.


## Technologies Used

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Redux-Persist](https://github.com/rt2zz/redux-persist)
- [Styled Components](https://styled-components.com/)


## Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:

- [NodeJS](https://nodejs.org/en/download/)
- [NPM](https://www.npmjs.com/get-npm) or [Yarn](https://yarnpkg.com/)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Mohitphulera/github-search-app.git
   cd github-search-api

2. **Install the required dependencies:**

   ```bash
   npm install

3. **Install the required dependencies:**

   ```bash
   npm start

**Open http://localhost:3000 to view the app in your browser.**

