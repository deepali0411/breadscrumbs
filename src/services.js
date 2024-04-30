const getProducts = "https://dummyjson.com/products";
const getProductById = (id) => `${getProducts}/${id}`;

export default {
    getProducts,
    getProductById,
}