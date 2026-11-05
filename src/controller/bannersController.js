import bannerModel from '../models/banners.js';
import { v2 as cloudinary } from 'cloudinary';

const bannerController = {};

bannerController.getAllBanners = async (req, res)=> {
    try {
        const banners = await bannerModal.find();
        return res.status (200).json(banners);
    } catch (error) {
        return res.status (500).json({message: 'internal server error'});
    }
};

bannerController.insertBanner = async (req, res) => {
    try {
        const{title,subtitle} = req.body;
        const newBanner = new bannerModel({
            title,
            subtitle,
            image: req.file.path,
            public_id: req. file. filename,
        });
        await newBanner.save();
        return res.status (200).json ({message: 'Banner saved'});
    } catch (error) {
        return res.status (500).json ({message: 'internal server error'});
    }
};

bannerController.deleteBanner = async (req, res) => {
    try {
        const bannerFound = await bannerModel.findById(req.params.id);
        await cloudinary.uploader.destroy(bannerFound.public_id);
        await bannerModel.findByIdAndDelete(req.params.id);
        return res.status (200).json ({message:'Banner deleted'});
    } catch (error) {
        return res.status (500).json ({message: 'internal server error'});
    }
};

bannerController.updateBanners = async (req, res) => {
    try {
        const {title,subtitle} = req.body;
        const bannerFound = await bannerModel.findById(req.params.id);
        const updatedData = {title,subtitle};

        if(req.file){
            await cloudinary.uploader.destroy(bannerFound.public_id);
            updatedData.image = req.file.filename;
        }
        await bannerModel.findByIdAndUpdate(req.params.id, updatedData,{new: true});
        return res.status (200).json ({message: 'Banner update'});
    } catch (error) {
        return res.status(300).json ({message: 'internal server error'});
    }
};

export default bannerController;