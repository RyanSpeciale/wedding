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
				<Box
					justify='center'
					align='center'
					pad='small'
					border={{ color: 'black', style: 'dotted', size: 'medium' }}
					round='medium'
					alignContent='center'
					gap='medium'
					margin='medium'
					className={styles.box}
				>
					<Text
						textAlign='center'
						alignSelf='center'
						size='large'
						weight='bold'
					>
						Thank You so much for your RSVP! Due to the insane cost of hosting,
						the button below will take you to a Google Form to complete your
						reservation. If you would like to continue to browse the site,
						just right click on the button and then click &quot;Open Link in New Tab&quot;
					</Text>
					<Link href='https://forms.gle/MQKKkQVbAmmG2Swm7' passHref={true}>
						<Button primary color='black' label='Click here to RSVP' />
					</Link>
				</Box>
			</Box>
		</div>
	);
};

export default RSVP;
