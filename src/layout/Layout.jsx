import { Link } from "react-router-dom";
import { PiShoppingCartBold } from "react-icons/pi";
import { useCart } from "../Conext/CartContext";
import styles from "./Layout.module.css";

function Layout({ children }) {
  const [state] = useCart();
  return (
    <>
      <header className={styles.header} >
        <Link to="/products">Front Store</Link>
        <Link to="/checkout">
        <div>
          <PiShoppingCartBold />
          {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Bakhtiar Mahmoodi</p>
      </footer>
    </>
  );
}

export default Layout;
