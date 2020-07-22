import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';
import Home from './panels/Home';
import Events from './panels/Events';
import Info from './panels/Info';
import Achivements from './panels/Achivements';
import Profile from './panels/Profile';
import Eventsmentor from './panels/eventsMentor';
import Editprofile from './panels/editProfile';
import Badge from './panels/Badge';
import AddEventFirst from './panels/AddEventFirst';
import AddEventSecondVnesh from './panels/AddEventSecondVnesh';
import AddEventSecondVnutr from './panels/AddEventSecondVnutr';
import AddEventSecondHelp from './panels/AddEventSecondHelp';
import AddEventVneshOff from './panels/AddEventVneshOff';
import AddEventVnutrOnl from './panels/AddEventVnutrOnl';
import AddEventVnutrOff from './panels/AddEventVnutrOff';
import AddEventHelpOnl from './panels/AddEventHelpOnl';
import AddEventHelpOff from './panels/AddEventHelpOff';


const ROUTES = {
	HOME: 'home',
	EVENTS: 'events',
	INFO: 'info',
	ACHIVEMENTS: 'achivements',
	PROFILE: 'profile',
	EVENTSMENTOR: 'eventsmentor',
	EDITPROFILE: 'editprofile',
	BADGE: 'badge',
	ADDEVENTFIRST: 'addeventfirst',
	ADDEVENTSECONDVNESH: 'addeventsecondvnesh',
	ADDEVENTSECONDVNUTR: 'addeventsecondvnutr',
	ADDEVENTSECONDHELP: 'addeventsecondhelp',
	ADDEVENTVNESHOFF: 'addeventvneshoff',
	ADDEVENTVNUTRONL: 'addeventvnutronl',
	ADDEVENTVNUTROFF: 'addeventvnutroff',
	ADDEVENTHELPONL: 'addeventhelponl',
	ADDEVENTHELPOFF: 'addeventhelpoff'
};

const App = () => {
	const [activePanel, setActivePanel] = useState(ROUTES.PROFILE);
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			// if (type === 'VKWebAppUpdateConfig') {
			// 	const schemeAttribute = document.createAttribute('scheme');
			// 	schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
			// 	document.body.attributes.setNamedItem(schemeAttribute);
			// }
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	const role = 'ambassador';
	// const role = 'ambassador';


	if (role === 'ambassador'){
		return (
			<View activePanel={activePanel} popout={popout}>
				
				<Profile id='profile' fetchedUser={fetchedUser} go={go} />
				<Badge id='badge' go={go} />
				<Home id='home'  fetchedUser={fetchedUser} go={go} />
				<AddEventFirst id='addeventfirst' go={go} />
				<AddEventSecondVnesh id='addeventsecondvnesh' go={go} />
				<Editprofile id='editprofile' fetchedUser={fetchedUser} go={go} />
				<AddEventSecondVnutr id='addeventsecondvnutr' go={go} />
				<AddEventSecondHelp id='addeventsecondhelp' go={go} />
				<AddEventVneshOff fetchedUser={fetchedUser} id='addeventvneshoff' go={go} />
				<AddEventVnutrOnl fetchedUser={fetchedUser} id='addeventvnutronl' go={go} />
				<AddEventVnutrOff fetchedUser={fetchedUser} id='addeventvnutroff' go={go} />
				<AddEventHelpOnl fetchedUser={fetchedUser} id='addeventhelponl' go={go} />
				<AddEventHelpOff fetchedUser={fetchedUser} id='addeventhelpoff' go={go} />
				
				<Achivements id='achivements' fetchedUser={fetchedUser} go={go} />
				<Info id='info' go={go} />
				<Events id='events' fetchedUser={fetchedUser} go={go} />
			</View>
		);
	}
	else if(role === 'mentor'){
		// setActivePanel(ROUTES.EVENTSMENTOR);
		return (
			<View activePanel={activePanel} popout={popout}>
				<Profile id='profile' fetchedUser={fetchedUser} go={go} />
				{/* <Events id='events' fetchedUser={fetchedUser} go={go} /> */}
				<Eventsmentor id='eventsmentor' fetchedUser={fetchedUser} go={go} />
			</View>
		);
	}

}

export default App;

