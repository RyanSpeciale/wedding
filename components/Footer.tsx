import { Typography } from "@mui/material";
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
            <Typography className={styles.footer}>Made with <span role="img" aria-label="revolving hearts">💗</span> by Ryan Speciale with the help of my Bride</Typography>   
        </div>
    );
};

export default Footer;