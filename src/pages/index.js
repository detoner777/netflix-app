import React, { Component } from 'react';
import Header from '../components/Header';
import TabComponent from '../components/TabComponent'


class Main extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<TabComponent />
			</div>
		)
	}
}

export default Main;
