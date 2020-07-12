import React from 'react';
import {postRequest} from "./functions/fetch.js"
import { FormLayout, Input, Group, Button, PanelHeader, Panel, PanelHeaderBack } from '@vkontakte/vkui';



const requestURL = 'https://ambassador-todo.herokuapp.com/access/find'




const Editprofile = ({fetchedUser, id, go }) => {

    if(fetchedUser != null){
        const vkID = JSON.stringify({"vkID":fetchedUser.id})
        postRequest('POST', requestURL, vkID)
		.then(data => {console.log(data); setUser(data[0])})
		.catch(err => console.log(err))
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
		console.log('onClickForm triggered')
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
		.then(data => console.log(data))
		.catch(err => console.log(err))
	
	}


	return (

		<Panel id={id}>

			<PanelHeader
			left={<PanelHeaderBack style={{color: "#fc2c38"}} onClick={go} data-to="profile"/>}>Редактирование профиля</PanelHeader>
			<Group>
					<FormLayout>
						<Input onChange={onChangeMiddleName} type="text" name="dateofbirth" top="Отчество" required />
                        <Input onChange={onChangeUniversity} type="text" name="dateofbirth" top="Учебное заведение" required />
                        <Input onChange={onChangePhone} type="text" name="dateofbirth" top="Телефон" required />
                        <Input onChange={onChangeBirthday} type="text" name="dateofbirth" top="Дата рождения" required />

						<Button style={{ backgroundColor: '#fc2c38' }} type='submit' size='xl' onClick={onClickForm} onMouseUp={go} data-to="profile">Добавить</Button>
					</FormLayout>
			</Group>

		</Panel>
	)
}


export default Editprofile;
