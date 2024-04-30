import react, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { productById } from "../../actions";
import styles from "./productDetail.module.scss";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const getProductById = async (id) => {
      const data = await productById(id);
      console.log("data: ", data);
      setProduct(data);
    };
    getProductById(id);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.images}>
        <img
          className={styles.image}
          src={product?.thumbnail}
          style={{ width: "60rem", height: "45rem" }}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>
            {product?.title}
        </div>
        <div className={styles.brand}>
            {product?.brand}
        </div>
        <div className={styles.description}>
            {product?.description}
        </div>
        <div className={styles.price}>
            ${product?.price}
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
