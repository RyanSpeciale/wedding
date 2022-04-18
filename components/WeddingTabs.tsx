import {
	Tabs,
	Tab,
	Text,
	Card,
	CardHeader,
	Button,
	Box,
	Paragraph,
} from 'grommet';
import styles from '../styles/tabs.module.css';
import React from 'react';
import Image from 'next/image';
import church from '../photos/church.jpg';
import green from '../photos/greengables.jpg';
import holiday from '../photos/holiday-inn-johnstown.jpg';
import miner from '../photos/coalminer.jpg';

const WeddingTabs = () => {
	return (
		<Box direction='row-responsive'>
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
                                The ceremony will start at 1 p.m, with Rev. Ben Nti and Rev. Jim Farrer officiating. 
                                Following the ceremony we hope you all will join us for the reception at the beautiful Green Gables restraunt.
                            </Paragraph>
                            <Paragraph className={styles.address}>
                            Westmont Presbyterian Church: 601 Luzerne St, Johnstown, PA 15905.
                            </Paragraph>
						</Box>
					</Box>
				</Tab>
				<Tab title='Tab Two'>
					<Box direction='row-responsive' responsive={true}>
						<Image src={green} alt='photo of green gables' />
						<Text>Is</Text>
					</Box>
				</Tab>
				<Tab title='Tab Three'>
					<Box direction='row-responsive' responsive={true}>
						<Card>
							<CardHeader></CardHeader>
						</Card>
					</Box>
				</Tab>
			</Tabs>
		</Box>
	);
};

export default WeddingTabs;
