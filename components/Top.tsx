import { Header, Heading, Box } from "grommet";
import { Button } from "grommet";
import styles from '../styles/top.module.css'

const Top = () => {
    return (
        <div>
            <Box direction="column">
                <Heading level={1} size='large' textAlign="center" className={styles.title}>Leah and Ryan</Heading>
                <Header justify="center" basis="1/2" margin='small'>
                    <Button primary color='black' href='/' label='Home'/>
                    <Button primary color='black' href="/rsvp" label='R.S.V.P'/>
                    <Button primary color='black' href='/registry' label='Registry'/>
                    <Button primary color='black' href='/weddingdetails' label='Details'/>
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