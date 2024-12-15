import { useState, useEffect } from "react";
import { supabase } from "../utils/supabase";
import Popup from "./Popup";

export default function ButtonPopup() {
    const [products, setProducts] = useState([]); // Lista de produtos do banco
    const [selectedProduct, setSelectedProduct] = useState(null); // Produto selecionado para o popup

    // Função para buscar produtos no banco de dados
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data, error } = await supabase
                    .from('produtos') // Nome da tabela no Supabase
                    .select('*');

                if (error) throw error;
                setProducts(data); // Armazena os produtos no estado
            } catch (error) {
                console.error("Erro ao buscar produtos:", error.message);
            }
        };

        fetchProducts();
    }, []);

    // Função para abrir o popup com o produto selecionado
    const handleSaibaMais = (product) => {
        setSelectedProduct(product);
    };

    // Função para fechar o popup
    const closePopup = () => {
        setSelectedProduct(null);
    };

    const productQuantity = products.length;

    return (
        <div className="product-list">
            <h2>Lista de Produtos</h2>

            <div className="product-container">
                {productQuantity > 0 ? (
                    products.map((product) => (
                        <div className="product-item" key={product.id}>
                            <img src={product.imagem} alt={product.nome} className="product-image" />
                            <h3>{product.nome}</h3>
                            <button 
                                className="saiba-mais-button" 
                                onClick={() => handleSaibaMais(product)}
                            >
                                Saiba Mais
                            </button>
                        </div>
                    ))
                ) : (
                    <p>Sem produtos disponíveis!</p>
                )}
            </div>

            {selectedProduct && (
                <Popup 
                    product={selectedProduct} 
                    onClose={closePopup} 
                />
            )}
        </div>
    );
}
