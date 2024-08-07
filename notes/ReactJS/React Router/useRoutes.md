**Utilisation :**
- Si tu veux restreintes certaines vues selon l'utilisateur avec un code plus simple contrairement à *Routes*
- Utilise une configuration de route basée sur *JavaScript* sans nécessité *JSX* (contrairement à `routes`) 

=> | **+** | Flexibilité pour créer des configuration de route dynamiques 
=> | **+** | Intégrer des routes dans des hooks
=> | **+** | Séparer la configuration des routes logique

## Configuration Dynamique : 

`useRoutes` permet de définir les routes de manières dynamique, ce qui peut être utile pour des applications où les routes peuvent changer en fonction des permissions utilisateur, de localisation ou d'autres conditions dynamiques. 

## Différences avec `Routes`

**Dans un cas simple :**

`Routes`
```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const App = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Dashboard />} />
    </Routes>
  </Router>
);

export default App;
```

`useRoutes`
```jsx
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/login", element: <Login /> },
    { path: "/", element: <Dashboard /> }
  ]);
  return routes;
}

const App = () => (
  <Router>
    <AppRoutes />
  </Router>
);

export default App;
```

**Dans un cas avec rôle :**

`Routes`
```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import UserHome from './pages/UserHome';
import AdminHome from './pages/AdminHome';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <UserHome />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin"
        element={
          <ProtectedRoute requiredRole="admin">
            <AdminHome />
          </ProtectedRoute>
        }
      />
    </Routes>
  </Router>
);

export default App;
```

`useRoutes`
```jsx
import React from 'react';
import { BrowserRouter as Router, useRoutes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import UserHome from './pages/UserHome';
import AdminHome from './pages/AdminHome';

const useAuth = () => {
  return {
    isAuthenticated: true,
    user: {
      role: 'admin',
    }
  };
};

const ProtectedRoute = ({ element, requiredRole }) => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/" />;
  }

  return element;
};

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/login", element: <Login /> },
    { path: "/", element: <ProtectedRoute element={<UserHome />} /> },
    { path: "/admin", element: <ProtectedRoute requiredRole="admin" element={<AdminHome />} /> }
  ]);

  return routes;
}

const App = () => (
  <Router>
    <AppRoutes />
  </Router>
);

export default App;
```

### Concept : 

La méthode `useRoutes` crées une configuration de routes de manière *déclarative*. 
*(= Les routes sont définies dans un format structuré et lisible.)*

```jsx
import { Outlet, Navigate, useRoutes } from 'react-router-dom';


const routes = useRoutes([
  {
    element: <DashboardLayout><Suspense>  <Outlet />  </Suspense></DashboardLayout>,
    children: [
      { element: <IndexPage />, index: true },
      { path: 'user', element: <UserPage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'blog', element: <BlogPage /> },
    ],
  },
  { path: 'login', element: <LoginPage /> },
  { path: '404', element: <Page404 /> },
  { path: '*', element: <Navigate to="/404" replace /> },
]);
```

=> `useRoutes` a besoin de plusieurs propriétés importantes :
- *element*
- *children*
- *path*

1. Stocker le résultat de `useRoutes` dans une *constante* `routes`
   
2. **element** : est le composant principal à rendre pour une route spécifique. Par exemple : `DashboardLayout` est utilisé comme layout principal pour les page du tableau de bord. Ce layout englobe les *routes enfants* avec un composant `Suspense` pour gérer le chargement asynchrone et un composant `Outlet` qui sert de conteneur pour les routes enfants
   
3. **children** : est un tableau de routes enfants qui partagent le même layout ou wrapper. `DashboarLayout` a plusieurs routes enfants, comme `IndexPage`, `UserPage`,  `ProductPage`. Chaque enfant peut avoir sa propre route avec un chemin *path* et un composant à rendre *element*. Par exemple : `IndexPage` est rendu par défaut `true` et les autres routes sont accessibles via les chemins spécifiés.
   
4. **routes indépendantes** : en dehors des routes enfants, il existe d'autre route

### Points clés à Retenir 
- **useRoutes** : Méthode principale pour gérer les routes.
- **Element** : Composant principal à rendre.
- **Children** : Routes imbriquées sous un composant parent.
- **Path** : Chemin URL pour accéder à une route.
- **Index** : Route par défaut pour un groupe de routes.
- **Outlet** : Pour rendre les routes enfants dans un layout.
- **Suspense** : Pour le rendu asynchrone (optionnel).
- **Redirection** : Pour gérer les routes non trouvées.