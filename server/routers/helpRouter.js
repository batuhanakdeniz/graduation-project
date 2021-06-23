import express from "express";
import {getHelp, createHelp,getHelpLocations,getHelpLocation,getHelpBasics,getHelpBasic, 
    getHelpDetail, getHelpDetails, postHelp, putHelp, deleteHelp, putHelpEmergencyLevel,
    getPendingHelpDetails} from '../controllers/helpController.js'
import {postHelpSearch} from "../controllers/helpSearchController.js";
import {putHelpComment, putHelpCommentStatus} from "../controllers/commentController.js";
import {postCategory, postSubCategory,getCategory,getSubCategory,getCategories,getSubCategories } from "../controllers/categoryController.js";
import {PostGeoJson} from "../controllers/geoJsonController.js";
import {auth} from "../middleware/auth.js";
import {upload, uploadComment} from "../middleware/upload.js";
const router = express.Router();



//HELP
router.post('/api/help',createHelp);
router.get('/get/',auth ,getHelp);
router.get('/api/helps/locations',auth, getHelpLocations);
router.get('/api/helps/locations/:id',getHelpLocation);
router.get('/api/helps/basics',getHelpBasics);
router.get('/api/helps/basics/:id',getHelpBasic);
router.get('/api/helps/details',getHelpDetails);
router.get('/api/helps/details/:id',auth, getHelpDetail);
router.post('/api/helps/details/upload/image',auth,upload.array('files', 5),postHelp);
router.put('/api/helps/details/update/:id',putHelp);
router.delete('/api/helps/details/delete/:id',deleteHelp);
router.get('/api/helps/details/pendings',getPendingHelpDetails);

//SEARCH
router.post('/api/helps/search/:search',postHelpSearch);
//COMMENT
router.put('/api/helps/details/comment/:id',uploadComment.array('files', 2),putHelpComment);    //HELP ID
router.put('/api/comments/status/:id',putHelpCommentStatus); //COMMENT ID
router.put('/api/helps/emergencyLevel/:id',putHelpEmergencyLevel); // HELP ID change emergencyLevel

//CATEGORY
router.post('/api/helps/category',postCategory);
router.post('/api/helps/subcategory',postSubCategory);
router.get('/api/helps/category',getCategories);
router.get('/api/helps/subcategory',getSubCategories);
router.get('/api/helps/subcategory/:subCategoryNo',getSubCategory);
router.get('/api/helps/category/:categoryNo',getCategory);


router.post('/api/geoJson',PostGeoJson);






export default router;