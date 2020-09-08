import React from 'react';
import { postRequest } from "./functions/fetch.js"
import { FormLayout, Input, Group, Button, PanelHeader, Panel, Textarea, Select, PanelHeaderBack } from '@vkontakte/vkui';


const requestURL = 'https://ambassador-todo.herokuapp.com/event'
const userRequestURL = "https://ambassador-todo.herokuapp.com/access/find"

const AddEventVneshOff = ({ fetchedUser, id, go }) => {

	const formatDate = (date) => {
		let newDate = date.slice(8, 10) + '.' + date.slice(5, 7) + '.' + date.slice(0, 4);
		return newDate
	}

	const [user, setUser] = React.useState();
	const [nameEvent, setNameEvent] = React.useState();
	const [place, setPlace] = React.useState();
	const [date, setDate] = React.useState();
	//const [companyRole, setCompanyRole] = React.useState();
	const [links, setLinks] = React.useState();
	const [participants, setParticipants] = React.useState();
	const [eventType, SetEventType] = React.useState();
	const [description, SetDescription] = React.useState();
	const [notes, SetNotes] = React.useState();
	const [callback, setCallback] = React.useState();
	const [fetch, setFetch] = React.useState(true);


if (fetch){
	if (fetchedUser != null) {
		const vkID = JSON.stringify({ "vkID": fetchedUser.id })
		postRequest('POST', userRequestURL, vkID)
			.then(data => {
				setUser(data[0])
				setFetch(false)
			})
			.catch(err => console.log(err))
	}
}
	const onChangeNameEvent = (event) => {
		setNameEvent(event.target.value)
	}

	const onChangePlace = (event) => {
		setPlace(event.target.value)
	}

	const onChangeDate = (event) => {
		setDate(formatDate(event.target.value))
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
		let body = JSON.stringify({
			participationForm: 'Внешнее',
			eventForm: 'Офлайн',
			nameEvent: nameEvent,
			eventPlace: place,
			date: date,
			eventType: eventType,
			description: description,
			//companyRole: companyRole,
			participants: participants,
			participantsCallback: callback,
			uploadsLinks: '',
			publicationLinks: links,
			notes: notes,
			ambassador: user.fullName,
			university: user.university
		})
		postRequest('POST', requestURL, body)
			.catch(err => console.log(err))

	}

	return (

		<Panel id={id}>

			<PanelHeader
				left={<PanelHeaderBack style={{ color: "#fc2c38" }} onClick={go} data-to="addeventsecondvnesh" />}>
				Форма отчета</PanelHeader>
			<Group>
				<FormLayout>
					<Input onChange={onChangeNameEvent} type="text" name="name" top="Название мероприятия" required />
					<Input onChange={onChangeDate} type="date" name="data" top="Дата проведения" required/>
					<Input onChange={onChangePlace} type="text" name="name" top="Место проведения" required/>
					
					<Select  onChange={onChangeEventType} top="Тип мероприятия" placeholder=" " required>
						<option value="Интерактивная площадка">Интерактивная площадка</option>
						<option value="Воркшоп/мастер-класс">Воркшоп/мастер-класс</option>
						<option value="Квиз/конкурс/викторина">Квиз/конкурс/викторина</option>
						<option value="Стенд">Стенд</option>
                        <option value="Выступление">Выступление</option>
                        <option value="Активность для школьников">Активность для школьников</option>
                        <option value="Экскурсия в офис">Экскурсия в офис</option>
					</Select> 
					<Textarea onChange={onChangeDescription} name="description" top="Краткое описание" required/>
					<Input onChange={onChangeCallback} type="text" name="participants" top="Отзывы участников"/>
					<Select  onChange={onChangeParticipants} top="Количество участников" placeholder=" " required>
						<option value="1-29 человек">1-29 человек</option>
						<option value="30-99 человек">30-99 человек</option>
						<option value="100-299 человек">100-299 человек</option>
						<option value="300-999 человек">300-999 человек</option>
						<option value="1000 и более">1000 и более</option>
					</Select> 
					<Textarea onChange={onChangeLinks} name="links" top="Ссылки на посты" />
					<Textarea onChange={onChangeNotes} name="notes" top="Заметки" />

					<Button style={{ backgroundColor: '#fc2c38' }} type='submit' size='xl' onClick={onClickForm} onMouseUp={go} data-to="events">Добавить</Button>
			
				</FormLayout>
			</Group>

		</Panel>
	)
}


export default AddEventVneshOff;