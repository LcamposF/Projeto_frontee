import Header from "../componentes/header";
import { useState, useEffect } from 'react';
import { getProductsById } from "../utils/requests";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Detalhes() {
    const [product, setProduct] = useState();

    const fetchProduct = async () => {
        const productId = window.location.pathname.replace('/produtos/detalhes/', '');
        const data = await getProductsById(productId);
        setProduct(data);
        console.log(data);
    }
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3,
        },
    };

    useEffect(() => {
        fetchProduct();
    }, [])

    return (
        <div>
            <Header />
            <p>Página de Detalhes</p>
            {product && (
                <div className="">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="col-md-12 d-flex justify-content-center align-items-center m-3">
                                <img className="img-fluid" key={product.id} src={product.pictures[0].url} alt={product.thumbnail} />
                            </div>
                            <Carousel className="mb-5" responsive={responsive}>
                                {product.pictures.map((foto) => (
                                    <img
                                        key={foto.id}
                                        src={foto.url}
                                        alt={foto.url}
                                        className=""
                                        style={{ margin: '10px', maxWidth: '80%', height: 'auto' }}
                                    />
                                ))}
                            </Carousel>
                        </div>
                        <div className="col-md-6 p-5">
                            <div>
                                <span></span>
                                <div>
                                    <span className="">{product.condition}</span>
                                </div>
                                <div>
                                    <h3>{product.title}</h3>
                                </div>
                            </div>
                            <div>
                                <h3><span>R$</span>{product.price}</h3>
                                <p>Em 12x <span>{(product.price / 12).toFixed(2)}</span></p>
                            </div>
                            <div>
                                <div className="container mt-5 mb-5">
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <div className="row">
                                                <h5 className="col">Características gerais</h5>
                                            </div>
                                        </li>   
                                        {product.attributes.map((att, i) => (
                                            <li
                                            key={att.name}
                                            className="list-group-item"
                                            >
                                            <div className="row">
                                                <div className="col">
                                                { att.name }
                                                </div>
                                                <div className="col">
                                                {att.value_name}
                                                </div>
                                            </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <button className="btn btn-primary m-3">Comprar</button>
                                <button className="btn btn-secondary">Adicionar ao Carrinho</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Detalhes;