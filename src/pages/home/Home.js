import react, { useEffect, useState } from "react";
import { getProducts } from "../../actions";

import Cards from "../../components/cards/Cards";
import styles from "./home.module.scss";
import { Link } from "react-router-dom";

const Home = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductsFromAPi = async () => {
      const data = await getProducts();
      setProducts(data?.products.slice(0, 6));
    };
    getProductsFromAPi();
  }, []);

  return (
    <>
      {products.length === 0 ? (
        <div className={styles.container}>Loading...</div>
      ) : (
        <div className={styles.container}>
          <h2 className={styles.title}>🔥 Trending Products</h2>
          <Cards products={products} />
          <Link to="/products">
            <button className={styles.button}>View All Products</button>
          </Link>
        </div>
      )}
    </>
  );
};
export default Home;
