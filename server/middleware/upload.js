const path = require('path');
const multer = require('multer');

const storage =  multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'uploads/')
    },
    filename: (req, file, callback) => {
        let extension = path.extname(file.originalname);
        callback(null, new Date().getTime() + extension);
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 2
    },
    fileFilter: async (req, file, callback) => {
        const fileMimeType = file.mimetype;
        console.log(`mimetype: ${fileMimeType}`);
        if ( 
            file.mimetype === 'image/png' ||
            file.mimetype === 'image/jpeg' ||
            file.mimetype === 'video/mp4'
            ) {
                if (file.size > 1024 * 1024 * 2) {
                    return json({
                        message: 'File too large!'
                    })
                } else {
                    callback(null, true);
                }
        } else {
            console.log('Only jpg & png files are supported!');
            callback(null, false);
        };
    }
});

module.exports = upload;