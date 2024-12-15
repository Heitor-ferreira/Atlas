import { createContext, useState, useEffect, useReducer } from "react";
import { supabase } from "../utils/supabase";

export const Context = createContext({
    items: [],
    products: [],
    loading: false,
    error: "",
    addItemToCart: () => { },
    updateItemQuantity: () => { },
    subItemToCart: () => { }


});


export default function ContextProvider({ children }) {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);




    useEffect(() => {

        async function getProducts() {
            setLoading(true);
            const { data: products, error } = await supabase.from("products").select();
            if (products.length > 0) {
                setProducts(products);
            } else {
                setError(`Fetcing products failed! ${error}`);
            }
            setLoading(false);
        }
        getProducts();

        // async function fetchProducts() {
        //     setLoading(true);
        //     const response = await fetch("https://dummyjson.com/products/category/fragrances?limit=12&select=id,thumbnail,title,price,description");
        //     if (response.ok) {
        //         const result = await response.json();
        //         setProducts(result.products);
        //     } else {
        //         setError("Fetch FAILED!");
        //     }
        //     setLoading(false);
        // }

        // fetchProducts();
    }, []);

    // SHOPPING CART

 


    function cartReducer(state, action) {

        if (action.type === "ADD_ITEM") {
            const updatedItems = [...state.items];

            const existingCartItemIndex = updatedItems.findIndex(
                (item) => item.id === action.payload.id
            );

            const existingCartItem = updatedItems[existingCartItemIndex];

            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                }
                updatedItems[existingCartItemIndex] = updatedItem;
            }

            else {
                const product = action.payload.products.find(
                    (product) => product.id === action.payload.id
                );
                updatedItems.push({
                    id: action.payload.id,
                    thumbnail: product.thumbnail,
                    title: product.title,
                    description: product.description,
                    quantity: 1,

                });
            }

            return { items: updatedItems };
        }

        if (action.type === "SUB_ITEM") {
            const updatedItems = [...state.items];

            const existingCartItemIndex = updatedItems.findIndex(
                (item) => item.id === action.payload.id
            );

            const existingCartItem = updatedItems[existingCartItemIndex];

            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    quantity: existingCartItem.quantity - 1,
                }
                updatedItems[existingCartItemIndex] = updatedItem;

                if (updatedItem.quantity < 1) {
                    updatedItems.splice(existingCartItemIndex, 1);
                } else {
                    updatedItems[existingCartItemIndex] = updatedItem;
                }

            }

            return { items: updatedItems };
        }

        if (action.type === "UPDATE_ITEM") {
            const updatedItems = [...state.items];

            const updatedItemIndex = updatedItems.findIndex(
                (item) => item.id === action.payload.id
            );

            const updatedItem = { ...updatedItems[updatedItemIndex] };

            updatedItem.quantity += action.payload.amount;

            if (updatedItem.quantity < 1) {
                updatedItems.splice(updatedItemIndex, 1);
            } else {
                updatedItems[updatedItemIndex] = updatedItem;
            }

            return { ...state, items: updatedItems };
        }

        return state;
    }

    const [cartState, cartDispatch] = useReducer(
        cartReducer,
        { items: [] }
    );

    function handleAddItemToCart(id) {
        cartDispatch({
            type: "ADD_ITEM",
            payload: { id, products, }
        });
    }

    function handleUpdateCartItemQuantity(id, amount) {
        cartDispatch({
            type: "UPDATE_ITEM",
            payload: { id, amount }
        });
    }

    function handleSubItemToCart(id) {
        cartDispatch({
            type: "SUB_ITEM",
            payload: { id, products }
        });
    }

    const ctx = {
        items: cartState.items,
        products: products,
        loading: loading,
        error: error,
        addItemToCart: handleAddItemToCart,
        updateItemQuantity: handleUpdateCartItemQuantity,
        subItemToCart: handleSubItemToCart
    };

    return <Context.Provider value={ctx}>
        {children}
    </Context.Provider>

}