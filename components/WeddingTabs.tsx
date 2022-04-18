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
						<Image src={green} width={400} height={400} alt='photo of green gables' />
						<Box direction='column' alignContent='center'>
							<Text alignSelf='center' size='xlarge'>
                                The Reception
                            </Text>
                            <Paragraph>
                                The reception will be at Green Gables restaurant and Huddleson Court.
                                Green Gables is about a 20-25 minute drive from the church and the reception will start with cocktail hour at 4 p.m, with dinner and dancing from 5-9 p.m.
                            </Paragraph>
                            <Paragraph>
                                After the reception if you would like to stay in the area we have provided a list of accomadations in the next tab, as well as other information.
                                Leah and I cannot wait to see you all!
                            </Paragraph>
                            <Paragraph className={styles.address}>
                                Green Gables Restaurant and Huddleson Court: 7712 Somerset Pike, Jennerstown, PA 15547.
                            </Paragraph>
						</Box>
					</Box>
				</Tab>
				<Tab title='Accomidations and other Info'>
					<Box direction='row-responsive' gap='medium' responsive={true}>
						<Card className={styles.card}  width='medium'>
							<CardHeader alignSelf='center' className={styles.header}>The Holiday Inn Johnstown</CardHeader>
                            <CardBody pad='small'>
                                <Paragraph>
                                    This is where our families and us will be staying. We suggest that everyone stays here, especially if you want to have brunch with us in the morning. 
                                </Paragraph>
                                <Paragraph>
                                    Everyone that stays here from the wedding will receive a 10% discount and rooms are already reasonable at around $100 a night. We are also looking into a shuttle to and from Green Gables. Continue to check back here for more information.
                                </Paragraph>
                                <Text weight='bold'>250 Market St, Johnstown, PA 15901</Text>
                                <Link href='https://www.google.com/travel/hotels/holiday%20inn%20downtown%20johnstown/entity/CgsI2dvMmriF7IPQARAB/prices?q=holiday%20inn%20downtown%20johnstown&g2lb=2502548%2C2503771%2C2503781%2C2503972%2C4258168%2C4270442%2C4284970%2C4291517%2C4306835%2C4401769%2C4429192%2C4597339%2C4640247%2C4647135%2C4649665%2C4680677%2C4716131%2C4722435%2C4722900%2C4723331%2C4726607%2C4733969%2C4734964%2C4736008&hl=en-US&gl=us&cs=1&ssta=1&rp=OAJAAEgBwAEC&ictx=1&ved=0CAAQ5JsGahcKEwjYt4Db8vj2AhUAAAAAHQAAAAAQCw&utm_campaign=sharing&utm_medium=link&utm_source=htls&ts=CAESABpJCisSJzIlMHg4OWNiMTE0OWQ1OGFjNzUxOjB4ZDAwN2IwMmI4MzUzMmRkORoAEhoSFAoHCOYPEAoYHBIHCOYPEAoYHhgCMgIIASoJCgU6A1VTRBoA&ap=MAE' passHref={true}>
                                    <Button className={styles.button} primary label='Booking'/>
                                </Link>
                            </CardBody>
                        </Card>
                        <Card className={styles.card} width='medium'>
                        <CardHeader alignSelf='center' className={styles.header}>Coal Miner&apos;s Diner</CardHeader>
                            <CardBody pad='small'>
                                <Paragraph>
                                    If the Holiday Inn does not work for you, Coal Miner&apos;s Diner is an option. It is only about a 2 minute drive from Green Gables. They have rooms available.
                                </Paragraph>
                                <Paragraph>
                                    This place is known for its good food, and cozy atmosphere. Rumor has it they have a great breakfast. We are still looking into if we can reserve a block of rooms here for the wedding. Continue to check back here for more infomation.
                                </Paragraph>
                                <Text weight='bold' textAlign='center' alignSelf='center'>1640 US-30, Jennerstown, PA 15547</Text>
                                <Link href='https://www.facebook.com/Coal-Miners-Diner-107432313958666/' passHref={true}>
                                    <Button className={styles.button} primary label='Booking'/>
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
