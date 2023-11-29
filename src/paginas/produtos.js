import { useState, useEffect } from 'react';
import Header from "../componentes/header";
import { getCategories, getProducts, getProductsByName, getProductsFromCategoryAndQuery } from "../utils/requests";

function Produtos() {
    const [categories, setCategories] = useState();
    const [products, setProducts] = useState();

    const fetchCategories = async () => {
        const data = await getCategories();
        setCategories(data);
    }
    const fetchProducts = async () => {
        const data = await getProducts();
        setProducts(data.map(item => item.body));
    }

    const handleClick = async (id) => {
        const data = await getProductsFromCategoryAndQuery(id);
        setProducts(data.results);
        console.log(products);
    }

    const search = async () => {
        const texto = document.getElementById('campoBusca').value;
        const data = await getProductsByName(texto);
        setProducts(data.results);
    }

    useEffect(() => {
        fetchCategories();
        fetchProducts();
    }, [])

    return (
        <div>
            <Header />
            <div className="row justify-content-center mb-4 mt-2">
                <div className="col-md-6 mb-2">
                    <form className="d-flex align-items-center">
                        <div className="form-group mb-0 flex-grow-1">
                            <input type="text" className="form-control" id="campoBusca" placeholder="Digite sua busca" />
                        </div>
                        <button onClick={ search } type="button" className="btn btn-dark">Buscar</button>
                    </form>
                </div>
                <hr />
            </div>
            <div className='d-flex mt-3'>
                <div className='d-flex flex-column flex-shrink-0 p-3 border-end'>
                    {categories && categories.map((category) => (
                        <button className='btn btn-outline-dark mb-1' key={category.id} onClick={ () => handleClick(category.id) } >{ category.name }</button>
                    ))}
                </div>
                <div className="container">
                <div className="row">
                    {products && products.map((produto) => (
                        <div className="col-md-3 mb-4" key={produto.id}>
                            <div className="card">
                                <img
                                    src={produto.thumbnail}
                                    alt={produto.title}
                                    className="card-img-top img-fluid align-self-center"
                                    style={{ width: '150px', objectFit: 'cover' }}
                                />
                                <div className="card-body border-top">
                                    <a href={`produtos/detalhes/${produto.id}`}><h6 className="card-title">{produto.title}</h6></a>
                                    <p className="card-text">R${produto.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </div>
    )
}

export default Produtos;