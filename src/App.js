import React, { useState, useEffect } from 'react';
import { postRequest } from "./panels/functions/fetch.js";
import { Panel } from '@vkontakte/vkui';

import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';
import Home from './panels/Home';
import Events from './panels/Events';
import Info from './panels/Info';
import Achivements from './panels/Achivements';
import Profile from './panels/Profile';
import ListAmbassador from './panels/listAmbassador';
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
import ProfileMrg from './panels/profilemrg';
import ProfileForInfo from './panels/ProfileForInfo';
import EventsForInfo from './panels/EventsForInfo';


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
	ADDEVENTHELPOFF: 'addeventhelpoff',
	PROFILEMRG: 'profilemrg',
	LISTAMBASSADOR: 'listambassador',
	PROFILEFORINFO: 'profileforinfo',
	EVENTSFORINFO: 'eventsforinfo',
};

const requestURL = 'https://ambassador-todo.herokuapp.com/access/find'


const App = () => {

	const [activePanel, setActivePanel] = useState(ROUTES.PROFILE);
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const [isLoading, setIsLoading] = React.useState(true);
	const [fetch, setFetch] = React.useState(true);
	const [info, setInfo] = React.useState();

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data } }) => {
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
		setInfo(e.currentTarget.dataset.id);
	};

	if (fetch) {
		if (fetchedUser != null) {
			const vkID = JSON.stringify({ "vkID": fetchedUser.id })
			postRequest('POST', requestURL, vkID)

				.then(data => {
					if (data[0].role === 'ambassador') {
						setActivePanel(ROUTES.PROFILE)
						setIsLoading(false)
						setFetch(false)
					}
					else if (data[0].role === 'mentor' || data[0].role === 'staff') {
						setActivePanel(ROUTES.PROFILEMRG)
						setIsLoading(false)
						setFetch(false)
					}
				})
				.catch(err => console.log(err))
		}
	}

	if (isLoading === true) {
		return (
			<Panel>
				<div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
					<ScreenSpinner style={{ marginTop: '50%' }} />
				</div>
			</Panel>
		)
	}



	return (
		<View activePanel={activePanel} popout={popout}>
			<Profile id='profile' fetchedUser={fetchedUser} go={go} />
			<Badge id='badge' go={go} />
			<Home id='home' fetchedUser={fetchedUser} go={go} />
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
			<ProfileForInfo id='profileforinfo' go={go} info={info} />
			<EventsForInfo id='eventsforinfo' go={go} info={info} />
			<ProfileMrg id='profilemrg' fetchedUser={fetchedUser} go={go} />
			<ListAmbassador id='listambassador' fetchedUser={fetchedUser} go={go} />
		</View>
	);

}

export default App;