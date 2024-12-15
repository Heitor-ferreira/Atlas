import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import { useContext } from "react";
import Cart from "./Cart";
import "./Favorite.css";

export default function Checkout() {

    const { items } = useContext(Context);

    const Quantity = items.length;

    return (
        <div className="favorite">
            <div className="items">
                <h1>Lista de Favoritos</h1>

                {/* id para css */}

                <div className="favorite-list" >
                    {Quantity > 0 ? (
                        items.map((product) => (
                            <div classNname="favorite-item" key={product.id}>
                                <Cart {...product} />
                            </div>
                        ))
                    ) : (
                        <p>Sem favoritos</p>
                    )}
                </div>

                <Link to="/">
                    <button id="return-button">Voltar</button>
                </Link>
            </div>
        </div>
    );
}