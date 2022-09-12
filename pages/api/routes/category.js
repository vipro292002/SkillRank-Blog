import express from "express";
import { detailCategory, listCategory } from "../controllers/category";

const router = express.Router()


router.get('/categories', listCategory)

router.get('/categories/:slug', detailCategory)


export default router