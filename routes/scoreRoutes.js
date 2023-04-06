import Express from "express";

import {createScore} from "../controllers/scoreController.js"

const routes = Express.Router()


routes.post('/create-score', createScore)


export default routes