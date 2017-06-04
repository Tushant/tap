import React, { Component } from 'react';
import { Colors, Button } from 'react-foundation';

import TapHeader from './components/Header';
import Campaign from './components/Campaigns';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<TapHeader />
				<Campaign />
			</div>
		);
	}
}

export default App;
