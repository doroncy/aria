# ARIA TLV website

## Usage

This is an old react project, use Node v8.11.1 and package.json is locked on working dependencies versions

### Install dependencies

```sh
nvm use 8.11.1
npm install
```

### Run locally

```sh
npm run start
```

### Build for production

```sh
npm run build
```

### Menu

There are 4 files for menus:
1. Aria Downstairs English: /src/components/downstairs/menu.js
2. Aria Downstairs Hebrew: /src/components/downstairs/menu-heb.js
3. Aria Downstairs English: /src/components/upstairs/menu.js
4. Aria Downstairs Hebrew: /src/components/upstairs/menu-heb.js

When you update the menu , use the object template as it exists in those files.
