import Bear from "../models/bear.js";
import { Router } from "express";
import { addBear, deleteBear, getBears, modifyBear } from "../controllers/bearShowcase.js";

const bearShowcaseRoute = Router();

bearShowcaseRoute.get('/', getBears)
bearShowcaseRoute.post('/', addBear)
bearShowcaseRoute.put('/', modifyBear)
bearShowcaseRoute.delete('/', deleteBear)

export default bearShowcaseRoute;