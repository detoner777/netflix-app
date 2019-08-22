import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabDoor from './tabs_nav/TabDoor';
import TabDevices from './tabs_nav/TabDevices';
import TabPrices from './tabs_nav/TabPrices';
import '../css/TabsNav.css'


class TabComponent extends Component {
	render() {
		return(
			<div>
				<TabList>
					<Tab><TabDoor /></Tab>	
					<Tab><TabDevices /></Tab>	
					<Tab><TabPrices /></Tab>	
				</TabList>
			</div>
		)
	}
}

export default TabComponent;