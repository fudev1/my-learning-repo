**Sources :**
https://reactrouter.com/en/main/router-components/browser-router#browserrouter

**Utilisation :**
- Crée un routeur basé sur l'API History du navigateur. 
- Utilisé pour gérer la navigation et l'historique dans une app web.
- Simple, direct

**But :**
- Simplifier la gestion des routes pour des projets *simples* à *moyens*

```jsx
import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    {/* The rest of your app goes here */}
  </BrowserRouter>
);
```