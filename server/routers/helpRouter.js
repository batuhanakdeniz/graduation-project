import express from "express";
import { getHelp, createHelp } from "../controllers/helpController.js";
import {auth} from "../middleware/auth.js";
const router = express.Router();

//router.get('/', getHelp);
router.post('/yardimekle/',auth ,createHelp);
router.get('/get/',auth ,getHelp);
router.get('api/helps/location');
router.get('api/helps/location/:id')
router.get('api/helps/basic');
router.get('api/helps/basic/:id');
router.get('api/helps/detail');
router.get('api/helps/detail/:id');
export default router;