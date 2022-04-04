import Details from '../components/Details';
import { Box } from 'grommet';
import Slides from '../components/Slides';
import styles from '../styles/index.module.css';

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


