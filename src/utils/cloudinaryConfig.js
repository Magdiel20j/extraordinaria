import multer from 'multer';
import {V2 as cloudinaryStorage} from 'multer-storage-cloudinary';

import {config} from '../../config.js';

cloudinaryStorage.config({
    cloud_name: config.cloudinary.cloudinary_name,
    api_key: config.cloudinary.cloudinary_api_key,
    api_secret: config.cloudinary.cloudinary_api_secret,
});

const storage = new cloudinaryStorage({
    cloudinary,
    params: {folder: 'Dynamic folders', allowed_formats:['jpg','jpeg','png','pdf']},
});

const upload = multer({storage});

export default upload;