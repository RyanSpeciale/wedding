import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, Text } from 'grommet';
import { Heading } from 'grommet';
import styles from '../styles/404.module.css'

const NotFound = () => {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			router.push('/');
		}, 3200);
	}, []);

	return (
		<div>
			<Heading alignSelf='center' margin='large' textAlign='center'>UGH OH!</Heading>
            <Box direction='column' gap='large'>
                <Text textAlign='center' alignSelf='center' weight='bold' size='large'>The page that you requested does not exist. You will be redirected back to home.</Text>
                <Link href='/'>
				    <a className={styles.anchor}>Click here if not redirected</a>
			    </Link>
            </Box>
		</div>
	);
};

export default NotFound;