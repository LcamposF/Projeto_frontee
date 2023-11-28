export async function getCategories() {
    const request = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    const requestJson = await request.json();
    return requestJson;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
    const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
    const requestJson = await request.json();
    return requestJson;
}
  
export async function getProductsById(id) {
    const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
    return response.json();
}

export async function getProductsByName(name) {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${name}`);
    return response.json();
}

export async function getProducts() {
    const response = await fetch(`https://api.mercadolibre.com/items?ids=MLB3274153342,MLB4148431270,MLB4234125324,MLB3520288975,MLB3423147217,MLB4206488438,MLB3492296391,MLB3410970115,MLB3462185879,MLB3297004893,MLB3275903571,MLB3502697311,`);
    return response.json();
}

