import {Request, Response, NextFunction, Router} from "express"
const router: Router = Router()

router.get('/', (req: Request,res: Response, next: NextFunction) => {
    res.send('Hello Alsid')
})

export const note: Router = router