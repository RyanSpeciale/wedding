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
                <Box justify='center' align='center' round='medium' alignContent='center' gap='medium' margin='medium' className={styles.box}>
                    <Text textAlign='center' alignSelf='center'>
                     Due to this site having to be up for 6 months, and the semi-sensitive nature of the information we need from you, we have decided to hand the reins over to Google.
                     The button below will take you to a Google Form where you will RSVP at.
                     Click the button below and fill out the form to RSVP.
                    </Text>
                    <Link href='https://forms.gle/8WA4Bj45UXEsvbNYA'  passHref={true}>
                        <Button primary color='black' label='Click here to RSVP'/>
                    </Link>
                </Box>
            </Box>
        </div>
    )
}

export default RSVP



