import styles from '../styles/details.module.css'
import { Tabs, Tab, Text, Paragraph, Markdown } from 'grommet';
import { Box } from 'grommet';
import Image from 'next/image';
import church from '../photos/church.jpg';
import greengables from '../photos/greengables.jpg';

const weddingdetails: React.FC = () => {
   const margins = {}
   
    return (
        <div className={styles.container}>
            <Tabs margin='medium' justify='center' className={styles.tabscontainer}  color='blue'>
                <Tab title='The Ceremony' plain={false} >
                    <Box justify='center' elevation='small' round='medium' direction='row' pad='1.5cm' border={{ color: 'black', size: 'medium', style: 'ridge'}} className={styles.mainbox}>
                        <Box>
                            <Image alt='photo of the church' src={church} height={650} width={850} />
                        </Box>
                        <Box direction='column'>
                            <Text className={styles.text} textAlign='justify' >
                                The Ceremony will be held at Westmont Presbyterian Church in Johnstown.
                                This was Leah's church growing up and it means so much for her to get married in it. 
                            </Text>
                            <Text className={styles.text} textAlign='justify'>
                                The ceremony will start at 12:30 p.m, with BLANK AND BLANK officiating. 
                                Following the ceremony we hope you all will join us for the reception at the beautiful Green Gables restraunt.
                            </Text>
                            <Text className={styles.text} textAlign='center' weight='bolder'>
                                 Westmont Presbyterian Church: 601 Luzerne St, Johnstown, PA 15905.
                            </Text>
                        </Box>    
                    </Box>    
                </Tab>
                <Tab title='The Reception' color='black'>
                    <Box justify='center' elevation='small' round='medium' direction='row' pad='1.5cm' border={{ color: 'black', size: 'medium', style: 'ridge'}} className={styles.box}>
                        <Image alt='photo of green gables' src={greengables} width={1200} height={1000} /> 

                    </Box>
                </Tab>
                <Tab title='Accomidations and Other Info' color='black'>
                <Box justify='center' elevation='small' round='medium' direction='row' pad='1.5cm' border={{ color: 'black', size: 'medium', style: 'ridge'}} className={styles.box}>
                    <Paragraph textAlign='center' className={styles.text}>
                        This is where the hotels will go for the guests
                    </Paragraph>
                </Box>
                </Tab>
            </Tabs>                
        </div>
    );
};

export default weddingdetails;