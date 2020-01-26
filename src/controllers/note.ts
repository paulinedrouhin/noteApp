import { Request, Response, Router } from "express"
const router: Router = Router()
import { connection } from "../conf"

//////// promises //////////
const getAuthors = new Promise((resolve, reject) => {
    connection.query("SELECT * FROM author", (err: any, results: Author[]) => {
        if (err) {
            reject()
        } else resolve(results)
    })
})

const createAuthors = (author : Author) => {
    return new Promise((resolve, reject) => {
    connection.query(`INSERT INTO author(name) VALUES (?) `, author, (err: any, results: any) => {
                if (err) {
            reject()
        } else resolve(results)
    })
})
}

const createNote = (note : Note) => {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO note SET ? `, note, (err: any, results: any) => {
            if (err) {
            reject()
        } else resolve(results)
    })
})
}

const getAuthorsNotes = (authorId : String) => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM note WHERE author_id = ?", authorId, (err: any, results: Note[]) => {
            if (err) {
            reject()
        } else resolve(results)
    })
})
}
////////////////////////



// endpoint that allows a client to create an author // 
// expected parameters in body : name //
router.post('/', async (req: Request, res: Response) => {
    const author: Author = req.body
    createAuthors(author).then((results) => {
        res.send(`Author ${author.name} successfully created`).json(results).status(200)
    }).catch(()=>{
        res.send('Error while creating an author').status(500)
    })
  
})

// endpoint that allows a client to list created authors // 
router.get('/', async (req: Request, res: Response) => {
    getAuthors.then((results) => {
        res.json(results).status(200)
    }).catch(() => {
        res.send('Error while listing authors').status(500)
    })
})

// endpoint that allows a client to create a note and associate it to an author // 
// expected parameters in body : title, content, author_id //
router.post('/note', async (req: Request, res: Response) => {
    const note: Note = req.body
    createNote(note).then((results) => {
        res.send(`Note ${note.title} successfully created`).json(results).status(200)
    }).catch(()=>{
        res.send('Error while creating an author').status(500)
    })
})

// endpoint that allows a client to list created authors // 
// expected parameter in params : author's id //
router.get('/:id/note', async (req: Request, res: Response) => {
    const authorId : String = req.params.id
    getAuthorsNotes(authorId).then((results) => {
        res.json(results).status(200)
    }).catch(() => {
        res.send('Error while listing authors').status(500)
    })
})

export const note: Router = router

///////// types //////////
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
