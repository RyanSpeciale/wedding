import styles from '../styles/home.module.css';
import Details from '../components/Details';
import { Box } from 'grommet';
import Slides from '../components/Slides';


const Home = () => {
  return (
    <div className={styles.container}>
      <Box direction='row' gap='4cm'  className={styles.box}>
        <Details />
        <Slides />
      </Box>
    </div>
  );
};

export default Home;


