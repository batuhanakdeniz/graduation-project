import express from "express";
import { getUser, createUser, loginUser, getloggedIn, getloggedOut, getloggedUser, putUser, deleteUser } from "../controllers/userController.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get('/', getUser);
router.post('/signup', createUser);
router.post('/login', loginUser);
router.get('/api/loggedUser', auth , getloggedUser);
router.get('/api/loggedIn', getloggedIn);
router.get('/api/loggedOut', getloggedOut);
router.get('/api/loggedUser/update/:id', putUser);
router.get('/api/loggedUser/delete/:id', deleteUser);
//router.get('/profile/:id', getUserProfile);

export default router;