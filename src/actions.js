import Services from "./services";

export const getProducts = async() => {
  return await(fetch(Services.getProducts, {method: "GET"})
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.error(err)))
};

export const productById = async(id) => {
  return await(fetch(Services.getProductById(id), {method: "GET"})
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.error(err)))
};
