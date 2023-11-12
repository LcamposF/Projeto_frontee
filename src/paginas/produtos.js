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
            {categories && categories.map((category) => (
                <button key={category.id} onClick={ () => handleClick(category.id) } >{ category.name }</button>
            ))}
            {products && products.map((produto) => (
                <div key={produto.id}>
                  <a href={`produtos/detalhes/${produto.id}`} ><h4>{produto.title}</h4></a>
                  
                  <img src={produto.thumbnail} alt={produto.title} />
                  <p><i>R$</i>{produto.price}</p>
                </div>
            ))}
            <button type='button'></button>
        </div>
    )
}

export default Produtos;