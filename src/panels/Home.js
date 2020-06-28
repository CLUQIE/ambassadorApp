import React from 'react';
import { FormLayout, Div, Input, Group, Button, PanelHeader, Panel, Textarea, Select, File, FormLayoutGroup } from '@vkontakte/vkui';
import Icon24Camera from '@vkontakte/icons/dist/24/camera';


const requestURL = 'https://ambassador-todo.herokuapp.com/event'

function sendRequest(method, url, body=null) {
	const headers = {
		'Content-Type': 'application/json'
	}
	return fetch(url, { method: method, headers: headers }).then(response => {
		return response.text()
	})
}
// body: JSON.stringify(body),

const body = {
	nameEvent: "MeetupForYou",
	date: "01.03.2022",
	participants: 50,
	description: "Hello world",
	ambassador: "Miron",
	university: "RSU",
	estimation: {
		organisation: 4,
		infoSupport: 3,
		materialSupport: 5,
		callback: 3
	}
}


const Home = ({ id, go }) => {

	console.log('Work 2')
	sendRequest('GET', requestURL, body)
		.then(data => console.log(data))
		.catch(err => console.log(err))


	return (

		<Panel id={id}>

			<PanelHeader>Форма отчета</PanelHeader>
			{/* {fetchedUser && */}
			<Group>
				<form action="#" method="GET">
					<FormLayout>
						
						<Input type="text" name="name" top="Название мероприятия" required/>
						<Input type="text" name="university" top="Учебное заведение" />
						<Select top="Формат участиия" placeholder=" ">
              				<option value="infosupport">Информационная поддержка</option>
              				<option value="ownorgananization">Собственная организация</option>
							<option value="partofevent">Часть партнерского мероприятия</option>
           				</Select>
					   	<Select top="Формат мероприятия" placeholder=" " required>
              				<option value="online">Онлайн</option>
              				<option value="yarmarka">Ярмарка вакансий</option>
							<option value="forum">Форум</option>
							<option value="offline">Другие оффлайн</option>
           				</Select>
						<Input type="text" name="data" top="Дата проведения" />
						<Select top="Тип мероприятия" placeholder=" " required>
              				<option value="game">Игра</option>
              				<option value="lecture">Лекция</option>
							<option value="masterclass">Мастер класс</option>
							<option value="stend">Стенд</option>
							<option value="other">Другое</option>
           				</Select>
						<Textarea name="description" top="Краткое описание" />
						<Input type="text" name="participants" top="Роль компании" />
						<Input type="text" name="participants" top="Отзывы участников" />
						<Input type="number" name="participants" top="Количество участников" required/>
						<File style={{ backgroundColor: '#fc2c38' }} top="Фотографии с мероприятия" before={<Icon24Camera />} controlSize="l">
          					Открыть галерею
        				</File>
						<Textarea top="Ссылки" />
						<Textarea top="Заметки" />
					</FormLayout>
					<Div>
						<Button style={{ backgroundColor: '#fc2c38' }} type='submit' size='xl' onClick={go} data-to="events">Добавить</Button>
					</Div>
				</form>
			</Group>
			{/* onClick={go} data-to="events"  */}
		</Panel>
	)
}


export default Home;
