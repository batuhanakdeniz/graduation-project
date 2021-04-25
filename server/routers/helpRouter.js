import express from "express";
import {getHelp, createHelp,getHelpLocations,getHelpLocation,getHelpBasics,getHelpBasic, getHelpDetail, getHelpDetails} from '../controllers/helpController.js'
import {auth} from "../middleware/auth.js";
const router = express.Router();

//router.get('/', getHelp);
router.post('/api/help',createHelp);
router.get('/get/',auth ,getHelp);
router.get('api/helps/locations', getHelpLocations);
router.get('api/helps/locations/:id',getHelpLocation)
router.get('api/helps/basics',getHelpBasics);
router.get('api/helps/basics/:id',getHelpBasic);
router.get('api/helps/details',getHelpDetail);
router.get('api/helps/details/:id',getHelpDetails);
export default router;