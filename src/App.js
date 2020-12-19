import React, { useState, useEffect } from 'react';
import { postRequest } from "./panels/functions/fetch.js";
import { ModalRoot, ModalCard, PanelHeaderButton, Group, Div, Select, FormLayout, FormLayoutGroup, Button, ModalPage, ModalPageHeader, Cell, InfoRow, Link, CellButton, Separator } from '@vkontakte/vkui';
import Icon24Write from '@vkontakte/icons/dist/24/write';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';

import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';
import Home from './panels/Home';
import Events from './panels/Events';
import EditEvent from './panels/EditEvent';
import Achivements from './panels/Achivements';
import Profile from './panels/Profile';
import ListAmbassador from './panels/listAmbassador';
import ListMentors from './panels/ListMentors';
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
import EditProfileForStaff from './panels/EditProfileForStaff';
import EventsForInfo from './panels/EventsForInfo';
import AddUser from './panels/AddUser';
import Works from './panels/Works';
import Aliens from './panels/Aliens';
import Start from './panels/Start';
import Statistics from './panels/Statistics';
import { achivementsListReturn } from './panels/functions/achivementsListReturn';

const REQUEST = {
	ACCESS_FIND: 'https://ambassador-todo.herokuapp.com/access/find',
	AMBO_EVENT: 'https://ambassador-todo.herokuapp.com/event/ambassador',
	ACCESS_ROLE: 'https://ambassador-todo.herokuapp.com/access/role',
	DELETE_EVENT: 'https://ambassador-todo.herokuapp.com/event/delete',
	ALL_EVENTS: 'https://ambassador-todo.herokuapp.com/event',
	DELETE_USER: 'https://ambassador-todo.herokuapp.com/access/delete',
	UPDATE_ACCESS: 'https://ambassador-todo.herokuapp.com/access/update',
}

const ROUTES = {
	START: 'start',
	HOME: 'home',
	EVENTS: 'events',
	EDITEVENT: 'editevent',
	INFO: 'info',
	STATISTICS: 'statistics',
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
	LISTMENTORS: 'listmentors',
	PROFILEFORINFO: 'profileforinfo',
	EVENTSFORINFO: 'eventsforinfo',
	EDITPROFILEFORSTAFF: 'editprofileforstaff',
	ADDUSER: 'adduser',
	WORKS: 'works',
	ALIENS: 'aliens',
	EVENTSINFO: 'eventsInfo',
	CONFIRMDELETE: 'confirmdelete',
	CONFIRMDELETEMENTOR: 'confirmdeletementor',
	CHANGEROLE: 'changerole',
};

