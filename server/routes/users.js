import express from "express";
import { getUsers, getUserFriends, addDeleteFriend} from "../controller/users.js";
import {verifyToken} from "../middleware/auth.js";

const router = express.Router();

// Read 
router.get("/:id", verifyToken, getUsers);
router.get("/:id/friends", verifyToken, getUserFriends);

// Update
router.patch("/:id/:friendId", verifyToken, addDeleteFriend);

export default router;

