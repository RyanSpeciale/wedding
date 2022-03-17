import styles from '../styles/details.module.css'
import { Tabs, Tab } from 'grommet';

const weddingdetails = () => {
   
   
    return (
        <div className={styles.container}>
            <Tabs margin='small' className={styles.tabcontainer}>
                <Tab title='The Ceremony'>

                </Tab>
                <Tab title='The Reception'>

                </Tab>
                <Tab title='Accomidations and Other Info'>

                </Tab>
            </Tabs>                
        </div>
    );
};

export default weddingdetails;