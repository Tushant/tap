import React, { Component } from 'react';
import { Row, Column, Button, Sizes } from 'react-foundation';

import logo from '../../assets/tanjo-logo.png';
import './style.css';

export default class TapHeader extends Component {
	render() {
		return (
			<Row className="tapHeader" isExpanded>
				<Column small={12} medium={6} large={6} className="tapLogo">
					<img src={logo} alt="Tanjo.ai" />
					<span className="companyName">
						Tanjo Animated Persona Ad Campaigns
					</span>
				</Column>
				<Column small={12} medium={6} large={6} className="headerBtnGrp">
					<Button size={Sizes.SMALL}>Ad Campaigns</Button>
					<Button size={Sizes.SMALL}>Personas</Button>
					<Button size={Sizes.SMALL}>Menu</Button>
				</Column>
			</Row>
		);
	}
}
