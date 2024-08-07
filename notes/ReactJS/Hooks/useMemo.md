**Utilisation :**
Mémoriser une valeur calculée afin de ne recalculer cette valeur que lorsque l'une des dépendances à changé. 
Evite d'utiliser `useNavigate` et de définir la logique de navigation à chaque fois

**But :**
Améliorer les performances et éviter de recalculer des rendus. 

```jsx
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

// ----------------------------------------------------------------------

export function useRouter() {
  const navigate = useNavigate();

  const router = useMemo(
    () => ({
      back: () => navigate(-1),
      forward: () => navigate(1),
      reload: () => window.location.reload(),
      push: (href) => navigate(href),
      replace: (href) => navigate(href, { replace: true }),
    }),
    [navigate]
  );

  return router;
}
```

=> Créer un objet `router` qui contient des méthodes de navigations (back, forward, reload, push, replace).
=> Ces méthodes utilisent `useNavigate` pour naviguer dans l'application.
=> `useMemo` garantit que l'objet `router` est mémorisé et ne sera recréé que si `navigate` change.
=> Améliorer les performances en évitant de recréer l'objet à chaque rendu.


**En détails :**

```jsx
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

export function useRouter() {
  const navigate = useNavigate();

  const router = useMemo(() => ({
    back: () => navigate(-1),
    forward: () => navigate(1),
    reload: () => window.location.reload(),
    push: (href) => navigate(href),
    replace: (href) => navigate(href, { replace: true }),
    navigateToProfile: () => navigate('/profile'),
    navigateToSettings: () => navigate('/settings'),
  }), [navigate]);

  return router;
}
```

`page LoginView.jsx`
```jsx
const handleClick = () => {
	// Simulate an authentication check
	const userRole = 'admin'; // This would typically come from your authentication logic
	if (userRole === 'admin') {
	  router.push('/admin-dashboard');
	} else {
	  router.push('/user-dashboard');
	}
};
```

`page userDashboard.jsx`
```jsx
import React from 'react';
import { useRouter } from '../hooks/useRouter';

const UserDashboard = () => {
  const router = useRouter();

  return (
    <div>
      <h1>User Dashboard</h1>
      <button onClick={router.navigateToProfile}>Go to Profile</button>
      <button onClick={router.navigateToSettings}>Go to Settings</button>
    </div>
  );
};

export default UserDashboard;
```

On centralise toutes les méthodes de navigation dans un seul hook et rend le code plus organisé. 
Peut être utilisé dans plusieurs composants sans dupliquer le code de navigation. 
Si on change la logique de navigation, tout est dans ce fichier sans toucher aux autres composants. 

=> Définir les routes principales et centraliser les configurations de routage avec `BrowserRouter` et `useRoutes`.
=> Utiliser le hook personnalisé `useRouter` pour centraliser les navigations internes qui pourraient être utilisés dans divers composants. 

## Logique de permissions

Si on voulait ajouter une logique de vérification de permissions avant la navigation, on aurait juste à changer ce hook pour l'inclure. 

```tsx
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

// Simuler une fonction qui vérifie les permissions de l'utilisateur
const hasPermission = (role, requiredRole) => role === requiredRole;

export function useRouter() {
  const navigate = useNavigate();
  const userRole = 'user'; // Ceci pourrait être récupéré depuis un contexte ou un hook d'authentification

  const router = useMemo(() => ({
    back: () => navigate(-1),
    forward: () => navigate(1),
    reload: () => window.location.reload(),
    push: (href) => {
      if (hasPermission(userRole, 'user')) {
        navigate(href);
      } else {
        alert('Permission denied');
      }
    },
    replace: (href) => {
      if (hasPermission(userRole, 'admin')) {
        navigate(href, { replace: true });
      } else {
        alert('Permission denied');
      }
    },
    navigateToProfile: () => navigate('/profile'),
    navigateToSettings: () => navigate('/settings'),
  }), [navigate, userRole]);

  return router;
}

```

```jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const useAuth = () => {
  // Simule une fonction pour obtenir les informations de l'utilisateur
  return { user: { role: 'admin' } }; // Remplacer par la logique d'authentification réelle
};

const ProtectedRoute = ({ children, role }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (role && user.role !== role) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
```

```jsx
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import Login from './pages/Login';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import ProtectedRoute from './components/ProtectedRoute';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/login", element: <Login /> },
    { path: "/user-dashboard", element: <ProtectedRoute role="user"><UserDashboard /></ProtectedRoute> },
    { path: "/admin-dashboard", element: <ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute> },
    { path: "/profile", element: <ProtectedRoute><Profile /></ProtectedRoute> },
    { path: "/settings", element: <ProtectedRoute><Settings /></ProtectedRoute> },
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