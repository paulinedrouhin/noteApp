import { Request, Response, Router } from "express"
const router: Router = Router()
import * as type from '../model/types'
import * as promise from "../model/promises"

// endpoint that allows a client to create an author // 
// expected parameters in body : name //
router.post('/', async (req: Request, res: Response) => {
    const author: type.Author = req.body
    promise.createAuthors(author).then((results) => {
        res.send(`Author ${author.name} successfully created`).json(results).status(200)
    }).catch(()=>{
        res.send('Error while creating an author').status(500)
    })
  
})

// endpoint that allows a client to list created authors // 
router.get('/', async (req: Request, res: Response) => {
    promise.getAuthors.then((results) => {
        res.json(results).status(200)
    }).catch(() => {
        res.send('Error while listing authors').status(500)
    })
})

// endpoint that allows a client to create a note and associate it to an author // 
// expected parameters in body : title, content, author_id //
router.post('/note', async (req: Request, res: Response) => {
    const note: type.Note = req.body
    promise.createNote(note).then((results) => {
        res.send(`Note ${note.title} successfully created`).json(results).status(200)
    }).catch(()=>{
        res.send('Error while creating an author').status(500)
    })
})

// endpoint that allows a client to list created authors // 
// expected parameter in params : author's id //
router.get('/:id/note', async (req: Request, res: Response) => {
    const authorId : String = req.params.id
    promise.getAuthorsNotes(authorId).then((results) => {
        res.json(results).status(200)
    }).catch(() => {
        res.send('Error while listing authors').status(500)
    })
})

export const note: Router = router
