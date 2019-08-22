import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabDoor from './tabs_nav/TabDoor';
import '../css/TabsNav.css'


class TabComponent extends Component {
	render() {
		return(
			<div>
				<TabList>
					<Tab><TabDoor /></Tab>	
					<Tab>Tan Link 2</Tab>	
					<Tab>Tan Link 3</Tab>	
				</TabList>
			</div>
		)
	}
}

export default TabComponent;