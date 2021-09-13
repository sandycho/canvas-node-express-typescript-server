import { Request, Response, Router } from 'express'

import StatusCodes from 'http-status-codes'

const baseRouter = Router()
baseRouter.get('/', (req: Request, res: Response) => {
    return res.sendStatus(StatusCodes.OK)
})

export default baseRouter
