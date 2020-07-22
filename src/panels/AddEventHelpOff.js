import React from 'react';
import { postRequest } from "./functions/fetch.js"
import { FormLayout, Input, Group, Button, PanelHeader, Panel, Textarea, Select, PanelHeaderBack } from '@vkontakte/vkui';


const requestURL = 'https://ambassador-todo.herokuapp.com/event'
const userRequestURL = "https://ambassador-todo.herokuapp.com/access/find"

const AddEventHelpOff = ({ fetchedUser, id, go }) => {
	const formatDate = (date) =>{
		let newDate = date.slice(8,10) + date.slice(4,8) + date.slice(0,4);
		return newDate
		}

	const [user, setUser] = React.useState();
	const [nameEvent, setNameEvent] = React.useState();
	const [place, setPlace] = React.useState();
	const [date, setDate] = React.useState();
	const [companyRole, setCompanyRole] = React.useState();
	const [links, setLinks] = React.useState();
	const [participants, setParticipants] = React.useState();
	// const [ SetParticipationForm] = React.useState();
	// participationForm
	// eventForm
	// const [ SetEventForm] = React.useState();
	const [eventType, SetEventType] = React.useState();
	const [description, SetDescription] = React.useState();
	const [notes, SetNotes] = React.useState();
	const [callback, setCallback] = React.useState();
	const [fetch, setFetch] = React.useState(true);


	if (fetch) {
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

	// console.log(user)

	const onChangeNameEvent = (event) => {
		setNameEvent(event.target.value)
	}

	const onChangePlace = (event) => {
		setPlace(event.target.value)
	}

	const onChangeDate = (event) => {
		setDate(formatDate(event.target.value))
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

	// const onChangeParticipationForm = (event) => {
	// 	SetParticipationForm(event.target.value)
	// }

	// const onChangeEventForm = (event) => {
	// 	SetEventForm(event.target.value)
	// }

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
			participationForm: 'Помощь и поддержка',
			eventForm: 'Офлайн',
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


	// ПОМОЩЬ МЕРОПРИЯТИЕ ОФФЛАЙН

	// console.log(fetchedUser)

	return (

		<Panel id={id}>

			<PanelHeader
				left={<PanelHeaderBack style={{ color: "#fc2c38" }} onClick={go} data-to="addeventsecondhelp" />}>
				Форма отчета</PanelHeader>
			{/* {fetchedUser && */}
			<Group>
				<FormLayout>
					<Input onChange={onChangeNameEvent} type="text" name="name" top="Название мероприятия" required />
					<Input onChange={onChangeDate} type="date" name="data" top="Дата проведения" required/>
					<Input onChange={onChangePlace} type="text" name="name" top="Место проведения" required />

					<Select onChange={onChangeEventType} top="Тип мероприятия" placeholder=" " required>
						<option value="Выступление на мероприятиях (День ИТ-знаний, Проектория, Цифровой прорыв, Урок цифры)">Выступление на мероприятиях (День ИТ-знаний, Проектория, Цифровой прорыв, Урок цифры)</option>
						<option value="Волонтерство">Волонтерство</option>
						<option value="Организация мероприятия">Организация мероприятия</option>
                        <option value="Информирование">Информирование</option>
					</Select> 
					<Textarea onChange={onChangeDescription} name="description" top="Краткое описание" required/>
					<Select onChange={onChangeCompanyRole} top="Роль компании" placeholder=" " required>
						<option value="Организатор">Организатор</option>
						<option value="Партнер">Партнер</option>
						<option value="Участник">Участник</option>
						<option value="Затрудняюсь ответить">Затрудняюсь ответить</option>
					</Select>					
					<Input onChange={onChangeCallback} type="text" name="participants" top="Отзывы участников" />
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


export default AddEventHelpOff;
