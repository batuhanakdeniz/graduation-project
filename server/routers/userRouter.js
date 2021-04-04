import express from "express";
import { getUser, createUser, loginUser, getloggedIn } from "../controllers/userController.js";

const router = express.Router();

router.get('/', getUser);
router.post('/signup/:userType',createUser);
router.post('/login', loginUser);
router.get('/loggedIn', getloggedIn);

export default router;