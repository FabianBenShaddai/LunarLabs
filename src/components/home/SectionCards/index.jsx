import React, { useState } from 'react';
import Card from '../../Card';
import styles from './index.module.css';
import libertum from '../../Assets/libertum-icon.svg';
import NavBarBottomHome from '../NavBarBottomHome';
const projects = [
	{
		title: 'Example Project',
		status: 'finished',
		acronimo: 'EXP',
		description:
			"Example Project is the bridge between the traditional economy and the Web3.0",
		totalRise: '2 600 000',
		starts: 'TBA',
		price: '1 EXP = 1.00 USDC',
		logo: libertum,
	},
	{
		title: null,
		status: null,
		acronimo: null,
		description: null,
		totalRise: null,
		starts: null,
		price: null,
		logo: null,
	},
	{
		title: null,
		status: null,
		acronimo: null,
		description: null,
		totalRise: null,
		starts: null,
		price: null,
		logo: null,
	},
];
const projectsEnded = [
	{
		title: null,
		status: null,
		acronimo: null,
		description: null,
		totalRise: null,
		starts: null,
		price: null,
		logo: null,
	},
	{
		title: null,
		status: null,
		acronimo: null,
		description: null,
		totalRise: null,
		starts: null,
		price: null,
		logo: null,
	},
	{
		title: null,
		status: null,
		acronimo: null,
		description: null,
		totalRise: null,
		starts: null,
		price: null,
		logo: null,
	},
];
function SectionCards() {
	const [upcoming, setUpcoming] = useState(true);
	return (
		<div className={styles.sectionCards}>
			<NavBarBottomHome upcoming={upcoming} setUpcoming={setUpcoming} />
			<div className={styles.cards}>
				{upcoming
					? projects.map((project, index) => (
							<Card
								key={index}
								title={project.title}
								status={project.status}
								acronimo={project.acronimo}
								description={project.description}
								totalRise={project.totalRise}
								starts={project.starts}
								price={project.price}
								logo={project.logo}
							/>
					  ))
					: projectsEnded.map((project, index) => (
							<Card
								key={index}
								title={project.title}
								status={project.status}
								acronimo={project.acronimo}
								description={project.description}
								totalRise={project.totalRise}
								starts={project.starts}
								price={project.price}
								logo={project.logo}
							/>
					  ))}
			</div>
		</div>
	);
}

export default SectionCards;

