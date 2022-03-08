import { Card, CardBody, CardFooter, CardHeader } from "grommet";
import styles from '../styles/card.module.css'

const Deets = () => {
    return (
        <Card className={styles.card} elevation='medium' height='8cm' width='7cm' >
            <CardHeader>Leah Young & Ryan Speciale</CardHeader>
            <CardBody>October 29th, 2022 Johnstown, PA</CardBody>
            <CardFooter></CardFooter>
        </Card>
    );
};

export default Deets;