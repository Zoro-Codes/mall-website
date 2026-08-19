import { createContext, useState, useContext, useEffect } from "react";

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });
    
    const [wishlist, setWishlist] = useState(() => {
        const savedWishlist = localStorage.getItem('wishlist');
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    const getAuthHeaders = () => {
        const token = localStorage.getItem('token');
        return {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        };
    };

    const addToCart = async (product) => {
        let newQuantity = 1;

        setCart((prevCart) => {
            const existingItem = prevCart.find(item => item.id === product.id);
            if (existingItem) {
                newQuantity = existingItem.quantity + 1;
                return prevCart.map(item => 
                    item.id === product.id ? { ...item, quantity: newQuantity } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });

        const token = localStorage.getItem('token');
        if (token) {
            try {
                await fetch('http://localhost:5000/api/user/cart', {
                    method: 'POST',
                    headers: getAuthHeaders(),
                    body: JSON.stringify({ productId: product.id, quantity: newQuantity })
                });
            } catch (error) {
                console.error("Failed to save cart to database", error);
            }
        }
    };

    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };

    const updateQuantity = async (productId, newQuantity) => {
        if (newQuantity < 1) {
            removeFromCart(productId);
            return;
        }

        setCart(cart.map((item) => 
            item.id === productId ? { ...item, quantity: newQuantity } : item
        ));

        const token = localStorage.getItem('token');
        if (token) {
            try {
                await fetch('http://localhost:5000/api/user/cart', {
                    method: 'POST',
                    headers: getAuthHeaders(),
                    body: JSON.stringify({ productId, quantity: newQuantity })
                });
            } catch (error) {
                console.error("Failed to update quantity in database", error);
            }
        }
    };

    const clearCart = () => setCart([]);

    const toggleWishlist = async (product) => {
        setWishlist((prevWishlist) => {
            const exists = prevWishlist.find(item => item.id === product.id);
            if (exists) { 
                return prevWishlist.filter(item => item.id !== product.id);
            }
            return [...prevWishlist, product];
        });


        const token = localStorage.getItem('token');
        if (token) {
            try {
                await fetch('http://localhost:5000/api/user/wishlist', {
                    method: 'POST',
                    headers: getAuthHeaders(),
                    body: JSON.stringify({ productId: product.id })
                });
            } catch (error) {
                console.error("Failed to sync wishlist", error);
            }
        }
    };

    const moveToCart = (product) => {
        addToCart(product);

        setWishlist(prev => prev.filter(item => item.id !== product.id));

        const token = localStorage.getItem('token');
        if (token) {
            fetch('http://localhost:5000/api/user/wishlist', {
                method: 'POST',
                headers: getAuthHeaders(),
                body: JSON.stringify({ productId: product.id })
            }).catch(err => console.error(err));
        }
    };

    const isInWishlist = (productId) => {
        return wishlist.some(item => item.id === productId);
    };

    return (
        <ShopContext.Provider value={{
            cart, wishlist, addToCart, removeFromCart, updateQuantity, clearCart,
            toggleWishlist, moveToCart, isInWishlist
        }}>
            {children}
        </ShopContext.Provider>
    );
};

export const useShop = () => useContext(ShopContext);