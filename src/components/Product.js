import { useContext, useEffect } from "react";
import Context from "../context/context";
import styles from "../styles/Product.module.css";

// a component for products
const Product = (props) => {
  const ctx = useContext(Context);

  //send the keys of props to context to initialize products object in an array
  //this code run just one time after the first render
  useEffect(() => {
    ctx.initializeProductList({
      id: props.id,
      title: props.title,
      price: Number(props.price.slice(0, props.price.length - 1)),
      image: props.image,
      number: 0,
      allPrice: 0,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.product}>
      <div
        style={{
          display: "flex",
          flexFlow: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img className={styles.photo} alt={"product"} src={props.image} />
        <h2 className={styles.title}>{props.title}</h2>
        <p className={styles.price}>{props.price}</p>
      </div>
      <button
        className={styles.add}
        onClick={() => {
          ctx.addToCart(props.id, "add_to_cart");
        }}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