const App = () => {
	const modalBack = () => {
		setActiveModal(null);
	};

	const confirmDelete = () => {
		postRequest('POST', REQUEST.DELETE_EVENT, JSON.stringify({ _id: amboEvent[eventId]._id }))
			.then(data => {
				setEventId(0)
				setFetch(true)
			})
	}

	const confirmDeleteMentor = () => {
		postRequest('POST', REQUEST.DELETE_USER, JSON.stringify({ _id: mentorInfo._id }))
			.then(data => {
				setFetch(true)
			})
	}

	const [activePanel, setActivePanel] = useState(ROUTES.START);
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const [fetch, setFetch] = React.useState(true);
	const [info, setInfo] = React.useState();
	const [profileInfo, setProfileInfo] = React.useState();
	const [allAmbs, setAllAmbs] = React.useState();
	const [searchAmbassadors, setSearchAmbassadors] = React.useState();
	const [allEvents, setAllEvents] = React.useState();
	const [amboEvent, setAmboEvent] = React.useState(null);
	const [achievementsList, setAchievementsList] = React.useState('');
	const [activeModal, setActiveModal] = React.useState(null);
	const [eventId, setEventId] = React.useState(0);
	const [mentors, setMentors] = React.useState();
	const [role, setRole] = React.useState();
	const [mentorInfo, setMentorInfo] = React.useState();


	const onChangeRole = (event) => {
		setRole(event.target.value)
	}

	const onClickForm = () => {
		let body = JSON.stringify({
			_id: mentorInfo._id,
			vkID: mentorInfo.vkID,
			role: role,
		})
		postRequest('POST', REQUEST.UPDATE_ACCESS, body)

	}

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
		setInfo(e.currentTarget.dataset.id);
	};

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

	if (fetch) {
		if (fetchedUser != null) {
			const vkID = JSON.stringify({ "vkID": fetchedUser.id })
			postRequest('POST', REQUEST.ACCESS_FIND, vkID)
				.then(data => {
					setProfileInfo(data[0])
					if (data[0] === undefined) {
						setActivePanel(ROUTES.ALIENS)
						setFetch(false)
					}
					else if (data[0].vkID === '') {
						setActivePanel(ROUTES.WORKS)
						setFetch(false)
					}
					else if (data[0].role === 'ambassador') {
						setAchievementsList(achivementsListReturn(data[0].achievements))
						postRequest('POST', REQUEST.ACCESS_ROLE, JSON.stringify({ role: "ambassador" }))
							.then(data => {
								let filtredUsers = data.filter(function (i, n) { return (i.role === "ambassador" && i.grade) })
								setAllAmbs(filtredUsers);
							})
						postRequest('POST', REQUEST.AMBO_EVENT, JSON.stringify({ "ambassador": data[0].fullName }))
							.then(events => {
								if (events.length > 0) {
									setAmboEvent(events)
								} else {
									setAmboEvent(null)
								}
								setFetch(false)
							})
					}
					else if (data[0].role === 'staff') {
						postRequest('POST', REQUEST.ACCESS_FIND, JSON.stringify({ "role": "ambassador" }))
							.then(ambassador => {
								setAllAmbs(ambassador.sort(function (a, b) {
									let aname = a.fullName.toLowerCase(),
										bname = b.fullName.toLowerCase();
									if (aname < bname) return -1;
									if (aname > bname) return 1;
									return null
								}))
								setSearchAmbassadors(ambassador)
								if(fetch){
								postRequest('GET', REQUEST.ALL_EVENTS)
									.then(events => {
										setAllEvents(events)
										postRequest('POST', REQUEST.ACCESS_FIND, JSON.stringify({ "role": 'mentor' }))
											.then(mentors => {
												setMentors(mentors)
											})
											.then(setFetch(false))
									})}
							})
					}
					else if (data[0].role === 'mentor') {
						postRequest('POST', REQUEST.ACCESS_FIND, JSON.stringify({ "mentor": data[0].fullName }))
							.then(ambassador => {
								setAllAmbs(ambassador)
								setSearchAmbassadors(ambassador)
								let eventsForMentors = []
								for (let i = 0; i < ambassador.length; i++) {
									postRequest('POST', REQUEST.AMBO_EVENT, JSON.stringify({ 'ambassador': ambassador[i].fullName }))
										.then(events => {
											for (let i = 0; i < events.length; i++) {
												eventsForMentors.push(events[i])
											}
											setAllEvents(eventsForMentors)
										})
										.then(setFetch(false))
								}
							})
					}
				})
		}
	}

	const modal = (
		<ModalRoot
			activeModal={activeModal}
			onClose={modalBack}
		>
			<ModalPage
				id={ROUTES.EVENTSINFO}
				onClose={modalBack}
				header={
					<ModalPageHeader
						left={<PanelHeaderButton onClick={modalBack}><Icon24Cancel /></PanelHeaderButton>}
						right={<PanelHeaderButton style={{ color: '#fc2c38' }} onMouseUp={modalBack} onClick={go} data-to='editevent' data-id={amboEvent ? amboEvent[eventId]._id : 'empty'}><Icon24Write /></PanelHeaderButton>}>
						{amboEvent ? amboEvent[eventId].nameEvent : 'empty'}
					</ModalPageHeader>}>
				<Cell multiline>
					<InfoRow header="Формат мероприятия">
						{amboEvent ? amboEvent[eventId].eventForm : 'empty'}
					</InfoRow>
				</Cell>
				<Cell multiline>
					<InfoRow header="Место проведения">
						{amboEvent ? amboEvent[eventId].eventPlace : 'empty'}
					</InfoRow>
				</Cell>
				<Cell multiline>
					<InfoRow header="Формат участия">
						{amboEvent ? amboEvent[eventId].participationForm : 'empty'}
					</InfoRow>
				</Cell>
				<Cell multiline>
					<InfoRow header="Дата проведения">
						{amboEvent ? amboEvent[eventId].date : 'empty'}
					</InfoRow>
				</Cell>
				<Cell multiline>
					<InfoRow header="Тип мероприятия">
						{amboEvent ? amboEvent[eventId].eventType : 'empty'}
					</InfoRow>
				</Cell>
				<Cell multiline>
					<InfoRow header="Краткое описание">
						{amboEvent ? amboEvent[eventId].description : 'empty'}
					</InfoRow>
				</Cell>
				<Cell multiline>
					<InfoRow header="Количество участников">
						{amboEvent ? amboEvent[eventId].participants : 'empty'}
					</InfoRow>
				</Cell>
				<Cell multiline>
					<InfoRow header="Отзывы участников">
						{amboEvent ? amboEvent[eventId].participantsCallback : 'empty'}
					</InfoRow>
				</Cell>
				<Cell multiline>
					<InfoRow header="Ссылки">
						<Link style={{ color: "#fc2c38" }} href={amboEvent ? amboEvent[eventId].publicationLinks : 'empty'} target="_blank"><span href={amboEvent ? amboEvent[eventId].publicationLinks : 'empty'} >{amboEvent ? amboEvent[eventId].publicationLinks : 'empty'}</span></Link>
					</InfoRow>
				</Cell>
				<Cell multiline>
					<InfoRow header="Заметки">
						{amboEvent ? amboEvent[eventId].notes : 'empty'}
					</InfoRow>
				</Cell>
				<Separator></Separator>
				<CellButton style={{ color: "#fc2c38", marginBottom: 50 }} align='center' onClick={() => { setActiveModal(ROUTES.CONFIRMDELETE); }}>Удалить мероприятие</CellButton>
			</ModalPage>

			<ModalCard
				id={ROUTES.CONFIRMDELETE}
				onClose={() => { setActiveModal(ROUTES.EVENTSINFO); }}
				header={
					<ModalPageHeader>
						Удалить мероприятие?
		</ModalPageHeader>
				}
			>
				<FormLayout>
					<FormLayoutGroup>
						<Button mode="secondary" size="xl" id='1' style={{ backgroundColor: '#fc2c38', color: 'white' }} onMouseUp={modalBack} onClick={confirmDelete} > Да </Button>

						<Button mode="secondary" size="xl" id='2' style={{ backgroundColor: '#fc2c38', color: 'white' }} onClick={() => { setActiveModal(ROUTES.EVENTSINFO); }}> Нет </Button>
					</FormLayoutGroup>
				</FormLayout>
			</ModalCard>

			<ModalCard
				id={ROUTES.CONFIRMDELETEMENTOR}
				onClose={modalBack}
				header={
					<ModalPageHeader>
						Удалить пользователя?
		</ModalPageHeader>
				}
			>
				<FormLayout>
					<FormLayoutGroup>
						<Button mode="secondary" size="xl" id='1' style={{ backgroundColor: '#fc2c38', color: 'white' }} onMouseUp={modalBack} onClick={confirmDeleteMentor} > Да </Button>

						<Button mode="secondary" size="xl" id='2' style={{ backgroundColor: '#fc2c38', color: 'white' }} onClick={modalBack}> Нет </Button>
					</FormLayoutGroup>
				</FormLayout>
			</ModalCard>

			<ModalPage
				id={ROUTES.CHANGEROLE}
				onClose={modalBack}
				header={
					<ModalPageHeader
						left={<PanelHeaderButton onClick={modalBack}><Icon24Cancel /></PanelHeaderButton>}>
						Изменить роль
                    </ModalPageHeader>}>
				<Group >
					<Div>
						<Select onChange={onChangeRole} top="Роль" >
							<option value="ambassador">Амбассадор</option>
							<option value="mentor">Наставник</option>
							<option value="staff">Куратор</option>
						</Select>
					</Div>
					<Cell> </Cell>
					<Div>
						<Button style={{ backgroundColor: '#fc2c38' }} type='submit' size='xl' onClick={onClickForm} onMouseUp={modalBack} >Изменить</Button>
					</Div>
				</Group>
				<Cell> </Cell>
			</ModalPage>
		</ModalRoot>
	)
	return (
		<View activePanel={activePanel} popout={popout} modal={modal}>
			<Profile id='profile' fetchedUser={fetchedUser} go={go} amboEvent={amboEvent} profileInfo={profileInfo} achievementsList={achievementsList} />
			<Badge id='badge' go={go} />
			<Home id='home' fetchedUser={fetchedUser} go={go} setFetchApp={setFetch} />
			<AddEventFirst id='addeventfirst' go={go} />
			<AddEventSecondVnesh id='addeventsecondvnesh' go={go} />
			<Editprofile id='editprofile' fetchedUser={fetchedUser} profileInfo={profileInfo} go={go} setFetchApp={setFetch} />
			<AddEventSecondVnutr id='addeventsecondvnutr' go={go} />
			<Achivements id='achivements' fetchedUser={fetchedUser} go={go} allAmbs={allAmbs} profileInfo={profileInfo} />
			<AddEventSecondHelp id='addeventsecondhelp' go={go} />
			<AddEventVneshOff fetchedUser={fetchedUser} id='addeventvneshoff' go={go} setFetchApp={setFetch} />
			<AddEventVnutrOnl fetchedUser={fetchedUser} id='addeventvnutronl' go={go} setFetchApp={setFetch} />
			<AddEventVnutrOff fetchedUser={fetchedUser} id='addeventvnutroff' go={go} setFetchApp={setFetch} />
			<AddEventHelpOnl fetchedUser={fetchedUser} id='addeventhelponl' go={go} setFetchApp={setFetch} />
			<AddEventHelpOff fetchedUser={fetchedUser} id='addeventhelpoff' go={go} setFetchApp={setFetch} />
			<ProfileForInfo id='profileforinfo' fetchedUser={fetchedUser} go={go} info={info} setFetchApp={setFetch} setActivePanel={setActivePanel} allAmbs={allAmbs} allEvents={allEvents} profileInfo={profileInfo} />
			<EventsForInfo id='eventsforinfo' go={go} info={info} allEvents={allEvents} setFetchApp={setFetch} setPanel={setActivePanel} />
			<ProfileMrg id='profilemrg' fetchedUser={fetchedUser} go={go} profileInfo={profileInfo} allAmbs={allAmbs} allEvents={allEvents} mentors={mentors} />
			<Events id='events' go={go} amboEvent={amboEvent} setFetch={setFetch} setActiveModal={setActiveModal} setEventId={setEventId} />
			<ListAmbassador id='listambassador' go={go} allEvents={allEvents} profileInfo={profileInfo} allAmbs={allAmbs} setAllAmbs={setAllAmbs} searchAmbassadors={searchAmbassadors} mentors={mentors} />
			<ListMentors id='listmentors' go={go} mentors={mentors} setMentorInfo={setMentorInfo} setActiveModal={setActiveModal} />
			<EditProfileForStaff id='editprofileforstaff' go={go} info={info} />
			<EditEvent id='editevent' fetchedUser={fetchedUser} go={go} info={info} setFetchApp={setFetch} profileInfo={profileInfo} />
			<AddUser id='adduser' go={go} setFetchApp={setFetch} mentors={mentors} />
			<Works id='works' />
			<Aliens id='aliens' />
			<Statistics id='statistics' go={go} allAmbs={allAmbs} allEvents={allEvents} mentors={mentors} />
			<Start id='start' fetchedUser={fetchedUser} allAmbs={allAmbs} profileInfo={profileInfo} setActivePanel={setActivePanel} />
		</View>
	);

}

export default App;