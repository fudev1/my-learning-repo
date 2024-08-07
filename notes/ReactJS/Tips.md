
### Déclarer une fonction

```jsx
function functionName() {
	// exemple basique
}
```

```jsx
function functionName(paramName: paramType): returnType {
	// fonction implementation
}
```

1. Les parenthèses `( )` indiquent que c'est une fonction 
2. Les paramètres dans les parenthèses sont ce que la *fonction* prend, avec leur *type*
3. Ce qui suit après `:` indique le *type* de la *valeur retournée* par la fonction

```jsx
declare function parseFloat(string: string): number;
```

- `(string: string)` : La fonction prend un paramètre nommé `string` de type `string`.
- `: number` : La fonction retourne un `number`.

---

