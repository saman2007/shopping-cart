import styles from "../styles/Footer.module.css";

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.text}>{props.text}</h2>
    </footer>
  );
};

export default Footer;
