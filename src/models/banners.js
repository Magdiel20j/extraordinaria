import { Schema } from "mongoose";

const bannerSchema = Schema({
    title:{type:String},
    subtitle:{type:String},
    image:{type:String},
    public_id: {type:String},
}, {
    Timestamps : true,
    strict: false,
});

export default model('Banners', bannerSchema);