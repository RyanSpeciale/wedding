import { Header, Heading, Box } from "grommet";
import { Button } from "grommet";
import styles from '../styles/top.module.css'

const Top = () => {
    return (
        <div>
            <Box direction="column">
                <Heading textAlign="center" className={styles.title}>Leah and Ryan</Heading>
                <Header justify="center" margin='medium'>
                    <Button primary color='black' label='Home'/>
                    <Button primary color='black' label='R.S.V.P'/>
                    <Button primary color='black' label='Registry'/>
                    <Button primary color='black' label='Details'/>
                    <Button primary color='black' label='Our Story'/>
                </Header>
            </Box>
        </div>
    );
};

export default Top;


            <Header justify="center" margin='medium'>
                <Button primary color='black' label='Home'/>
                <Button primary color='black' label='R.S.V.P'/>
                <Button primary color='black' label='Registry'/>
                <Button primary color='black' label='Details'/>
                <Button primary color='black' label='Our Story'/>
            </Header>