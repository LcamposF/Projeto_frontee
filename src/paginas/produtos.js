import { useState, useEffect } from 'react';
import Header from "../componentes/header";
import { getCategories, getProductsFromCategoryAndQuery } from "../utils/requests";

function Produtos() {
    const [categories, setCategories] = useState();
    const [products, setProducts] = useState();

    const fetchCategories = async () => {
        const data = await getCategories();
        setCategories(data);
    }
    const handleClick = async (id) => {
        const data = await getProductsFromCategoryAndQuery(id);
        setProducts(data.results);
        console.log(products);
    }

    useEffect(() => {
        fetchCategories();
    }, [])

    return (
        <div>
            <Header />
            <p>Página de produtos</p>
            <div className='d-flex'>
                <div className='d-flex flex-column flex-shrink-0 p-3 text-white bg-dark'>
                    {categories && categories.map((category) => (
                        <button className='btn btn-secondary' key={category.id} onClick={ () => handleClick(category.id) } >{ category.name }</button>
                    ))}
                </div>
                <div>
                    {products && products.map((produto) => (
                        <div key={produto.id}>
                            <a href={`produtos/detalhes/${produto.id}`} ><h4>{produto.title}</h4></a>
                            
                            <img src={produto.thumbnail} alt={produto.title} />
                            <p><i>R$</i>{produto.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Produtos;