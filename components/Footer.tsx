import ExistingPost from "./ExistingPost";
import styles from "./Footer.module.css";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ExistingPost />
      <Logo large={false} size={40} />
      Basically facebook without accounts, so you don&#39;t know who to stalk!
    </footer>
  );
};

export default Footer;
