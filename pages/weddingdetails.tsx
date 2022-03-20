import styles from '../styles/details.module.css'
import { Tabs, Tab } from 'grommet';
import { Box } from 'grommet';

const weddingdetails = () => {
   
   
    return (
        <div className={styles.container}>
            <Tabs margin='medium' color='black' className={styles.tabcontainer}>
                <Tab title='The Ceremony' color='black'>
                    <Box>

                    </Box>
                </Tab>
                <Tab title='The Reception' color='black'>
                    <Box>

                    </Box>
                </Tab>
                <Tab title='Accomidations and Other Info' color='black'>
                    <Box>

                    </Box>
                </Tab>
            </Tabs>                
        </div>
    );
};

export default weddingdetails;