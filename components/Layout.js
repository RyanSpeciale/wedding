import Top from './Top';
import Bottom from './Bottom';


const Layout = ({ children }) => {
    return (
        <div>
            <Top/>
            <main>{ children }</main>
            <Bottom/>
        </div>
    );
};

export default Layout;