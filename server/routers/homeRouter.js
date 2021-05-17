import express from "express";
import {getHelpedNumber, getHelpNumber,getUserNumber } from '../controllers/homeController.js'
const router = express.Router();

router.get('/api/help/number',getHelpNumber);
router.get('/api/help/helped/number',getHelpedNumber);
router.get('/api/user/number', getUserNumber);



export default router;