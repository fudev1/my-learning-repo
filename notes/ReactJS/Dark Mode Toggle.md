
➡️ On essaie de changer l'id `light` vers le `dark` de l'élément root qui englobe toute l'application.

```jsx
return (
    <>
      <div className="App" id="light">
        <Form />
      </div>
    </>
)

💡 // Il nous faudrait un toggle pour changer l'état `light` à l'état `dark`

return (
    <>
      <div className="App" id="dark">
        <Form />
      </div>
    </>
)
```

➡️ Créer un *context* qui va nous donner la possibilité de passer à la fonction de `switch` à travers toute l'application. Mais aussi passer l'information de quel mode on est actuellement à partir d'un `state` et on a besoin d'y accéder à partir de n'importe où de l'application.

```jsx
import {createContext} from 'react';

export const ThemeContext = createContext();
```


