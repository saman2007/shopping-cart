import { useContext } from "react";
import Context from "../context/context";
import styles from "../styles/CartModal.module.css";
import ProductInCart from "./ProductInCart";

// the component is for the modal and its products

const CartModal = (props) => {
  //using context
  const ctx = useContext(Context);

  //mapping the product list in context and create product in cart
  const products = ctx.productsList
    .filter((value) => value.number > 0)
    .map((value) => (
      <ProductInCart
        image={value.image}
        alt="image"
        title={value.title}
        price={value.price}
        number={value.number}
        allPrice={value.allPrice + "$"}
        key={value.id}
        id={value.id}
      />
    ));

  return (
    <div className={styles.modal_container}>
      <div className={styles.modal_card}>
        <h2>cart</h2>
        <div className={styles.products}>
            {products.length > 0 ? products : <p>no added product</p>}
        </div>
        <p>all price: {ctx.allPrice + "$"}</p>
        <div className={styles.options}>
          <button className={styles.cancel} onClick={props.close}>
            cancel
          </button>
          <button className={styles.buy}>buy</button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
