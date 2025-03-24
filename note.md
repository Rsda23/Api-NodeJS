## Installation

```sh
npm init -y
```
Créer un dossier `src`.

```sh
pnpm add express
git init
```
Créer un fichier `.gitignore` et y ajouter : node_modules/ et .env
```

```sh
pnpm add -d ts
npx tsc --init
```
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

## Setup README

Renommer le fichier `.env.example` en `.env`.

---

## Structure du projet

Dans `src`, création du point d'entrée `index.ts` et du fichier `app.ts` pour la pré-configuration.

### Configuration de `app.ts`

```ts
import Express, { Application, Request, Response } from 'express';

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
import { app } from './app';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server currently listening on port ${PORT}`);
}).on("error", (error) => {
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

