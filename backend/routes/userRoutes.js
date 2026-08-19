const express = require('express');
const User = require('../models/User');
const protect = require('../middleware/auth');
const router = express.Router();

router.post('/cart', protect, async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        const user = await User.findById(req.user);

        const itemIndex = user.cart.findIndex(item => item.productId.toString() === productId);
        if (itemIndex > -1) {
            user.cart[itemIndex].quantity = quantity; // Update quantity
        } else {
            user.cart.push({ productId, quantity }); // Add new item
        }

        await user.save();
        res.json(user.cart);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/wishlist', protect, async (req, res) => {
    try {
        const { productId } = req.body;
        const user = await User.findById(req.user);

        const index = user.wishlist.indexOf(productId);
        if (index > -1) {
            user.wishlist.splice(index, 1); 
        } else {
            user.wishlist.push(productId); 
        }

        await user.save();
        res.json(user.wishlist);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;