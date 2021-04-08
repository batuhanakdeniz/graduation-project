import express from "express";
import { getUser, getUserProfile, createUser, loginUser, getloggedIn } from "../controllers/userController.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get('/', getUser);
router.post('/signup/:userType', createUser);
router.post('/login', loginUser);
router.get('/loggedIn', getloggedIn);
router.get('/profile/:id', getUserProfile);

export default router;