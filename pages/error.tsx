import { Box } from "grommet";
import { Heading } from "grommet";
import { Text } from "grommet";
import styles from '../styles/error.module.css'

const Error: React.FC = () => {
    return (
        <div>
            <Box basis="1/2" justify="center" direction='column' className={styles.error}>
                <Heading textAlign="center" >Hmmmm. It appears that you have already R.S.V.P&apos;ed.</Heading>
                <Text textAlign="center" margin='medium' size="large" >If you want to change the informaion that you have provided please email me at difficultoctet@gmail.com</Text>
            </Box>
        </div>
    );
};

export default Error;