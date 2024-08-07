
**Users (0,n) <=> `makes` <=>  (1,1) Orders** 
Un utilisateur peut passer 0 ou plusieurs commandes et une commande est liée à un seul utilisateur.

**Users (0,n) <=> `is associated to` <=> (1,n) Restaurants**
Un utilisateur peut être associé à plusieurs restaurants et un restaurant peut avoir plusieurs utilisateur associés.

**RestaurantUsers (1,n) <=> `have` <=> (1,n) Permissions**
Un utilisateur de restaurant peut avoir un ou plusieurs permissions et une permissions peut être accordée à plusieurs rôles

**Restaurants (0,1) <=> `is a` <=> (1,1) StripeConfig**
Chaque restaurant a une configuration Stripe unique

**Orders (1,n) <=> `contains` <=> (0,1) GeneratedCoupons**
Une commande peut contenir plusieurs coupons générés mais un coupon généré peut ne pas être lié à une commande.
(Un rôle `Admin` d'un restaurant pourrait générer un coupon et l'attribuer directement à un utilisateur pour lui offrir sans passer par une commande) = permet l'existence de coupons générés indépendamment d'une commande.

**GeneratedCoupons (1,n) <=> `linked to` <=> (1,1) CouponHistory**
Un coupon généré peut avoir plusieurs entrées dans l'historique qui correspond à plusieurs utilisations et chaque entrée d'historique est associée à un seul coupon généré.

Permet de suivre chaque utilisation d'un coupon généré, déduire le montant restant à chaque fois qu'il est demandé et marquer le coupon comme utilisé ou expiré lorsque le montant atteint 0.

Permet de donner l'historique de chaque transaction du coupon à l'utilisateur. 

Pour déterminer le montant restant, on peut calculer la somme de `amount_used` pour un `generated_coupon_id` donné et la soustraire de la valeur initiale du coupon. Opération effectuée au niveau de l'application en faisant une request db.

**Items**
Je vise à avoir une flexibilité où `items` peut représenter différents types de produits ou expériences, chacun avec ses propres attributs et options. 

