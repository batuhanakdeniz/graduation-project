import express from "express";
import { getHelp, createHelp } from "../controllers/helpController.js";
//import {auth} from "../middleware/auth.js";
const router = express.Router();

//router.get('/', getHelp);
router.post('/yardimekle/',createHelp);
router.get('/api/help',getHelp);

export default router;