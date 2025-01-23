import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, files, callback) {
        callback(null, './uploads'); 
    },
    filename: function (req, files, callback) {
        callback(null, Date.now() + '-' + files.originalname); 
    }
});

const upload = multer({ storage });

export default upload;
