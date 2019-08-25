import React, {Component} from 'react';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import TabDoor from './tabs_nav/TabDoor';
import TabDevices from './tabs_nav/TabDevices';
import TabPrices from './tabs_nav/TabPrices';
import TabComponentOne from "./TabContentOne";
import TabComponentTwo from "./TabContentTwo";
import TabComponentThree from "./TabContentThree";
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
						<p className="lgScreen" style={{marginBottom: '1rem'}}><strong>No commitments <br />
							Cancel oline at anytime</strong>
						</p>
						<br/>
						<span className="mdScreen" style={{marginTop: '0.4rem'}}>Cancel</span>
					</Tab>	
					<Tab className={`${this.state.tabIndex === 1 ? 'tab-selected active' : null}`}>
						<TabDevices />
						<p className='lgScreen' style={{marginTop: '-5.3125rem'}}>
						<strong>Watch anywher</strong>
						</p>  
						<span className="mdScreen" style={{ marginTop: '-5.3125rem'}}>Devices</span>
					</Tab>	
					<Tab className={`${this.state.tabIndex === 2 ? 'tab-selected active' : null}`}>
						<TabPrices />
						<p className='lgScreen' style={{marginTop: '0.2rem'}}>
						<strong>Pick your price</strong>
						</p>
						<br />
						<span className="mdScreen">Price</span>
					</Tab>	
				</TabList>
				{/* Tabs Content */}
				<TabPanel>
				<TabComponentOne />
				</TabPanel>
				
				<TabPanel>
				<TabComponentTwo />
				</TabPanel>

				<TabPanel>
				<TabComponentThree />
				</TabPanel>
				
			</Tabs>
		)
	}
}

export default TabComponent;