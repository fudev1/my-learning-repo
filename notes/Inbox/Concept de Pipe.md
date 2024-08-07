
Le concept de Pipe est de faire passer une valeur dans un pipe pour lui faire une transformation.
Exemple, un texte en minuscule > majuscule : mario > MARIO

**Créer un Pipe**
```bash
ng generate pipe nom_du_pipe
```

**Méthode pour raccourcir un texte**
```typescript
// typescript
transform(value: string, limit: number = 20): string {
    if (value.length <= limit) {
      return value;
    } else {
      return value.substring(0, limit) + '...';
    }
  }


// utilisation html (exemple)
{{ movie.info | summary : 250 }}

<p>{{ `Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.` | summary:100 }}</p>

```