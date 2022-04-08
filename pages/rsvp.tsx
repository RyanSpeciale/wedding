import styles from '../styles/rsvp.module.css';
import React from 'react';
import { Box } from 'grommet';
import { Button } from 'grommet';
import { useRouter } from 'next/router';
import Link from 'next/link';





const RSVP = () => {
    return (
        <div className={styles.container}>
            <Box>
                <Link href='https://forms.gle/8WA4Bj45UXEsvbNYA'  passHref={true}>
                    <Button  label='Click here to RSVP'/>
                </Link>
            </Box>
        </div>
    )
}

export default RSVP



