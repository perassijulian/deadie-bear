import Bear from "../models/bear.js";
import { Router } from "express";
import { addBear, deleteBear, getBears, modifyBear, getSpecificBear } from "../controllers/bearShowcase.js";

const bearShowcaseRoute = Router();

bearShowcaseRoute.get('/', getBears)
bearShowcaseRoute.post('/', addBear)
bearShowcaseRoute.put('/', modifyBear)
bearShowcaseRoute.delete('/', deleteBear)

bearShowcaseRoute.get('/:deadieId', getSpecificBear)


export default bearShowcaseRoute;