import React from 'react';
import {postRequest} from "./functions/fetch.js"
import { FormLayout, Input, Group, Button, PanelHeader, Panel, Textarea, Select, PanelHeaderBack } from '@vkontakte/vkui';


const requestURL = 'https://ambassador-todo.herokuapp.com/event'
const userRequestURL = "https://ambassador-todo.herokuapp.com/access/find"





const Home = ({fetchedUser, id, go }) => {

 const [user, setUser] = React.useState();
 const [nameEvent, setNameEvent] = React.useState();
 const [place, setPlace] = React.useState();
 const [date, setDate] = React.useState();
 const [companyRole, setCompanyRole] = React.useState();
 const [links, setLinks] = React.useState();
 const [participants, setParticipants] = React.useState();
 const [participationForm, SetParticipationForm] = React.useState();
 const [eventForm, SetEventForm] = React.useState();
 const [eventType, SetEventType] = React.useState();
 const [description, SetDescription] = React.useState();
 const [notes, SetNotes] = React.useState();
 const [callback, setCallback] = React.useState();

 if (fetchedUser != null) {
	const vkID = JSON.stringify({ "vkID": fetchedUser.id })
	postRequest('POST', userRequestURL, vkID)
		.then(data => {
		setUser(data[0])
	})
		.catch(err => console.log(err))
	}

	// console.log(user)

	const onChangeNameEvent = (event) => {
		setNameEvent(event.target.value)
	}

	const onChangePlace = (event) => {
		setPlace(event.target.value)
	}

	const onChangeDate = (event) => {
		setDate(event.target.value)
	}

	const onChangeCompanyRole = (event) => {
		setCompanyRole(event.target.value)
	}
	const onChangeCallback = (event) => {
		setCallback(event.target.value)
	}

	const onChangeParticipants = (event) => {
		setParticipants(event.target.value)
	}

	const onChangeLinks = (event) => {
		setLinks(event.target.value)
	}

	const onChangeParticipationForm = (event) => {
		SetParticipationForm(event.target.value)
	}

	const onChangeEventForm = (event) => {
		SetEventForm(event.target.value)
	}

	const onChangeEventType = (event) => {
		SetEventType(event.target.value)
	}

	const onChangeDescription = (event) => {
		SetDescription(event.target.value)
	}

	const onChangeNotes = (event) => {
		SetNotes(event.target.value)
	}

	const onClickForm = () => {
		// console.log('onClickForm triggered')
		// console.log(participationForm)
		let body = JSON.stringify({
			participationForm: participationForm ,
			eventForm: eventForm,
			nameEvent: nameEvent,
			eventPlace: place, 
			date: date,
			eventType: eventType,
			description: description,
			companyRole: companyRole,
			participants: participants,
			participantsCallback: callback,
			uploadsLinks: '',
			publicationLinks: links,
			notes: notes,
			ambassador: user.fullName,
			university: user.university
		   })
		postRequest('POST', requestURL, body)
		// .then(data => console.log(data))
		.catch(err => console.log(err))
	
	}
	
	
	

	// console.log(fetchedUser)

	return (

		<Panel id={id}>

			<PanelHeader
			left={<PanelHeaderBack style={{color: "#fc2c38"}} onClick={go} data-to="events"/>}
			>Форма отчета</PanelHeader>
			{/* {fetchedUser && */}
			<Group>
					<FormLayout>
						{/* <Input type="text" name="ambassador" top="Имя Фамилия" required 
							status={value ? 'valid' : 'error'}
							bottom={value ? '' : 'Введите обязательное поле!'}
						/> */}
						<Input onChange={onChangeNameEvent} type="text" name="name" top="Название мероприятия" required/>
						<Input onChange={onChangePlace} type="text" name="university" top="Место проведения" />
						<Select onChange={onChangeParticipationForm} top="Формат участия" placeholder=" ">
              				<option value="Информационная поддержка">Информационная поддержка</option>
              				<option value="Собственная организация">Собственная организация</option>
							<option value="Часть партнерского мероприятия">Часть партнерского мероприятия</option>
           				</Select>
					   	<Select onChange={onChangeEventForm} top="Формат мероприятия" placeholder=" ">
              				<option value="Онлайн">Онлайн</option>
              				<option value="Ярмарка вакансий">Ярмарка вакансий</option>
							<option value="Форум">Форум</option>
							<option value="Другие оффлайн">Другие оффлайн</option>
           				</Select>
						<Input onChange={onChangeDate} type="date" name="data" top="Дата проведения" />
						<Select onChange={onChangeEventType} top="Тип мероприятия" placeholder=" " >
              				<option value="Игра">Игра</option>
              				<option value="Лекция">Лекция</option>
							<option value="Мастер класс">Мастер класс</option>
							<option value="Стенд">Стенд</option>
							<option value="Другое">Другое</option>
           				</Select>
						<Textarea onChange={onChangeDescription} name="description" top="Краткое описание" />
						<Input onChange={onChangeCompanyRole} type="text" name="participants" top="Роль компании" />
						<Input onChange={onChangeCallback} type="text" name="participants" top="Отзывы участников" />
						<Input onChange={onChangeParticipants} type="number" name="participants" top="Количество участников" />
						{/* <File style={{ backgroundColor: '#fc2c38' }} top="Фотографии с мероприятия" before={<Icon24Camera />} controlSize="l">
          					Открыть галерею
        				</File> */}
						<Textarea onChange={onChangeLinks} name="links" top="Ссылки на посты" />
						<Textarea onChange={onChangeNotes} name="notes" top="Заметки" />

						<Button style={{ backgroundColor: '#fc2c38' }} type='submit' size='xl' onClick={onClickForm} onMouseUp={go} data-to="events">Добавить</Button>
					</FormLayout>
			</Group>

		</Panel>
	)
}


export default Home;
