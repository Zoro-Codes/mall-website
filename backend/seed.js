const mongoose = require('mongoose');
require('dotenv').config();
const Product = require('./models/Product');

const products = [
    { id: 1, badgeText: "NEW ARRIVAL", badgeColor: "bg-green-600", discount: "-32%", image: "https://res.cloudinary.com/dquki4xol/image/upload/v1776077841/Square_Neck_Textured_Waist-Cinching_Maroon_Dress_vheg55.webp", brand: "AURELIA", title: "Cotton Blend Co-ord Set", material: "100% Cotton", rating: 4, reviews: 128, price: 1299, originalPrice: 1899, savings: 300, category: "women", ethnic: false, western: true, sizes: ['XS', 'S', 'M', 'L', 'XL'], colors: ['#8B4513', '#DC143C', '#191970', '#000000'] },
    { id: 2, badgeText: "SALE", badgeColor: "bg-orange-500", discount: "-33%", image: "https://res.cloudinary.com/dquki4xol/image/upload/v1776078520/images_6_vfn6rc.jpg", brand: "BIBA", title: "Embroidered Frock", material: "Georgette", rating: 4, reviews: 75, price: 2150, originalPrice: 3200, savings: 1050, category: "women", ethnic: false, western: true, sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['#FF69B4', '#4682B4'] },
    { id: 3, badgeText: "BESTSELLER", badgeColor: "bg-black", discount: "-31%", image: "https://res.cloudinary.com/dquki4xol/image/upload/v1776077580/images_4_rs50b4.jpg", brand: "FABINDIA", title: "Slim Fit Stretch Jeans", material: "Cotton Blend", rating: 4, reviews: 89, price: 899, originalPrice: 1299, savings: 400, category: "men", ethnic: false, western: true, sizes: ['28', '30', '32', '34', '36'], colors: ['#1E90FF', '#000080'] },
    { id: 4, badgeText: "TRENDING", badgeColor: "bg-[#e84c3d]", discount: "-32%", image: "https://res.cloudinary.com/dquki4xol/image/upload/v1776077580/images_5_f8olir.jpg", brand: "MANYAVAR", title: "Tropical Rayon Camp Shirt", material: "Rayon", rating: 4, reviews: 204, price: 749, originalPrice: 1099, savings: 350, category: "men", ethnic: false, western: true, sizes: ['S', 'M', 'L', 'XL'], colors: ['#000000', '#FFFFFF'] },
    { id: 5, badgeText: "NEW ARRIVAL", badgeColor: "bg-green-600", discount: "-22%", image: "https://res.cloudinary.com/dquki4xol/image/upload/v1776152849/kidsno.1_y5j49b.png", brand: "NARI KIDS", title: "Kids Dungaree Playsuit", material: "Super Cotton", rating: 4, reviews: 42, price: 599, originalPrice: 799, savings: 200, category: "kids", ethnic: true, western: true, sizes: ['2Y', '3Y', '4Y', '5Y'] },
    { id: 6, badgeText: "SALE", badgeColor: "bg-orange-500", discount: "-28%", image: "https://res.cloudinary.com/dquki4xol/image/upload/v1776078520/k2ujc_512_yf0fzu.webp", brand: "W FOR WOMAN", title: "Palazzo Sharara Set", material: "Silk Blend", rating: 4, reviews: 56, price: 1799, originalPrice: 2499, savings: 700, category: "women", ethnic: true, western: false, sizes: ['XS', 'S', 'M', 'L'], colors: ['#FF1493', '#800080'] },
    { id: 7, badgeText: "TRENDING", badgeColor: "bg-[#e84c3d]", discount: "-31%", image: "https://res.cloudinary.com/dquki4xol/image/upload/v1776077580/images_3_prsjj5.jpg", brand: "LEVI'S", title: "Flared Denim Jeans", material: "90% Denim", rating: 4, reviews: 152, price: 1499, originalPrice: 2199, savings: 700, category: "kids", ethnic: false, western: true, sizes: ['26', '28', '30', '32'] },
    { id: 8, badgeText: "NEW ARRIVAL", badgeColor: "bg-green-600", discount: "-34%", image: "https://res.cloudinary.com/dquki4xol/image/upload/v1776078689/three-elegant-mens-suits-different-colors-perfect-business-formal-events-highquality-fabrics-tailoring_191095-85761_ilaw9v.avif", brand: "MANYAVAR", title: "Bandhgala Nehru Jacket", material: "Silk", rating: 4, reviews: 67, price: 3299, originalPrice: 4999, savings: 1700, category: "men", ethnic: true, western: false, sizes: ['38', '40', '42', '44'] }
];

const seedDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ Connected to MongoDB');

        await Product.deleteMany();
        console.log('🗑️  Cleared old products');

        await Product.insertMany(products);
        console.log('📦 Successfully seeded your products!');

        process.exit();
    } catch (error) {
        console.error('❌ Error seeding data:', error);
        process.exit(1);
    }
};

seedDatabase();