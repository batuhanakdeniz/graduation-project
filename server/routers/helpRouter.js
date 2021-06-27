import express from "express";
import {getHelp, createHelp,getHelpLocations,getHelpLocation,getHelpBasics,getHelpBasic, 
    getHelpDetail, getHelpDetails, postHelp, putHelp, deleteHelp, putHelpEmergencyLevel,
    getPendingHelpDetails,getUserOwnHelps, getUserOwnPendingHelps, getUserOwnActiveHelps} from '../controllers/helpController.js'
import {postHelpSearch} from "../controllers/helpSearchController.js";
import {putHelpComment, putHelpCommentStatus, getAllPendingComment,getAllActiveComment,getOwnPendingComment,getOwnActiveComment} from "../controllers/commentController.js";
import {postCategory, postSubCategory,getCategory,getSubCategory,getCategories,getSubCategories } from "../controllers/categoryController.js";
import {PostGeoJson} from "../controllers/geoJsonController.js";
import {auth} from "../middleware/auth.js";
import {upload, uploadComment} from "../middleware/upload.js";
const router = express.Router();

//HELP
router.post('/api/help',createHelp);
router.get('/get/',auth ,getHelp);
router.get('/api/helps/locations',auth, getHelpLocations);//+
router.get('/api/helps/locations/:id',auth,getHelpLocation);//+
router.get('/api/helps/basics',auth,getHelpBasics); //?
router.get('/api/helps/basics/:id',auth,getHelpBasic); //+
router.get('/api/helps/details',auth,getHelpDetails); //?
router.get('/api/helps/details/:id',auth, getHelpDetail); //+
router.post('/api/helps/details/create',auth,upload.array('files', 5),postHelp); //+
router.put('/api/helps/details/update/:id',auth,putHelp); //?
router.delete('/api/helps/details/delete/:id',auth,deleteHelp); //?
router.get('/api/helps/details/all/pending',auth, getPendingHelpDetails); //?
router.get('/api/helps/own',auth,getUserOwnHelps);//?
router.get('/api/helps/details/own/pending',auth,getUserOwnPendingHelps);//?
router.get('/api/helps/details/own/active',auth,getUserOwnActiveHelps);//?



//SEARCH
router.post('/api/helps/search/',postHelpSearch);//?
//COMMENT 
//commentlerin hepsi resourrcesa eklendi
router.put('/api/helps/details/comment/:id',auth,uploadComment.array('files', 2),putHelpComment);    //HELP ID
router.put('/api/comments/status/:id',auth,putHelpCommentStatus); //COMMENT ID YETKİ İŞİ NASILDI
router.put('/api/helps/emergencyLevel/:id',putHelpEmergencyLevel); // HELP ID change emergencyLevel
router.get('/api/helps/details/comments/own/pending',auth,getOwnPendingComment);
router.get('/api/helps/details/comments/own/active',auth,getOwnActiveComment);
router.get('/api/helps/details/comments/allPending',auth,getAllPendingComment);
router.get('/api/helps/details/comments/allActive',auth,getAllActiveComment);



getOwnActiveComment
//CATEGORY
router.post('/api/helps/category',postCategory);
router.post('/api/helps/subcategory',postSubCategory);
router.get('/api/helps/category',getCategories);
router.get('/api/helps/subcategory',getSubCategories);
router.get('/api/helps/subcategory/:subCategoryNo',getSubCategory);
router.get('/api/helps/category/:categoryNo',getCategory);


router.post('/api/geoJson',PostGeoJson);






export default router;