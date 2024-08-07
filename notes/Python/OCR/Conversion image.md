

## Seuil, méthode OTSU

```python
thresh = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)[1]
```

`gray` : image en image de gris
`0` : valeur de seuil, non utilisée car j'utilise la méthode OTSU
`255` : valeur donnée aux pixels qui sont au dessus du seuil (blanc dans une image binaire)
`cv2.THRESH_BINARY` : le type de seuillage, qui crée une image en deux couleurs, blanc ou noir

## Seuil manuel 

```python
threshold_value = 127 # La valeur de seuil peut être entre 0 et 255
_, thresh = cv2.threshold(gray, threshold_value, 255, cv2.THRESH_BINARY)
```


