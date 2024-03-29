#  🔨 I Installation
1. Récupéré le projet grâce à la commande `git clone https://github.com/MarcPetitdemange/tp-note-angular-backend.git`
2. Ouvrez un terminal de commande (cmd / powershell ...)
3. Allez dans le dossier racine `cd tp-note-angular-backend`
4. Exectuez la commande `npm install` pour importer les dépendances du projet

# ▶ II Démarrage
Exécutez la commande `npm run start` pour démarrer l'application.

# ❓ III Test
Une URL de test a été mise à votre disposition.  
Pour tester, ouvrez dans votre navigateur un nouvel onglet et rendez vous sur l'URL `http://localhost:3000/test`  
--> Si vous avez changé l'URL ou le port pensez à adapter `http://localhost:{remplacerParPortVoulu}/test`  
[**Lien direct**](http://localhost:3000/test)

# 📚 Documentation
Vous trouverez la liste de tous les **ENDPOINTS** disponible à l'adresse suivante : `http://localhost:3000/api-docs`  
--> Si vous avez changé l'URL pendez à adapter `http://localhost:{remplacerParPortVoulu}/api-docs`  
[**Lien direct**](http://localhost:3000/api-docs)


#  Ressources
[**Repo git du projet `https://github.com/MarcPetitdemange/tp-note-angular-backend.git`**](https://github.com/MarcPetitdemange/tp-note-angular-backend.git)

# 💀 Erreurs potentielles
Il est possible que le port 3000 soit déjà utilisé par un autre processus sur votre machine dans ce cas :  
` npm start -- --port={remplacerParPortVoulu}`

# 🐋 Docker
Si vous avez des soucis avec le lancement en local, il est possible de lancer l'application à l'intérieur d'un conteneur docker. Pour cela exécutez la commande :   `docker compose up -d`.  
☣️ Attention toutefois ! Vous ne pourrez pas bénéficier des tests d'API proposés par Swagger. Il vous faudra adapter le port en fonction de celui du [compose.yml](./compose.yml) (3002 par défaut).  
*NB: Vous pouvez tout à fait éditer le compose.yml au besoin pour changer le mapping du port et mettre celui dont vous avez besoin.*   

