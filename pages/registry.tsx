import { Box, Heading } from 'grommet'
import styles from '../styles/registry.module.css'
import Image from 'next/image';
import img14 from '../photos/14.jpg';
import img4 from '../photos/4.jpg';

const registry = () => {
    return (
        <div className={styles.container}>
            <Box direction='row'>
                <Box direction='column' width='5in' height='6in' margin='medium' >
                    <Image alt='photo of Leah and Ryan' src={img4} />
                </Box>
                <Box height='medium' width='medium' alignContent='center' margin='small' pad='small' >
                    <Heading level={2} alignSelf='center' size='large' className={styles.heading}>The Registry</Heading>
                </Box>
            </Box>
        </div>
    );
};

export default registry;