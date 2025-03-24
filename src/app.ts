import Express, {Application, Request, Response} from 'express'

// inference de type : lorsque le 'langage' devine le type d'une variable a partir du type de donnees qui sert à l'initialisation

export const app: Application = Express();

//Creation premiere route
//Une route : association METHOD http + URL (unique au seins de l'app)
app.get("/", (req: Request, res: Response) => {
    res.status(200).send("Hello")
})