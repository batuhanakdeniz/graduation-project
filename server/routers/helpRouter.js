import express from "express";
import {getHelp, createHelp,getHelpLocations,getHelpLocation,getHelpBasics,getHelpBasic, getHelpDetail, getHelpDetails, postHelp, putHelp, deleteHelp, putHelpEmergencyLevel} from '../controllers/helpController.js'
import {getHelpSearch} from "../controllers/helpSearchController.js";
import {putHelpComment, putHelpCommentStatus} from "../controllers/commentController.js";
import {postCategory, postSubCategory,getCategory,getSubCategory } from "../controllers/categoryController.js";
import {auth} from "../middleware/auth.js";
import {upload} from "../middleware/upload.js";
const router = express.Router();



//HELP
router.post('/api/help',createHelp);
router.get('/get/',auth ,getHelp);
router.get('/api/helps/locations',auth, getHelpLocations);
router.get('/api/helps/locations/:id',getHelpLocation);
router.get('/api/helps/basics',getHelpBasics);
router.get('/api/helps/basics/:id',auth,getHelpBasic);
router.get('/api/helps/details',getHelpDetails);
router.get('/api/helps/details/:id',auth, getHelpDetail);
router.post('/api/helps/details/upload/image',auth,upload.array('files', 5),postHelp);
router.put('/api/helps/details/update/:id',putHelp);
router.delete('/api/helps/details/delete/:id',deleteHelp);
//SEARCH
router.get('/api/helps/search/:search',getHelpSearch);
//COMMENT
router.put('/api/helps/details/comment/:id',putHelpComment);    //HELP ID
router.put('/api/comments/status/:id',putHelpCommentStatus); //COMMENT ID
router.put('/api/helps/emergencyLevel/:id',putHelpEmergencyLevel); // HELP ID change emergencyLevel

//CATEGORY
router.post('/api/helps/category',postCategory);
router.post('/api/helps/subcategory',postSubCategory);
router.get('/api/helps/category',getCategory);
router.get('/api/helps/subcategory',getSubCategory);


export default router;