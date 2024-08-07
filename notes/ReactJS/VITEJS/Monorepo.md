
Si on fait un mono repo (c'est à dire avoir le front avec le back dans un seul dossier) comme ceci : 

```php
mon-app/
├─ node_modules/
├─ src/                # Code source React pour le frontend
├─ public/             # Fichiers publics pour le frontend
├─ server/             # Code source pour le backend
│  ├─ server.js        # Point d'entrée de ton serveur Express
│  └─ ...              # Autres fichiers liés au serveur
├─ uploads/            # Dossier pour les fichiers uploadés (si tu décides de les stocker localement)
├─ package.json        # Dépendances et scripts pour le frontend et le backend
└─ vite.config.js      # Configuration pour Vite
```

Il faut prendre en compte que si on lance le server avec `npm start` il y aura une erreur car le fichier `server.js` est traité comme un module ES

Pour régler ce case : 
- Soit changer les variables d'import  : 
```js
// Changer les imports de variables ici 
const express = require('express'); 
const multer = require('multer'); 
const cors = require('cors'); 
const path = require('path');
```

```js
// vers un import en JS
import express from 'express';
import multer from 'multer'; 
import cors from 'cors';
import path from 'path';
```

- Soit changer l'extension du fichier `server.js` en `server.cjs`
