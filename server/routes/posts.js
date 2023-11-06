import express from "express";
import {getFeed, getUsersFeed, likePost} from "../controller/posts.js";
import { verifyToken } from "../middleware/auth.js";
const router = express.Router();

//read
router.get("/", verifyToken, getFeed);
router.get("/:userId/posts", verifyToken, getUsersFeed);

//update
router.patch("/:id/like", verifyToken, likePost);

export default router;