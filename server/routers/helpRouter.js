import express from "express";
import {getHelp, createHelp,getHelpLocations,getHelpLocation,getHelpBasics,getHelpBasic, getHelpDetail, getHelpDetails, postHelp} from '../controllers/helpController.js'
import {auth} from "../middleware/auth.js";
import {upload} from "../middleware/upload.js";
const router = express.Router();



//router.get('/', getHelp);
router.post('/api/help',createHelp);
router.get('/get/',auth ,getHelp);
router.get('/api/helps/locations', getHelpLocations);
router.get('/api/helps/locations/:id',getHelpLocation);
router.get('/api/helps/basics',getHelpBasics);
router.get('/api/helps/basics/:id',getHelpBasic);
router.get('/api/helps/details',getHelpDetails);
router.get('/api/helps/details/:id',getHelpDetail);
router.post('/api/helps/details/upload/image',upload.array('files', 5),postHelp);


export default router;