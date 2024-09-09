import mongoose, { mongo } from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
},
    price:{
        type: Number,
        require: true
},  image:{
        type: String,
        require: true
},

},{
    timestamps: true, //created at and updated at fields
});

const product = mongoose.model('Product',productSchema)

export default Product;