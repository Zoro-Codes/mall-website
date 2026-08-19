import { createContext, useState, useContext, Children } from "react";

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(item => item.id === product.id)
            if(existingItem){
                return prevCart.map(item => 
                    item.id === product.id ? { ...item, quantity: item.quantity + 1} : item
                );
            }
            return [...prevCart, { ...product, quantity: 1}];
        })
    }

    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    }

    const updateQuantity = (productId , newQuantity) => {
        console.log(`{productId}-{newQuantity}`)
        if(newQuantity < 1){
            removeFromCart(productId)
            return;
        }

        // const updatedCart = cart.map((item) => {
        //     if(ite)
        // })
        setCart(prevCart = prevCart.map(
            item => item.id === productId ? {...item, quantity: newQuantity} : item))
    }

    const clearCart = () => setCart([]);

    const toggleWishlist = (product) => {
        setWishlist((prevWishlist) => {
            const exists = prevWishlist.find(item => item.id === product.id);

            if(exists){ 
                return prevWishlist.filter(item => item.id !== product.id);
            }

            return [...prevWishlist, product];
        });
    }

    const moveToCart = (product) => {
        addToCart(product);
        setWishlist(prev => prev.filter(item => item.id !== product.id))
    }

    const isInWishlist = (productId) => {
        return wishlist.some(item => item.id === productId);
    }

    return(
        <ShopContext.Provider value = {{
            cart, wishlist, addToCart, removeFromCart, updateQuantity, clearCart,
            toggleWishlist, moveToCart, isInWishlist
        }}>
            {children}
        </ShopContext.Provider>
    )
}

export const useShop = () => useContext(ShopContext);