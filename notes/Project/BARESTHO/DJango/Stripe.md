

### Configurer Stripe 

```python
pip3 install --upgrade stripe
```

### Créer un PaymentIntent

Objet qui représente l'intention d'encaisser le paiement d'un client et suit les tentatives de débit et changements d'état tout au long du processus de paiement. Il suit le le cycle de vie de paiement du client, en gardant un trace des tentatives de paiement échoués et en s'assurant que le client n'est facturé qu'une seule fois. 

=> Renvoyer la clé secrète du client dans la réponse pour finaliser le paiement côté client. 
