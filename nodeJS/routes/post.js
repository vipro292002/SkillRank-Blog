import express from "express";
import { detailPost, listPost } from "../controllers/post";

const router = express.Router()


router.get("/posts", listPost )
router.get("/posts/:slug", detailPost )

export default router