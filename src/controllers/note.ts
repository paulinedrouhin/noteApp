import { Request, Response, NextFunction, Router } from "express"
const router: Router = Router()
import { connection } from "../conf"


// endpoint that allows a client to create an author // 
// expected in body : name //
router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    const author : Author  = req.body
    connection.query(`INSERT INTO author(name) VALUES (?) `, author.name, (err: any, results: any) => {
        if (err) {
            res.send('Error while creating an author').status(500)
        } 
        res.send('Author successfully created').json(results).status(200)
    })
})

// endpoint that allows a client to list created authors // 
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    connection.query("SELECT * FROM author", (err: any, results: Author[]) => {
        if (err) {
            res.send('Error while listing authors').status(500)
        } 
        res.json(results).status(200)
    })
})

// endpoint that allows a client to create a note and associate it to an author // 
// expected in body : title, content, author_id //
router.post('/note', async (req: Request, res: Response, next: NextFunction) => {
    const note : Note  = req.body
    connection.query(`INSERT INTO note SET ? `, note, (err: any, results: any) => {
        if (err) {
            res.send('Error while creating a note').status(500)
        } 
        res.send('Note successfully created').json(results).status(200)
    })
})

// endpoint that allows a client to list created authors // 
// expected in params : author's id //
router.get('/:id/note', async (req: Request, res: Response, next: NextFunction) => {
    const author = req.params.id
    console.log (author)
    connection.query("SELECT * FROM note WHERE author_id = ?", author, (err: any, results: Note[]) => {
        if (err) {
            res.send("Error while listing one author's notes").status(500)
        } 
        res.json(results).status(200)
    })
})

export const note: Router = router


interface Author {
    id?: Number,
    name?: String
}

interface Note {
    id?: Number,
    title?: String,
    content?: String,
    author_id?: Number
}
