import mongoose, { Schema } from "mongoose";

const pedalModel = new Schema({
    name: String,
    category: Array, 
    brand: String,
    description: String,
    specifications: Object,
    isAvailable: Boolean,
    amount: Number,
    price: Number,
    createdAt: Date
});

const Pedal = mongoose.model('pedalsList', pedalModel);

export default Pedal