import { Header } from "grommet";
import { Button } from "grommet";
import styles from '../styles/top.module.css'

const Top = () => {
    return (
        <div>
            <Header justify="center" margin='medium'>
                <Button primary color='black' label='Home'/>
                <Button primary color='black' label='R.S.V.P'/>
                <Button primary color='black' label='Registry'/>
                <Button primary color='black' label='Details'/>
                <Button primary color='black' label='Our Story'/>
            </Header>
        </div>
    );
};

export default Top;