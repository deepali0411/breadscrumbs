import react, { useEffect, useState } from "react";

import Card from "../card/Card";

import { getProducts } from "../../actions";
import styles from "./cards.module.scss";

const Cards = ({products}) => {

  return (
      <div className={styles.cardsContainer}>
        {products?.map((data) => {
          return <Card key={data?.id} cardData={data} />;
        })}
    </div>
  );
};
export default Cards;
