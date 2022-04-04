import { Box } from "grommet";
import { Heading } from "grommet";
import { Text } from "grommet";
import styles from '../styles/thankyou.module.css';

const Thanks: React.FC = () => {
    return (
        <div>
            <Box alignContent='center' align="center" alignSelf="center" justify="center" direction='column' round="medium" border={{ color: 'black', style: 'double'}}  className={styles.thanks}>
                <Heading textAlign="center" size="small" >Thank you for the R.S.V.P!</Heading>
                <Text textAlign="center" margin='medium' weight='bold' size="large" className={styles.email}>If you want to change the information that you have provided please email me at difficultoctet@gmail.com</Text>
            </Box>
        </div>
    );
};

export default Thanks;