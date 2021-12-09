import { useState, useContext } from "react";
import styles from "../styles/ProductInCart.module.css";
import Context from "../context/context";

//a component to for products in cart
const ProductInCart = (props) => {
  //a state to render the component if props.number changed to upgrade the information
  const [number, setNumber] = useState(props.number);
  const ctx = useContext(Context);
  return (
    <div className={styles.product}>
      <div>
        <img className={styles.image} src={props.image} alt={props.alt} />
      </div>
      <div
        style={{
          display: "flex",
          flexFlow: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
        }}
      >
        <p>name: {props.title}</p>
        <p>price: {props.price + "$"}</p>
        <p>number: {props.number}</p>
        <p>all price: {props.allPrice}</p>
        {/* an input to change the number of a product in cart */}
        <input
          type="number"
          className={styles.change_number}
          min={0}
          value={number}
          /* if the calue of input changed, update the value and update the products in context */
          onChange={(e) => {
            setNumber(e.target.value);
            ctx.addToCart(props.id, "change_cart", e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default ProductInCart;
