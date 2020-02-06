const path = require("path");
const multer = require('multer');

const storage = multer.diskStorage({
    destination: './public/image/',
    filename: (req, file, cb) => {
        const exention = file.originalname.split(".");
        cb(null, req.params.id + "." + exention.pop());
    }
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        checkFileType(file, cb);
    }
}).single('avatar');

const checkFileType = (file, cb) => {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images Only!');
    }
};

module.exports = upload;
