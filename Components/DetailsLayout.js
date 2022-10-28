import Footer from "./Footer";
import Menu from "./Menu";
import styles from "../styles/DetailsLayout.module.css";
function DetailsLayout({ children }) {
  return (
    <div>
      <Menu></Menu>
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}

export default DetailsLayout;
