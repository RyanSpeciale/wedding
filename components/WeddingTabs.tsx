import {
	Tabs,
	Tab,
	Text,
	Card,
	CardHeader,
	Button,
	Box,
	Paragraph,
	CardBody,
	CardFooter,
} from 'grommet';
import styles from '../styles/tabs.module.css';
import React from 'react';
import Image from 'next/image';
import church from '../photos/church.jpg';
import green from '../photos/greengables.jpg';
import Link from 'next/link';
import booking from './booking.png'

const WeddingTabs = () => {
	return (
		<Box direction='row-responsive' className={styles.container}>
			<Tabs alignControls='center' alignSelf='center'>
				<Tab title='The Ceremony'>
					<Box
						background='white'
						round='small'
						border={{ color: 'black', style: 'solid', size: 'small' }}
						gap='small'
						direction='row-responsive'
						responsive={true}
					>
						<Image src={church} alt='photo of church' />
						<Box direction='column' alignContent='center'>
							<Text alignSelf='center' size='xlarge'>
								The Ceremony
							</Text>
							<Paragraph>
								The Ceremony will be held at Westmont Presbyterian Church in
								Johnstown, PA. This was Leah&apos;s church growing up and it
								means so much for her to get married in it.
							</Paragraph>
							<Paragraph>
								The ceremony will start at 1 p.m, with Rev. Ben Nti and Rev. Jim
								Farrer officiating. Following the ceremony we hope you all will
								join us for the reception at the beautiful Green Gables
								restaurant.
							</Paragraph>
							<Paragraph className={styles.address}>
								Westmont Presbyterian Church: 601 Luzerne St, Johnstown, PA
								15905.
							</Paragraph>
						</Box>
					</Box>
				</Tab>
				<Tab title='The Reception'>
					<Box
						background='white'
						round='small'
						border={{ color: 'black', style: 'solid', size: 'small' }}
						gap='small'
						direction='row-responsive'
						responsive={true}
					>
						<Image
							src={green}
							width={400}
							height={400}
							alt='photo of green gables'
						/>
						<Box direction='column' alignContent='center'>
							<Text alignSelf='center' size='xlarge'>
								The Reception
							</Text>
							<Paragraph>
								The reception will be at Green Gables restaurant and Huddleson
								Court. Green Gables is about a 20-25 minute drive from the
								church and the reception will start with cocktail hour at 4 p.m,
								with dinner and dancing from 5-9 p.m.
							</Paragraph>
							<Paragraph>
								After the reception if you would like to stay in the area we
								have provided a list of accomadations in the next tab, as well
								as other information. Leah and I cannot wait to see you all!
							</Paragraph>
							<Paragraph className={styles.address}>
								Green Gables Restaurant and Huddleson Court: 7712 Somerset Pike,
								Jennerstown, PA 15547.
							</Paragraph>
						</Box>
					</Box>
				</Tab>
				<Tab title='Accomidations and other Info'>
					<Box direction='row-responsive' gap='medium' responsive={true}>
						<Card className={styles.card} width='medium'>
							<CardHeader alignSelf='center' className={styles.header}>
								The Holiday Inn Johnstown
							</CardHeader>
							<CardBody pad='small'>
								<Paragraph>
									This is the Host Hotel.
								</Paragraph>
								<Paragraph>
									Everyone that stays here from the wedding will receive a 10%
									discount. The button below will take you to the booking page
									for our block of rooms. If for whatever reason this does not work, just call the Holiday Inn and tell them you want to reserve for the Young and Speciale Wedding.
									If booking online, click the button below, select the dates you want either 10/28 or 10/29 through 10/30 and keep the form as below.
								</Paragraph>
								<Image src={booking} alt='Booking Intructions'  />
								<Text weight='bold'>250 Market St, Johnstown, PA 15901</Text>
								<Link
									href='https://www.holidayinn.com/redirect?path=hd&brandCode=HI&localeCode=en&regionCode=1&hotelCode=JSTMK&_PMID=99801505&GPC=YSW&cn=no&viewfullsite=true'
									passHref={true}
								>
									<Button className={styles.button} primary label='Booking' />
								</Link>
							</CardBody>
						</Card>
						<Card className={styles.card} width='medium'>
							<CardHeader alignSelf='center' className={styles.header}>
								Shuttle
							</CardHeader>
							<CardBody pad='small'>
								<Paragraph>
									There will be a shuttle available to take guests from the Holiday Inn to and from the reception.
									Please indicate on the RSVP Google form if you are interested in using this service.
								</Paragraph>
								<Paragraph>
									There will be more information provided closer to the date of the wedding.
								</Paragraph>
							</CardBody>
						</Card>
						<Card className={styles.card} width='medium'>
							<CardHeader alignSelf='center' className={styles.header}>
								Coal Miner&apos;s Diner
							</CardHeader>
							<CardBody pad='small'>
								<Paragraph>
									If the Holiday Inn does not work for you, Coal Miner&apos;s
									Diner is an option. It is only about a 2 minute drive from
									Green Gables. They have rooms available.
								</Paragraph>
								<Paragraph>
									This place is known for its good food, and cozy atmosphere.
									Rumor has it they have a great breakfast. They do not have a
									website, but do have a Facebook page with a number you can
									call to reserve a room.
								</Paragraph>
								<Text weight='bold' textAlign='center' alignSelf='center'>
									1640 US-30, Jennerstown, PA 15547
								</Text>
								<Link
									href='https://www.facebook.com/Coal-Miners-Diner-107432313958666/'
									passHref={true}
								>
									<Button className={styles.button} primary label='Booking' />
								</Link>
							</CardBody>
						</Card>
					</Box>
				</Tab>
			</Tabs>
		</Box>
	);
};

export default WeddingTabs;
