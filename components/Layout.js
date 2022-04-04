import Top from './Top';
import Bottom from './Bottom';


const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <Top/>
            <main>{ children }</main>
            <Bottom/>
        </div>
    );
};

export default Layout;