import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

        if (!name || !description || !price || !category) {
            return res.json({ success: false, message: "Missing required fields" });
        }

        let parsedSize = sizes;

        try {
            parsedSize = sizes ? JSON.parse(sizes) : null;
        } catch (err) {
            console.error("Invalid sizes format:", err.message);
            return res.json({ success: false, message: "Invalid sizes format. Please provide valid JSON." });
        }


        
        // Handle file uploads
        const image1 = req.files?.image1?.[0] || null;
        const image2 = req.files?.image2?.[0] || null;
        const image3 = req.files?.image3?.[0] || null;
        const image4 = req.files?.image4?.[0] || null;

        const images = [image1, image2, image3, image4].filter((item) => item !== null);

        // Upload images to Cloudinary
        let imagesUrl = [];
        if (images.length > 0) {
            imagesUrl = await Promise.all(
                images.map(async (item) => {
                    let result = await cloudinary.uploader.upload(item.path, { resource_type: "image" });
                    return result.secure_url;
                })
            );
        }

        // Create product data
        const productData = {
            name,
            description,
            category,
            price: Number(price),
            subCategory,
            bestseller: bestseller === "true",
            size: parsedSize,
            image: imagesUrl,
            date: Date.now(),
        };

        console.log("Product Data:", productData);

        // Save the product to the database
        const product = new productModel(productData);
        await product.save();

        return res.json({ success: true, message: "Product added successfully", imagesUrl });
    } catch (error) {
        console.error("Error in addProduct:", error.message);
        return res.json({ success: false, message: error.message });
    }
};





// function for list product
const listProduct = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.json({ success: true, products })
    } catch (error) {
        console.error(error);
        return res.json({ success: false, message: error.message });
    }
}


// function for remove product
const removeProduct = async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "product Remove" })
    } catch (error) {
        console.error(error);
        return res.json({ success: false, message: error.message });
    }
}   


// function for single product
const singleProduct = async (req, res) => {
    try {
        const { productId } = req.body
        const product = await productModel.findById(productId)
        res.json({ success: true, product })
    } catch (error) {
        console.error(error);
        return res.json({ success: false, message: error.message });
    }
}

export { addProduct, listProduct, removeProduct, singleProduct }