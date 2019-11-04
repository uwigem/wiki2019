import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './HomepageCard.css';

export type HomepageCardProps = {
	header: string,
	image: string,
	blurb: string,
	link: string,
	x?: number,
	y?: number,
	size?: number,
	a: () => void
}

export const HomepageCard: React.FC<HomepageCardProps> = ({
	header,
	image,
	blurb,
	link,
	x = 50,
	y = 50,
	size = 100,
	a
}) => {
	return <div className="homepage-card-wrapper">
		<Grid className="homepage-card-wrapper">
			<Row><div className="homepage-card-header"><h3>{header}</h3></div></Row>
			<Row className="homepage-card-body">
				<Col md={4}>
					<div className="homepage-card-image" style={{
						background: `url(${image}) ${x}% ${y}% / 100% no-repeat`,
						backgroundSize: 'cover'
					}}>
					</div>
				</Col>
				<Col md={8}>
					<div className="homepage-card-blurb">
						<p>
							{blurb}
						</p>
						<div className="wi-caption-2 hcmp-desclink">
							<a onClick={a} href={link}>Learn more &gt;</a>
						</div>
					</div>
				</Col>
			</Row>
		</Grid>
	</div>
}