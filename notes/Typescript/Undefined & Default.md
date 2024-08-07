
**Component**

```tsx
type GreetingType = {
  name: string;
  enterprise?: string; // Défini une valeur non obligatoire (undefined)
};

const Greeting = (props: GreetingType) => {
  return (
    <div className="border border-slate-500 rounded p-4 my-2">
      <p>Hello {props.name}</p>
      <span className="text-sm text-slate-400">
        @{props.enterprise ?? "Visiteur"}
        {/* On peut définir une valeur par défaut si elle est undefined */}
      </span>
    </div>
  );
};

export default Greeting;
```

**Utilisation**

```tsx
<Greeting name="Matteo" enterprise="Masana" />
<Greeting name="Jean" />
// Ici je n'ai pas spécifié `entreprise` et donc la valeur par défaut sera @Visiteur
```