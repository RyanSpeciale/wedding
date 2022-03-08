import { Card, CardBody, CardFooter, CardHeader, Heading, Paragraph } from "grommet";
import styles from '../styles/card.module.css';



const Details = () => {
    return (
        <div className={styles.container}>
            <Card direction="column" elevation="large" alignContent="center" pad='small' border={{ color: 'black', size: 'small' }}  height='medium' width='medium' className={styles.card}>
                <CardHeader>
                    <Heading level={3}>Leah Young & Ryan Speciale</Heading>
                </CardHeader>
                <CardBody>
                    <Paragraph>
                        October 29th, 2022
                    </Paragraph>
                    <Paragraph>
                        Ceremony at Westmont Presbyterian 601 Luzerne St. Johnstown, PA
                    </Paragraph>
                    <Paragraph>
                        Reception at Green Gables Restraunt. 7712 Somerset Pk. Jennerstown, PA
                    </Paragraph>
                </CardBody>
                <CardFooter></CardFooter>
            </Card>
        </div>
    );
};

export default Details;