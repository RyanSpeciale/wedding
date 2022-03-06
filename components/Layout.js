import Footer from "./Footer";
import Nav from "./Nav";
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <Nav />
            <main>{ children }</main>
            <Footer />
        </div>
    );
};

export default Layout;