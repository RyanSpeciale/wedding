import styles from '../styles/details.module.css'
import { Tabs, Tab, Text, Card, CardHeader, Button } from 'grommet';
import { Box } from 'grommet';
import Image from 'next/image';
import church from '../photos/church.jpg';
import greengables from '../photos/greengables.jpg';
import holidy from '../photos/holiday-inn-johnstown.jpg';
import coalminer from '../photos/coalminer.jpg';

const weddingdetails: React.FC = () => {
   
   
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
                                The Ceremony will be held at Westmont Presbyterian Church in Johnstown, PA.
                                This was Leah&apos;s church growing up and it means so much for her to get married in it. 
                            </Text>
                            <Text className={styles.text} textAlign='justify'>
                                The ceremony will start at 12:30 p.m, with Rev. Ben Nti and Rev. Jim Farrer officiating. 
                                Following the ceremony we hope you all will join us for the reception at the beautiful Green Gables restraunt.
                            </Text>
                            <Text className={styles.text} textAlign='center' weight='bolder'>
                                 Westmont Presbyterian Church: 601 Luzerne St, Johnstown, PA 15905.
                            </Text>
                        </Box>    
                    </Box>    
                </Tab>
                <Tab title='The Reception' color='black'>
                    <Box justify='center' elevation='small' round='medium' direction='row' pad='1.5cm' border={{ color: 'black', size: 'medium', style: 'ridge'}} className={styles.mainbox}>
                        <Box className={styles.greenbox}>
                            <Image alt='a photo of green gables' src={greengables} height={750} width={950} />
                        </Box>
                        <Box direction='column'>
                            <Text className={styles.text} textAlign='justify'>
                                The reception will be at Green Gables restraunt and Huddleson Court.
                                Green Gables is about a 20-25 minute drive from the church and the reception will start with cocktail hour at 4 p.m, with dinner and dancing from 5-9 p.m.
                            </Text>
                            <Text className={styles.text} textAlign='justify'>
                                After the reception if you would like to stay in the area we have provided a list of accomadations in the next tab, as well as other information.
                                Leah and I cannot wait to see you all!
                            </Text>
                            <Text className={styles.text} textAlign='center' weight='bolder'>
                                Green Gables Restraunt and Huddleson Court: 7712 Somerset Pike, Jennerstown, PA 15547.
                            </Text>
                        </Box> 
                    </Box>
                </Tab>
                <Tab title='Accomidations and Other Info' color='black'>
                    <Box justify='center' elevation='small' gap='medium' alignContent='center' round='medium' direction='column' pad='1.5cm' border={{ color: 'black', size: 'medium', style: 'ridge'}} className={styles.mainbox}>
                            <Text className={styles.title} size='large' textAlign='center'>There are plenty of places to stay near Green Gables, we have a couple listed here for your convenience.</Text>
                            <Box direction='row-responsive' gap='medium' justify='center'margin='small' responsive={true} alignContent='center' align='center' wrap={true}>
                                <Card height='medium' width='medium' background='light-4' className={styles.card}>
                                    <CardHeader pad='xsmall' margin={{ bottom: '0.5cm'}} className={styles.cardtext}>Holiday Inn Johnstown-Downtown</CardHeader>
                                    <Box direction='row' align='center' alignSelf='center' alignContent='content' basis='1/2'>
                                        <Image alt='photo of hotel' src={holidy} height={200} width={300} />
                                    </Box>
                                    <Box direction='row' align='center' alignContent='center' alignSelf='center' margin={{ top: '1cm' }}>
                                        <Text textAlign='center'>Host Hotel, this is where we suggest you stay. 250 Market St, Johnstown, PA 15901. We are looking into a shuttle to and from Green Gables.</Text>
                                    </Box>
                                    <Box gap='medium' direction='row' align='center' alignContent='center' justify='center' margin={{ top: '0.5cm', bottom: '0.2cm'}}>
                                        <Button primary color='black' label='Website' />
                                        <Button primary color='black' label='Booking'/>
                                    </Box>
                                </Card>
                                <Card height='medium' width='medium' background='light-4' className={styles.card}>
                                    <CardHeader pad='xsmall' margin={{ bottom: '0.5cm'}} className={styles.cardtext}>Coal Miner&apos;s Diner</CardHeader>
                                    <Box direction='row' align='center' alignSelf='center' alignContent='content' basis='1/2'>
                                        <Image alt='photo of hotel' src={coalminer} height={200} width={300} />
                                    </Box>
                                    <Box direction='row' align='center' alignContent='center' alignSelf='center' margin={{ top: '1cm' }}>
                                        <Text textAlign='center'>If the Holiday Inn doesn&apos;t work for you. About a 2 minute drive from Green Gables. 1640 US-30, Jennerstown, PA 15547.</Text>
                                    </Box>
                                    <Box gap='medium' direction='row' align='center' alignContent='center' justify='center' margin={{ top: '0.5cm', bottom: '0.2cm'}}>
                                        <Button primary color='black' label='Website' />
                                        <Button primary color='black' label='Booking' />
                                    </Box>
                                </Card>
                                
                            </Box>
                    </Box>
                </Tab>
            </Tabs>                
        </div>
    );
};

export default weddingdetails;