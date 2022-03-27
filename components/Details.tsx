import { Card, CardBody, CardFooter, CardHeader, Heading, Text } from "grommet";
import styles from '../styles/card.module.css';



const Details = () => {
    return (
        <div className={styles.container}>
            <Card direction="column" elevation="none" alignContent="center" pad='small' height='medium' width='medium' className={styles.card}>
                <CardHeader>
                    <Heading level={3}>Leah Young & Ryan Speciale</Heading>
                </CardHeader>
                <CardBody className={styles.body} align="center">
                    <Text weight='bold' margin='small'>October 29th, 2022</Text>
                    <Text weight='bold' margin='small'>Ceremony at Westmont Presbyterian Church. 601 Luzerne St. Johnstown, PA 15905. 1 p.m.</Text>
                    <Text weight='bold' margin='xsmall'>Reception to Follow at Green Gables Restaraunt. 7712 Somerset Pk. Jennerstown, PA 15547. Cocktail Hour starting at 4 p.m.</Text>
                </CardBody>
                <CardFooter></CardFooter>
            </Card>
        </div>
    );
};

export default Details;