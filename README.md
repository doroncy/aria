# ReactJS Forms

## Overview
Form Pages for mobile web views, using ReactJS stack (Webpack and Babel).

The project is client side only, and it relays on the PHP public API for fetching and posting data. therefor in order to get it to work and to not have CORS issues the PHP server is allowing all keeprz.com subdomains to access its API.
For testing locally need to load chrome with allow origin chrome flag or use a chrome addon (e.g: https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi)

## Usage
Currently only one form is available, the registration form but the project is open for extension.

##### Regsiteration Form:
- Endpoint: <HOSTNAME>/register?locationid=<LOCATIONID>&token=<TOKEN>&device=<DESKTOP|Optional>&transparentBackground=<true|Optional>


###### Install dependencies
```sh
npm install
```

###### Run locally
```sh
API_PREFIX=<API URL> npm start
```
Example:
```sh
API_PREFIX=https://dev-env.keeprz.com/api/public/ npm run build
```

###### Build for production
```sh
API_PREFIX=<API URL> npm run build
```
Example:
```sh
API_PREFIX=https://dev-env.keeprz.com/api/public/ npm run build
```
