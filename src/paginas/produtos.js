import { useState, useEffect } from 'react';
import Header from "../componentes/header";
import { getCategories, getProducts, getProductsFromCategoryAndQuery } from "../utils/requests";

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

    useEffect(() => {
        fetchCategories();
        fetchProducts();
    }, [])

    return (
        <div>
            <Header />
            
            <div className='d-flex mt-3'>
                <div className='d-flex flex-column flex-shrink-0 p-3 border-end'>
                    {categories && categories.map((category) => (
                        <button className='btn btn-outline-secondary mb-1' key={category.id} onClick={ () => handleClick(category.id) } >{ category.name }</button>
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