import react, {useState, useEffect} from "react";
import { getProducts } from "../../actions";

import Cards from "../../components/cards/Cards";
import styles from "./products.module.scss";

const Products = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductsFromAPi = async () => {
      const data = await getProducts();
      setProducts(data?.products);
    };
    getProductsFromAPi();
  }, []);

  return (
    <>
    {products.length === 0 ? <div>Loading...</div> : (
    <div className={styles.container}>
      <Cards products={products} />
    </div>
  )}
  </>);
};
export default Products;
