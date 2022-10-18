import styles from "./navbar.module.css";
import img from "./../../assets/beatroute-logo.e4b5ec19e58c13d9b147.jpg";
const Navbar = () => {
  return (
    <header>
      <nav>
        <div className={styles.logo}>
          <img src={img} alt="" />
        </div>
        <div className={styles.links}>
          <a href="#">Home</a>
          <a href="#">Benefits</a>
          <a href="#">Support</a>
          <a href="#">Admin Login</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
