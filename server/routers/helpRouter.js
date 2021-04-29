import express from "express";
import {getHelp, createHelp,getHelpLocations,getHelpLocation,getHelpBasics,getHelpBasic, getHelpDetail, getHelpDetails, postHelpImage, postHelpImageDENEME} from '../controllers/helpController.js'
import {auth} from "../middleware/auth.js";
import multer from "multer";
const router = express.Router();

const upload = multer({
    dest: 'upload',
    limits: {
        fileSize: 1024 * 1024 *5 //For 5 mb filesize limit
    },
    fileFilter(req, file, callback){
        if(!file.originalname.match(/\.(jpg|png|jpeg|JPG|PNG|JPEG)$/)){
            return callback(new Error('File format is incorrect!'));
        }
        callback(undefined,true);
    }
})
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
router.post('/api/file',upload.single('upload'),postHelpImageDENEME);


export default router;