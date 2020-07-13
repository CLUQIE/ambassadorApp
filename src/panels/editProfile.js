import React from 'react';
import {postRequest} from "./functions/fetch.js"
import { FormLayout, Input, Group, Button, PanelHeader, Panel, PanelHeaderBack, Checkbox, Link, Select } from '@vkontakte/vkui';



const requestURL = 'https://ambassador-todo.herokuapp.com/access/find'




const Editprofile = ({fetchedUser, id, go }) => {

    if(fetchedUser != null){
        const vkID = JSON.stringify({"vkID":fetchedUser.id})
        postRequest('POST', requestURL, vkID)
		.then(data => { setUser(data[0])})
		.catch(err => console.log(err))
		// console.log(data);
    }

 const [user, setUser] = React.useState();
 const [middleName, setMiddleName] = React.useState();
 const [university, setUniversity] = React.useState();
 const [phone, setPhone] = React.useState();
 const [birthday, setBirthday] = React.useState();


	const onChangeMiddleName = (event) => {
		setMiddleName(event.target.value)
	}

	const onChangeUniversity = (event) => {
		setUniversity(event.target.value)
	}

	const onChangePhone = (event) => {
		setPhone(event.target.value)
	}

	const onChangeBirthday = (event) => {
		setBirthday(event.target.value)
	}

	const onClickForm = () => {
		// console.log('onClickForm triggered')
		let body = JSON.stringify({
            _id: user._id,
            vkID: user.vkID,
            role: "ambassador",
            avatar: " ",
            achievements: "Никто не пришел!,Встреча с подписчиками!,Купил конфеты всем!",
            phoneNumber: phone,
            birthday: birthday,
            fullName: fetchedUser.last_name+' '+fetchedUser.first_name+' '+middleName,
            university: university
        })
		postRequest('POST', 'https://ambassador-todo.herokuapp.com/access/update', body)
		// .then(data => console.log(data))
		// .catch(err => console.log(err))
	
	}


	return (

		<Panel id={id}>

			<PanelHeader
			left={<PanelHeaderBack style={{color: "#fc2c38"}} onClick={go} data-to="profile"/>}>Редактирование профиля</PanelHeader>
			<Group>
					<FormLayout>
						<Input value = {fetchedUser.last_name} type="text" name="lastname" top="Фамилия" required />
						<Input value = {fetchedUser.first_name} type="text" name="firstname" top="Имя" required />
						<Input onChange={onChangeMiddleName} type="text" name="middlename" top="Отчество" required />
						<Input type="text" name="lastnamelat" top="Фамилия на латинице" required />
						<Input type="text" name="firstnamelat" top="Имя на латинице" required />
						<Input type="text" name="email" top="Личная почта" required />

						
						<Input onChange={onChangeBirthday} type="date" defaultValue="01.01.1900" name="dateofbirth" top="Дата рождения" required />


						
						<Input value = {fetchedUser.city.title} type="text" name="city" top="Город" required />
                        <Input onChange={onChangeUniversity} type="text" name="university" top="Учебное заведение" required />
						<Input type="text" name="pochtavuz" top="Почтовый адерес ВУЗа" required />
						<Input type="text" name="fiorector" top="ФИО ректора" required />
						<Input type="text" name="emailrector" top="Электронный адрес ректора" required />
						<Select  top="Статус в ВУЗе" placeholder=" ">
              				<option value="1 курс бакалавриат">1 курс бакалавриат</option>
              				<option value="2 курс бакалавриат">2 курс бакалавриат</option>
							<option value="3 курс бакалавриат">3 курс бакалавриат</option>
							<option value="4 курс бакалавриат">4 курс бакалавриат</option>
							<option value="1 курс магистратура">1 курс магистратура</option>
							<option value="2 курс магистратура">2 курс магистратура</option>
							<option value="1 курс бакалавриат">Аспирант</option>
							<option value="сотрудник ВУЗа">Сотрудник ВУЗа</option>
           				</Select>
						<Input type="text" name="facultatifull" top="Факультет полный" required />
						<Input type="text" name="facultatiless" top="Факультет кратко" required />
						<Input type="text" name="speciality" top="Специальность" required />
						<Input type="text" name="pochtaadress" top="Почтовый адерс (с индексом)" required />
						<Select  top="Размер одежды" placeholder=" ">
              				<option value="XS мужской">XS мужской</option>
              				<option value="S мужской">S мужской</option>
							<option value="M мужской">M мужской</option>
							<option value="L мужской">L мужской</option>
							<option value="XL мужской">XL мужской</option>
							<option value="XXL мужской">XXL мужской</option>
							<option value="XXS женский">XXS женский</option>
							<option value="XS женский">XS женский</option>
							<option value="S женский">S женский</option>
							<option value="M женский">M женский</option>
							<option value="L женский">L женский</option>
							<option value="XL женский">XL женский</option>
           				</Select>
                        <Input onChange={onChangePhone}  defaultValue="+7 123 344 15 48" pattern="[0-9]{2}\.[0-9]{2}\.[0-9]{4}" type="text" name="phonenumber" top="Телефон" required />
						<Checkbox>Я согласен со всем, что вы <Link>там</Link> понаписали</Checkbox>
						<Button style={{ backgroundColor: '#fc2c38' }} type='submit' size='xl' onClick={onClickForm} onMouseUp={go} data-to="profile">Добавить</Button>
					</FormLayout>
			</Group>

		</Panel>
	)
}


export default Editprofile;