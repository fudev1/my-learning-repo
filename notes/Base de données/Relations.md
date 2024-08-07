
1. **One-to-One (1 - 1)**
   
   Une relation **`one-to-one`** se traduit lorsque chaque enregistrement d'une table est associé à un seul enregistrement d'une autre table. Par exemple, si chaque utilisateur a une seule adresse d'expédition spécifique, la relation entre les utilisateurs et les adresses d'expédition est **1 - 1**
   
   => Une personne = Un passeport
   
   Une table **Personnes** et une table **Passeports**, chaque **personne** dans la db **a un unique passeport** associé et vice-versa

2. **One-to-Many (1 - N) / Many-to-One (N - 1)**
   
   Les relation **one-to-many** et **many-to-one** sont les plus courantes. Elles se produisent lorsqu'un enregistrement d'une table peut être associé à un ou plusieurs enregistrements d'une autre table. 
   
   Par exemple : Un restaurant peut créer plusieurs bons cadeaux, donc la relation entre les restaurants et les bons cadeaux est 1 - N (one-to-many). Inversement, cela peut être vu comme N - 1 (many-to-one) du point de vue des bons cadeaux vers le restaurant.
   
   => Une mère = Plusieurs enfants >< Enfants = Une seule mère
   
   Table **Mères** et table **Enfants**, une mère (1) peut avoir plusieurs enfants (N). Mais chaque enfant est lié à une seule mère.
   
3. **Many-to-Many (N - N)**
   
   Une relation many-to-many se produit lorsque plusieurs enregistrements d'une table sont associés à plusieurs enregistrements d'une autre table. 
   
   Par exemple : Des étudiants peuvent s'inscrire à plusieurs cours et chaque cours peut avoir plusieurs étudiants, la relation entre les étudiants et les cours est N - N. Ce type de relation est généralement géré par une table d'association (ou table de jonction) qui enregistre chaque association unique entre les deux autres tables.
   
   => Table Etudiants et une Table Cours. Un étudiants = plusieurs cours. Un cours = plusieurs étudiants. Pour cela, on utilise une table supplémentaire, par exemple Inscriptions, qui enregistre chaque association d'étudiant à cours
   
4. **Zero or One to Many (0..1 - N)** 
   
   Un animal de compagnie peut avoir zéro ou un propriétaire, mais un propriétaire peut avoir plusieurs animaux de compagnie.
   
   Par exemple : Dans une table Propriétaires et une table Animaux de compagnie, un animal peut ne pas avoir de propriétaire (0) ou en avoir un (1), mais un propriétaire peut avoir plusieurs animaux (N)

