import { Box, Button, Heading } from 'grommet'
import styles from '../styles/registry.module.css'
import Image from 'next/image';
import img4 from '../photos/4.jpg';
import { Text } from 'grommet';
import Countdown from 'react-countdown';
import Link from 'next/link';

const registry = () => {
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a completed state
          return (<Text>The Wedding is here!!!</Text>)
        } else {
          // Render a countdown
          return (<Text margin='small' alignSelf='center' size='large' weight='bold' textAlign='center' className={styles.countdown}>{days} Days {hours} Hours {minutes} Minutes and {seconds} Seconds until the Wedding!!!</Text>)
        }
      };
    
      
    
    
    return (
        <div className={styles.container}>
            <Box direction='row'>
                <Box direction='column' width='5in' height='6.5in' margin='medium' >
                    <Countdown renderer={renderer} date='2022-10-29'  />
                    <Image className={styles.image} alt='photo of Leah and Ryan' src={img4} />
                </Box>
                <Box height='medium' border={{ color: 'black', size: 'medium', style: 'double', side: 'all'}} width='large' gap='small' alignContent='center' round='medium' className={styles.registry}  pad='medium' >
                    <Heading level={1} alignSelf='center' size='medium' className={styles.heading}>The Registry</Heading>
                    <Text textAlign='center' size='medium' weight='bold'>
                        First of all Leah and I would like to thank you for coming to the wedding.
                        We are so excited for our friends and family to come together for our special day.
                        The button below will take you to our Amazon registry.
                        
                    </Text>
                    <Link href={process.env.NEXT_PUBLIC_AMAZON_REGISTRY_URL}  passHref={true} >
                    <Button size='medium' alignSelf='center' primary label='Take Me To The Registry' color='black' margin='small' />
                    </Link>
                </Box>
            </Box>
        </div>
    );
};

export default registry;