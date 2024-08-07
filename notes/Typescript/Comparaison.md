
## `const Button = (props: ButtonProps)`

On définit explicitement le type des props que le composant accepte

```ts
import React from 'react';
import { ButtonProps as MuiButtonProps } from '@mui/material';

interface ButtonProps extends MuiButtonProps {
	children: React.ReactNode;
	// Ajoute d'autres props personnalisées si nécessaire
}

// Déclarer le composant en utilisant l'interface des props
const Button = (props: ButtonProps) => {
  return <button {...props}>{props.children}</button>;
};

export default Button;

```

---
## `const Button: React.FC<ButtonProps>`

On utilise le type `React.FC`  (Functionnal Composant) fourni par React, qui inclut directement la prop `children` et ajoute des vérifications en plus de TS pour les composant fonctionnels.

```ts
import React, { FC } from 'react';
import { ButtonProps as MuiButtonProps } from '@mui/material';

// Définir les props du composant sans inclure `children`
interface ButtonProps extends MuiButtonProps {
  // Ajoute d'autres props personnalisées si nécessaire
}

// Déclarer le composant en utilisant `React.FC`
const Button: FC<ButtonProps> = (props) => {
  return <button {...props}>{props.children}</button>;
};

export default Button;

```

## Utilisation `children`

```ts
// ProductButton.tsx
import React from 'react';
import { ButtonProps as MuiButtonProps } from '@mui/material';

interface ProductButtonProps extends MuiButtonProps {
  amount: number;
}

const ProductButton: React.FC<ProductButtonProps> = ({ amount, ...props }) => {
  return (
    <button {...props}>
      <span>Montant du produit: {amount}</span>
      {props.children}
    </button>
  );
};

export default ProductButton;

```

```ts
// App.tsx
import React from 'react';
import ProductButton from './ProductButton';

const App: React.FC = () => {
  const productAmount = 50; // Exemple de montant de produit

  return (
    <div>
      <ProductButton amount={productAmount} color="primary">
        <span> - Ajouté au panier</span>
      </ProductButton>
    </div>
  );
};

export default App;
```

