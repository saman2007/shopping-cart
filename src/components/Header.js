import { useContext } from "react";
import ReactDOM from "react-dom";
import Context from "../context/context";
import styles from "../styles/Header.module.css";
import CartModal from "./CartModal";

//header component
const Header = () => {
  const ctx = useContext(Context);

  return (
    <header className={styles.header}>
      {/* if state open is true, place Cart modal in modal place using portal */}
      {ctx.open
        ? ReactDOM.createPortal(
            <CartModal
              close={() => {
                ctx.setOpen(false);
              }}
            />,
            document.getElementById("modal_place")
          )
        : ""}
      <h1 className={styles.title}>a react shopping cart project</h1>
      {/* if user clicked cart icon, set open true */}
      <div>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            ctx.setOpen(true);
          }}
          className={styles.cart}
        >
          <i className={`fas fa-shopping-cart ${styles.cart_icon}`}></i>
          {/* span to show how many products are in cart */}
          <span className={styles.added_products_number}>
            {ctx.allAddedToCart}
          </span>
        </a>
      </div>
    </header>
  );
};

export default Header;
