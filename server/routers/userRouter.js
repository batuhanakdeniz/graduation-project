import express from "express";
import { getAllUser, createUser, loginUser, getloggedIn, getloggedOut, getloggedUser, putUser, deleteUser, verifyUser } from "../controllers/userController.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.post('/signup', createUser);
router.post('/login', loginUser);
router.get('/api/users', getAllUser);
router.get('/api/loggedUser', auth , getloggedUser);
router.get('/api/loggedIn', getloggedIn);
router.get('/api/loggedOut', getloggedOut);
router.get('/api/loggedUser/update/:id', putUser);
router.get('/api/loggedUser/delete/:id', deleteUser);
//router.get('/profile/:id', getUserProfile);
router.get('/api/auth/verify/:confirmationCode',verifyUser);
export default router;