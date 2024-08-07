
`ESLINT` : Affiche les erreurs directement dans vscode
`PRETTIER` 
`ERROR LENS` : Affiche les erreurs en surbrillance
`GITHUB COPILOT`
`MATERIAL ICON VSCODE` 
`ES7+`

`COLOR HIGHLIGHT`
`AUTO RENAME TAG`
`TEMPLATE STRING CONVERTER`


# Configuration Extension

Ouvrir le fichier settings.json en faisant `ctrl + p` pour ouvrir la console. 
Écrire `open settings json` et choisir `open user settings`

Cliquer sur `Spaces` en base de l'écran et choisir `Indent using spaces` et choisir `2`

Ajouter dans le JSON : 

`"editor.tabSize": 2
`"editor.defaultFormatter": "esbenp.prettier-vscode"`
`"editor.formatOnSave": true`

`**Corrige onsave, les erreurs eslint si possible**`
`**Organise les imports**` 
```
"editor.codeActionOnSave": {
	"source.fixAll.eslint": "explicit" 
	"source.organizeImports": "explicit"
}
``` 

`"editor.fontFamily": "CommitMonoV138"`
