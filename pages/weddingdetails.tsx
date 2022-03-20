import styles from '../styles/details.module.css'
import { Tabs, Tab, Text } from 'grommet';
import { Box } from 'grommet';
import Image from 'next/image';
import church from '../photos/church.jpg';

const weddingdetails = () => {
   
   
    return (
        <div className={styles.container}>
            <Tabs margin='medium' justify='center' className={styles.tabcontainer}>
                <Tab title='The Ceremony' color='black' >
                    <Box justify='center' elevation='small' round='medium' direction='row' pad='1.5cm' border={{}} className={styles.ceremony}>
                        <Image alt='photo of church' src={church} />
                        <Text className={styles.ceremonytext} size='medium'>
                            The Ceremony will be held at Westmont Presbyterian Church in Johnstown, PA.
                            This church was Leah's growing up as a child, and it means so much for her to get married in it.

                        </Text>
                    </Box>
                </Tab>
                <Tab title='The Reception' color='black'>
                    <Box pad='medium'>
                        <Text>

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