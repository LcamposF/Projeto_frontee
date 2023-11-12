import Header from "../componentes/header";
import { useState, useEffect } from 'react';
import { getProductsById } from "../utils/requests";

function Detalhes() {
    const [product, setProduct] = useState();

    const fetchProduct = async () => {
        const productId = window.location.pathname.replace('/produtos/detalhes/', '');
        const data = await getProductsById(productId);
        setProduct(data);
        console.log(data);
    } 
    useEffect(() => {
        fetchProduct();
    }, [])

    return (
        <div>
            <Header />
            <p>Página de Detalhes</p>
            {product && (
                <div>
                    <h1>{product.title}</h1>
                    {product.pictures.map((foto) => (
                        <img key={foto.id} src={foto.url} alt={foto.url} ></img>
                    ))}
                    <div>
                        <h3>Atributos</h3>
                        {product.attributes.map((att) => (
                            <div key={att.id}>
                                <span>{att.name} - </span>
                                <span>{att.value_name}</span>
                            </div>
                        ))}
                    </div>
                    <p></p>
                </div>
            )}
        </div>
    )
}

export default Detalhes;