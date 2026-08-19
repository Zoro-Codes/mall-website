const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: Number,
    title: { type: String, required: true },
    brand: String,
    price: Number,
    originalPrice: Number,
    savings: Number,
    category: String,
    image: String,
    badgeText: String,
    badgeColor: String,
    discount: String,
    material: String,
    rating: Number,
    reviews: Number,
    sizes: [String],
    colors: [String],
    ethnic: Boolean,
    western: Boolean
});

module.exports = mongoose.model('Product', productSchema);