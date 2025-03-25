## Installation

```sh
npm init -y
```

Créer un dossier `src`.

```sh
pnpm add express
pnpm add -D typescript
git init
```

Créer un fichier `.gitignore` et y ajouter : node_modules/ et .env

````

```sh
pnpm add -d ts
npx tsc --init
````

Cela crée un fichier `tsconfig.json`.

```sh
pnpm add -D @types/node @types/express
```

Installation des définitions de type.

```sh
pnpm add dotenv
```

Créer un fichier `.env` et créer un `.env.example`.

Dans `package.json`, ajouter dans les scripts :

```json
"scripts": {
    "build": "npx tsc"
}
```

```sh
pnpm add -D nodemon
```

Installation de nodemon (outil permettant de recharger automatiquement l'application Node.js lors des modifications de fichiers).

Dans `tsconfig.json`, décommenter la ligne avec `types` et ajouter `"node", "jest"`. Décommenter `outDir` et y ajouter `./dist`.

---

## Structure du projet

Dans `src`, création du point d'entrée `index.ts` et du fichier `app.ts` pour la pré-configuration.

### Configuration de `app.ts`

```ts
import Express, { Application, Request, Response } from "express";

// Inférence de type : lorsque le langage devine le type d'une variable à partir du type de données qui sert à l'initialisation

export const app: Application = Express();

// Création de la première route
// Une route : association METHOD HTTP + URL (unique au sein de l'application)
app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello");
});
```

### Configuration de `index.ts`

```ts
import { app } from "./app";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;

app
  .listen(PORT, () => {
    console.log(`Server currently listening on port ${PORT}`);
  })
  .on("error", (error) => {
    throw new Error(error.message);
  });
```

### Configuration de `package.json`

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon dist/index.js",
    "build": "npx tsc"
}

logger fonctionnalité qui permet de créer des log (log : journal de bord d'activité)
rest : REpresentational State Transfer

stateless : aucun lien n'est lié entre chaque request

format : json et parfois xml (ça ce fait de moins en moins)

ressource ideentity identifier par la URIs

code de status:
1XX info / 2XX succes / 3XX redirection / 4XX erreur client / 5XX erreur serveur

rest est le standard le plus mature, le plus simple, vois classique pr l'archi client serv utilisé pr api web simple

graphql est plus complexe, reque plus precise, plus doption parame, travailler avec endpoint unique et ça a pas mal d'avantage bien pr projet mobile web

grpc est plus performant que les 2, moins adapter au web


installation de jest : pnpm add -D jest
pnpm add --save-dev @jest/globals
pnpm add -D ts-jest

routing c recuper un router depuis express, le but c via lees fonct express, d'organiser les different endpoint en fonction des ressources de notre app

view = json

on utilise mvc pour une api rest surtout pour la séparation des préoccupations

rdbms  :  relational database management system
```
