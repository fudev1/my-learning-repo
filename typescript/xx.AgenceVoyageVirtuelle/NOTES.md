
# Propriétés obligatoires (!)
## ! pour les propriétés obligatoires : 

```typescript
export class Destination implements IDestination {
    private readonly _id!: number;
    private readonly _nom!: string;
    // ... autres propriétés ...

    constructor(id: number, nom: string, /* ... */) {
        this._id = id;
        this._nom = nom;
        // ... initialisation des autres propriétés ...
    }
}
```

## sans ! (propriétés dans le constructeur) :

```typescript
export class Destination implements IDestination {
    constructor(
        private readonly _id: number,
        private readonly _nom: string,
        // ... autres propriétés ...
    ) {}
}
```

