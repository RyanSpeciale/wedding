import Details from '../components/Details';
import { Box } from 'grommet';
import Slides from '../components/Slides';
import styles from '../styles/index.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Box direction='row-responsive' gap='4cm' responsive={true} className={styles.box}>
        <Details />
        <Slides />
      </Box>
    </div>
  );
};

export default Home;


