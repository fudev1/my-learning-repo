
# installation de vitejs

```bash
npm create vite@latest
```

```bash
cd mon-app
npm install
```

```bash
npm run dev
```


dans le fichier `package.json` :

```js
"scripts": {
    "dev": "vite",
    "build": "vite build",
    "serve": "node server/server.js",
    "start": "concurrently \"npm run serve\" \"npm run dev\""
  },
```

`"start": "concurrently \"npm run serve\" \"npm run dev\""` permet de lancer en même temps le back et le front

```bash
npm install concurrently --save-dev
```


