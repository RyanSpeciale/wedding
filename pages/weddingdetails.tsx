import styles from '../styles/details.module.css'
import { Tabs, Tab, Text } from 'grommet';
import { Box } from 'grommet';
import Image from 'next/image';
import church from '../photos/church.jpg';

const weddingdetails = () => {
   
   
    return (
        <div className={styles.container}>
            <Tabs margin='medium' justify='center' className={styles.tabscontainer}  color='blue'>
                <Tab title='The Ceremony' className={styles.ceremonytab} plain={false} >
                    <Box justify='center' elevation='small' round='medium' direction='row' pad='1.5cm' border={{ color: 'black', size: 'medium', style: 'ridge'}} className={styles.box}>
                        <Image alt='photo of church' src={church} />
                        <Text className={styles.ceremonytext} size='medium' textAlign='center'>
                            The Ceremony will be held at Westmont Presbyterian Church in Johnstown, PA.
                            This church was Leah's growing up, and it means so much for her to get married in it.
                            We will have BLANK AND BLANK officiating the wedding. The ceremony will start at 1230,
                            with the Reception to follow at Green Gables Restraunt in Jennerstown, PA

                        </Text>
                    </Box>
                </Tab>
                <Tab title='The Reception' color='black'>
                    <Box justify='center' elevation='small' round='medium' direction='row' pad='1.5cm' border={{ color: 'black', size: 'medium', style: 'ridge'}} className={styles.box}>
                       <Text className={styles.receptiontab} size='medium' textAlign='center' >

                       </Text>
                    </Box>
                </Tab>
                <Tab title='Accomidations and Other Info' color='black'>
                    <Box pad='large'>
                        <Text>

                        </Text>
                    </Box>
                </Tab>
            </Tabs>                
        </div>
    );
};

export default weddingdetails;