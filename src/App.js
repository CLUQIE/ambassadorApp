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

const ROUTES = {
	HOME: 'home',
	EVENTS: 'events',
	INFO: 'info',
	ACHIVEMENTS: 'achivements',
	PROFILE: 'profile',
	EVENTSMENTOR: 'eventsmentor',
	EDITPROFILE: 'editprofile',
	BADGE: 'badge'
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
				<Home id='home'  fetchedUser={fetchedUser} go={go} />
				<Events id='events' fetchedUser={fetchedUser} go={go} />
				<Info id='info' go={go} />
				<Achivements id='achivements' fetchedUser={fetchedUser} go={go} />
				<Profile id='profile' fetchedUser={fetchedUser} go={go} />
				<Editprofile id='editprofile' fetchedUser={fetchedUser} go={go} />
				<Badge id='badge' go={go} />
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

