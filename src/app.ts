import Express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import connection from "./config/database";
// inference de type : lorsque le 'langage' devine le type d'une variable a partir du type de donnees qui sert à l'initialisation

export const app: Application = Express();

connection();

//Creation premiere route
//Une route : association METHOD http + URL (unique au seins de l'app)
app.get("/", (req: Request, res: Response) => {
  res.status(200).json("Hello from my REST API");
});
