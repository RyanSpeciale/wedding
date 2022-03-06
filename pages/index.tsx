import styles from '../styles/home.module.css'
import { Typography } from '@mui/material';



const Home = () => {
  return (
    <div>
      <Typography className={styles.page} variant='h3'>This is the main page</Typography>
    </div>
  );
};

export default Home;


