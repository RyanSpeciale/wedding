import styles from '../styles/rsvp.module.css';
import React from 'react';
import { Box } from 'grommet';
import { Button } from 'grommet';
import Link from 'next/link';
import { Text } from 'grommet';





const RSVP = () => {
    return (
        <div className={styles.container}>
            <Box>
                <Box justify='center' align='center' pad='small' border={{ color: 'black', style: 'dotted', size: 'medium' }} round='medium' alignContent='center' gap='medium' margin='medium' className={styles.box}>
                    <Text textAlign='center' alignSelf='center' size='large' weight='bold'>
                      Please click the button below to RSVP. This button will take you to a Google Form to complete your response.
                      If you want to continue to browse the website while you fill out the form, you can always right click on the button and then click &quot;Open Link In New Tab&quot;.
                      After you submit the form you will recieve an email with your RSVP responses and if you ever need to change the information provided, just submit a new form!
                    </Text>
                    <Link href='https://forms.gle/8WA4Bj45UXEsvbNYA' passHref={true}>
                        <Button primary color='black' label='Click here to RSVP'/>
                    </Link>
                </Box>
            </Box>
        </div>
    )
}

export default RSVP



