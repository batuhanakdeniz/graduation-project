import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../server/upload")
      },
      filename: function (req, file, cb) {
        const formattedFileName = file.originalname.split(' ').join('-');
        cb(null, "Batu-" + file.fieldname + '-' + Date.now() + '-' + formattedFileName)
      }
})



export const upload = multer({
    storage: storage, 
    limits: {
        fileSize: 1024 * 1024 *8 //For 8 mb filesize limit
    },
    /*
    fileFilter(req, file, callback){
        if(!file.originalname.match(/\.(jpg|png|jpeg|JPG|PNG|JPEG)$/)){
            return callback(new Error('File format is incorrect!'));
        }
        callback(undefined, true);
    }*/
})

