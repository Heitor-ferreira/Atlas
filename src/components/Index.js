import { useContext, useEffect, useRef, useState } from "react";
import Product from "./Card";
import { CircularProgress } from "@mui/material";
import { Context } from "../context/Context";
import styles from "./Shop.module.css";
import FavBut from "./FavBut";
import "./Main.css";
// import "./pop.css";

export default function Shop() {

    const { products, loading, error } = useContext(Context);


    const searchInput = useRef("");
    const [filteredItems, setfilteredItems] = useState([]);
    

    useEffect(() => {
        if(products) {
            setfilteredItems(products);
        }
    }, [products]);

    function handleSearch() {
        const term = searchInput.current.value.toLowerCase();
        setfilteredItems(
            products.filter((item) => item.title.toLowerCase().includes(term))
        );
    }

    function clearSearch() {
        searchInput.current.value = "";
        setfilteredItems(products);
    }


    return (
        <div className="index">
            <FavBut />


            <div className={styles.search_container}>
                <div className={styles.search_box}>
                    <input
                    ref={searchInput}
                    className={styles.search_input}
                    type="text"
                    placeholder="Pesquisar..."
                    onChange={handleSearch}/>

                    <button className={styles.search_clear} onClick={clearSearch}>Limpar</button>
                </div>
            </div>

            <ul id="card-list">
                {error && <p>{error}</p>}
                {loading &&
                    <div id="loading">
                        <CircularProgress size="10rem" color="inherit" />
                        <p>Loading products...</p>
                    </div>
                }
                {!loading && products && filteredItems.length > 0 ? (
                    filteredItems.map((product) => (
                        <li key={product.id}>
                            <Product {...product} />
                        </li>
                    ))
                ) : (
                    <p>Not Found!</p>
                )}
            </ul>


        </div>
    );
}