
## createTheme()

Utilisé pour créer un thème personnalisé.
Un thème peut inclure des paramètres de couleurs, typographies, espacements, etc.. 

```jsx
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		primary: {
			main: '#000',
		},
		secondary: {
			main: '#fff',
		},
	},
	typography: {
		h1: {
			fontSize: '3rem',
		},
	}
})

export default theme;
```

## ThemeProvider

Utilisé pour appliquer le thème à toute l'application.
Tous les composants enfants de `ThemeProvider` auront accès au thème.

```jsx
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme';

<ThemeProvider theme={theme}>
	<CssBaseLine /> # ajoute une baseline CSS pour normaliser les styles de bases
	<App /> # Le point d'entrée de l'application
</ThemeProvider> 
```

## StyledEngineProvider 

**(optionnel)**
Utilisé pour définir le moteur de style utilisé par MUI. 
Par défaut, MUI utilise *Emotion* comme moteur de style mais on peut le changer pour utiliser par exemple styled-components

```jsx
import { ThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme';

<StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
    </ThemeProvider>
</StyledEngineProvider>
```

### Source exemple 

*Providers = Fournisseurs de services* 
```jsx
function App() {
  return (
    <ReduxProvider store={store}>
      <AuthProvider>
        <HelmetProvider>
          <ThemeModeProvider>
            <ThemeProvider>
              <RouterProvider router={router} />
            </ThemeProvider>
          </ThemeModeProvider>
        </HelmetProvider>
      </AuthProvider>
    </ReduxProvider>
  );
}

export default App;
```

- **ReduxProvider :** Fournit l'état global de l'application en utilisant Redux
- **AuthProvider** : Fournit le contexte d'authentification
- **HelmetProvider** : Fournir la gestion des métadonnées des pages (SEO)
- **ThemeModeProvider** : Fournit le contexte pour gérer le mode du thème  (claire/sombre)
- **ThemeProvider** : Fournit le thème MUI à l'application
- **RouteProvider** : Gère les routes de l'application


## Créer un Dark Mode

**Utiliser le dark par défaut**

- Créer une fonction pour gérer le dark theme qui utilise `createTheme`
```jsx
const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#fff'
		},
	},
});

return (
	<ThemeProvider theme={darkTheme}>
		// other code here
	</ThemeProvider>
)
```


## Switch Dark Mode (simple)

- Ajouter un *contexte* à un *bouton d'événement* `onChange()`

```tsx
<Switch 
	color="secondary" 
	checked={darkMode} // Attribuer le statut
	onChange={toggleSwitchFunction} // Attribuer la fonction
/>
```

- Définir le statut du `toggle` qui va permettre de switcher entre *dark* ou *light* theme.
- Utiliser `useState()`

```tsx
// manage the dark mode
const [toggleDarkMode, setToggleDarkMode] = useState(true);

// function to toggle the darkmode as true or false
const toggleDarkTheme = () => {
	setToggleDarkMode((prevMode) => !prevMode);
}
```

- Switch dynamiquement : Créer une condition conditionnelle dans `darkTheme`

```tsx
const darkTheme = createTheme({
	palette: {
		mode: toggleDarkMode ? 'dark' : 'light',
		...
	},
});
```

```tsx
const darkTheme = createTheme({
	palette: {
		mode: toggleDarkMode ? 'dark' : 'light',
		...
	},
});
```

## Switch Dark Mode (context)

Le fait d'utiliser un context permet de faire passer le thème à plusieurs composant. 
**Sans contexte :**
Tu as une application avec un composant de barre de navigation, plusieurs composants de pages, et des composants de sous-pages. Chacun de ces composants a besoin de connaitre l'état du thème. On devra passer manuellement l'état et la fonction de basculement du composant parent à chaque enfant.

**Avec contexte :**
Tu définis l'état du thème et la fonction de basculement au niveau du contexte. Tous les composants peuvent accéder à ce contexte directement sans avoir besoin de passer les props à travers chaque niveau des composants.


```tsx
// ➡️ src/theme/ThemeContext.tsx

import {createContext, useContext} from 'React';
import {createTheme, ThemeProvider} from '@mui/material';

interface ThemeContextType{
	darkMode: boolean;
	toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeMode = () => {
	const context = useContext(ThemeContext);
	if(!context) {
		throw new Error('useThemeMode must be used within a ThemeProvider')
	}
	return context;
};

export const 
```