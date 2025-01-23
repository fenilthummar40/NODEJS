import mongoose from "mongoose";

const prodctSchema = new mongoose.Schema({
    name:{type: String, required:true},
    description:{type: String, required:true},
    price:{type:Number, required:true},
    image:{type:Array, required:true},
    category:{type:String, required:true},
    subCategory:{type:String, required:true},
    size: { type: Array, required: false, default: [] },

    bestseller:{type:Boolean},
    date:{type:Number ,required:true}
})

const productModel = mongoose.models.product || mongoose.model("product",prodctSchema);

export default productModel