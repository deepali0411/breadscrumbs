import react from "react";
import styles from "./card.module.scss";
import { Link } from "react-router-dom";

const Card = ({ cardData }) => {
  return (
    <div className={styles.container}>
      <Link to={`/products/${cardData?.id}`} className={styles.link}>
        <div className={styles.cardContainer}>
          <img
            className={styles.image}
            src={cardData?.thumbnail}
            width={300}
            height={325}
          />
          <div className={styles.content}>
            <div className={styles.title}>{cardData?.title}</div>
            <div className={styles.price}>
              <span>Price: </span>${cardData?.price}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Card;
