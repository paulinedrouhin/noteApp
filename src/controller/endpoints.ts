import { Request, Response, Router } from "express"
const router: Router = Router()
import * as type from '../model/types'
import * as authorModel from "../model/authorModel"
import * as noteModel from "../model/noteModel"
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))

// endpoint that allows a client to create an author // 
// expected parameters in body : name //
router.post('/author', async (req: Request, res: Response) => {
    const author: string = req.body.name
    authorModel.createAuthors(author).then((results) => {
        res.json(results).status(200)
    }).catch(()=>{
        res.send('Error while creating an author').status(500)
    })
})

// endpoint that allows a client to list created authors // 
router.get('/author', async (req: Request, res: Response) => {
    authorModel.getAuthors.then((results) => {
        res.json(results).status(200)
    }).catch(() => {
        res.send('Error while listing authors').status(500)
    })
})

// endpoint that allows a client to create a note and associate it to an author // 
// expected parameters in body : title, content, author_id //
router.post('/note', async (req: Request, res: Response) => {
    const note: type.Note = req.body
    noteModel.createNote(note).then((results) => {
        res.json(results).status(200)
    }).catch(()=>{
        res.send('Error while creating an author').status(500)
    })
})

// endpoint that allows a client to list created authors // 
// expected parameter in params : author's id //
router.get('/author/:id/note', async (req: Request, res: Response) => {
    const authorId : any = req.params.id
    console.log('note ' ,typeof req.params.id)
    noteModel.getAuthorsNotes(authorId).then((results) => {
        res.json(results).status(200)
    }).catch(() => {
        res.send('Error while listing authors').status(500)
    })
})

export const endpoints: Router = router
