import React, {Component} from 'react';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import TabDoor from './tabs_nav/TabDoor';
import TabDevices from './tabs_nav/TabDevices';
import TabPrices from './tabs_nav/TabPrices';
import TabComponentOne from "./TabContentOne";
import '../css/TabsNav.css'


class TabComponent extends Component {
	
	state = {
		tabIndex: 0
	}

	render() {
		return(
			<Tabs className="tabs" selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({tabIndex}) } >
				<TabList className="tab-nav-container">
					<Tab className={`${this.state.tabIndex === 0 ? 'tab-selected active' : null}`} >
						<TabDoor />
						<p style={{marginBottom: '1rem'}}><strong>No commitments <br />
							Cancel oline at anytime</strong>
						</p>
					</Tab>	
					<Tab className={`${this.state.tabIndex === 1 ? 'tab-selected active' : null}`}>
						<TabDevices />
						<p style={{marginTop: '-5.3125rem'}}>
						<strong>Watch anywher</strong>
						</p>
					</Tab>	
					<Tab className={`${this.state.tabIndex === 2 ? 'tab-selected active' : null}`}>
						<TabPrices />
						<p style={{marginTop: '0.2rem'}}>
						<strong>Pick your price</strong>
						</p>
					</Tab>	
				</TabList>
				<TabPanel>
				<TabComponentOne/>
				</TabPanel>
			</Tabs>
		)
	}
}

export default TabComponent;