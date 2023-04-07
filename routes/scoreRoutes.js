import Express from "express";

import {createScore,getScore} from "../controllers/scoreController.js"

const routes = Express.Router()


routes.post('/create-score', createScore)
routes.get('/get-score/:createdBy', getScore)

export default routes