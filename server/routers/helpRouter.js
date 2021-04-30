import express from "express";
import {getHelp, createHelp,getHelpLocations,getHelpLocation,getHelpBasics,getHelpBasic, getHelpDetail, getHelpDetails, postHelpImage, postHelpImageDENEME} from '../controllers/helpController.js'
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
router.post('/api/helps/details/:id/file',postHelpImage);
router.post('/api/helps/details/upload/image',upload.single('file'),postHelpImageDENEME);


export default router;