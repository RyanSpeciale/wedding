import styles from '../styles/Nav.module.css';
import { Stack } from '@mui/material';
import { Button } from '@mui/material';


const Nav = () => {
    return (
        <div className={styles.container}>
            <Stack className={styles.stack} direction='row' spacing={1}>
                <Button className={styles.button}>RSVP</Button>
                <Button className={styles.button}>Wedding Details</Button>
                <Button className={styles.button}>Our Story</Button>
                <Button className={styles.button}>Wedding Registry</Button>
            </Stack>
        </div>
    );
};

export default Nav;