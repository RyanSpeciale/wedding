import { Box } from 'grommet';
import styles from '../styles/home.module.css';
import Deets from '../components/Deets';


const Home = () => {
  return (
    <div className={styles.container}>
      <Box>
        <Deets/>
      </Box>
    </div>
  );
};

export default Home;


