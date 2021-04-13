import express from "express";
<<<<<<< Updated upstream
import { getUser, getUserProfile, createUser, loginUser, getloggedIn } from "../controllers/userController.js";
=======
import { getUser, createUser, loginUser, getloggedIn, getloggedOut, getloggedUser } from "../controllers/userController.js";
>>>>>>> Stashed changes
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get('/', getUser);
router.post('/signup/:userType', createUser);
router.post('/login', loginUser);
<<<<<<< Updated upstream
router.get('/loggedIn', getloggedIn);
router.get('/profile/:id', getUserProfile);
=======
router.get('/api/loggedUser', auth , getloggedUser);
router.get('/api/loggedIn', getloggedIn);
router.get('/api/loggedOut', getloggedOut);
//router.get('/profile/:id', getUserProfile);
>>>>>>> Stashed changes

export default router;