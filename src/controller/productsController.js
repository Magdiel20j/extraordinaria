const productsController = {};
import productModel from '../models/products.js'

//slect
productsController.getProducts = async (req, res) =>{
    const products = await productModel.find();
    res.json(products);

};

//insert
productsController.insertProducts = async (req, res) => {
const {name, description, price, stock} = req.body;
const newProduct = new productsModel({name, description, price, stock});
await newProduct.save();
res.json({message: 'Product save'});
};

// update
productsController.updateProducts = async (req, res) => {
    const {name, description, price, stock} = req.body;
    await productsModel.findByIdAndUpdate(
        req.params.id,
        {name, description, price, stock},
        {new: true},
    );
    res.json ({message: 'Product updated'});
};

//delete
productsController.deleteProducts = async (req, res) =>{
    await productsModel.findByIdAndDelete(req.params.id);
    res.json ({message: 'Product deleted'});
};

// select por id
productsController.getProductsById = async (req, res)=>{
    try {
        const product = await productsModel.findById(req.params.id);
        if (!product) return res.status (404).json ({message: 'product not found'});
        return res.status (200).json(product);
    } catch (error) {
        console.log('error' + error);
        return res.status(500).json({message: 'internal server error'});
    }
};

export default productsController;
