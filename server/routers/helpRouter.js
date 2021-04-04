import express from "express";
import { getHelp, createHelp } from "../controllers/helpController.js";
import {auth} from "../middleware/auth.js";
const router = express.Router();

//router.get('/', getHelp);
router.post('/yardimekle/',auth ,createHelp);
router.get('/get/',auth ,getHelp);

export default router;