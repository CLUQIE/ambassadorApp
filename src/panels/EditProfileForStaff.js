import React from 'react';
import { formatPhoneNumber } from 'react-phone-number-input/input';
import { postRequest } from "./functions/fetch.js";
import { FormLayout, Input, Group, Button, PanelHeader, Panel, PanelHeaderBack, Select, ScreenSpinner } from '@vkontakte/vkui';

const EditProfileForStaff = ({ info, id, go, mentors }) => {
	const formatDate = (date) => {
		let newDate = date.slice(8, 10) + '.' + date.slice(5, 7) + '.' + date.slice(0, 4);
		return newDate
	}

	const requestURL = 'https://ambassador-todo.herokuapp.com/access/find'

	const [isLoading, setIsLoading] = React.useState(true);
	const [user, setUser] = React.useState();
	const [role, setRole] = React.useState();
	const [mentor, setMentor] = React.useState();
	const [university, setUniversity] = React.useState();
	const [phone, setPhone] = React.useState();
	const [personalemail, setPersonalEmail] = React.useState();
	const [birthday, setBirthday] = React.useState();
	const [universitypostaladdress, setUniversityPostalAddress] = React.useState();
	const [rectorfullname, setRectorFullName] = React.useState();
	const [rectorpostaladdress, setRectorPostalAddress] = React.useState();
	const [statusinuniversity, setStatusInUniversity] = React.useState();
	const [facultyfull, setFacultyFull] = React.useState();
	const [facultyshortly, setFacultyShortly] = React.useState();
	const [specialty, setSpecialty] = React.useState();
	const [personalpostaladdress, setPersonalPostalAddress] = React.useState();
	const [clothingsize, setClothingSize] = React.useState();
	const [fullName, setFullName] = React.useState();
	const [fullNameLatin, setFullNameLatin] = React.useState();
	const [town, setTown] = React.useState();
	const [universityShortly, setUniversityShortly] = React.useState();
	const [fetch, setFetch] = React.useState(true);



	const onChangeUniversityShortly = (event) => {
		setUniversityShortly(event.target.value)
	}

	const onChangeRole = (event) => {
		setRole(event.target.value)
	}

	const onChangeFullNameLatin = (event) => {
		setFullNameLatin(event.target.value)
	}
	const onChangeFullName = (event) => {
		setFullName(event.target.value)
	}

	const onChangeUniversity = (event) => {
		setUniversity(event.target.value)
	}

	const onChangePhone = (event) => {
		setPhone('+7' + event.target.value)
	}

	const onChangePersonalEmail = (event) => {
		setPersonalEmail(event.target.value)
	}

	const onChangeBirthday = (event) => {
		setBirthday(formatDate(event.target.value))
	}

	const onChangeUniversityPostalAddress = (event) => {
		setUniversityPostalAddress(event.target.value)
	}

	const onChangeRectorFullName = (event) => {
		setRectorFullName(event.target.value)
	}

	const onChangeRectorPostalAddress = (event) => {
		setRectorPostalAddress(event.target.value)
	}

	const onChangeStatusInUniversity = (event) => {
		setStatusInUniversity(event.target.value)
	}

	const onChangeFacultyFull = (event) => {
		setFacultyFull(event.target.value)
	}

	const onChangeFacultyShortly = (event) => {
		setFacultyShortly(event.target.value)
	}

	const onChangeSpecialty = (event) => {
		setSpecialty(event.target.value)
	}

	const onChangePersonalPostalAddress = (event) => {
		setPersonalPostalAddress(event.target.value)
	}

	const onChangeClothingSize = (event) => {
		setClothingSize(event.target.value)
	}

	const onChangeTown = (event) => {
		setTown(event.target.value)
	}

	const onChangeMentor = (event) => {
        setMentor(event.target.value)
    }

	const onClickForm = () => {
		let body = JSON.stringify({
			_id: user._id,
			vkID: user.vkID,
			role: role,
			avatar: " ",
			achievements: " ",
			phoneNumber: phone,
			birthday: birthday,
			fullName: fullName,
			mentors: mentor,
			latinFullName: fullNameLatin,
			personalEmail: personalemail,
			town: town,
			university: university,
			universityShortly: universityShortly,
			universityPostalAddress: universitypostaladdress,
			rectorFullName: rectorfullname,
			rectorPostalAddress: rectorpostaladdress,
			statusInUniversity: statusinuniversity,
			facultyFull: facultyfull,
			facultyShortly: facultyshortly,
			specialty: specialty,
			personalPostalAddress: personalpostaladdress,
			clothingSize: clothingsize
		})
		postRequest('POST', 'https://ambassador-todo.herokuapp.com/access/update', body)

	}
	if (fetch) {
		const vkID = JSON.stringify({ "vkID": info })
		postRequest('POST', requestURL, vkID)
			.then(data => {
				setUser(data[0])
				setIsLoading(false)
				setFetch(false)
			})
			.catch(err => console.log(err))
	}

	if (isLoading === true) {
		return (
			<Panel id={id}>
				<div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
					<ScreenSpinner style={{ marginTop: '50%' }} />
				</div>
			</Panel>
		)
	}


	return (

		<Panel id={id}>

			<PanelHeader
				left={<PanelHeaderBack style={{ color: "#2787F5" }} onClick={go} data-to="profileforinfo" onMouseUp={go} data-id={user.vkID} />}>Редактирование профиля</PanelHeader>
			<Group>
				<FormLayout>
					<Input onChange={onChangeFullName} placeholder={user.fullName} type="text" name="fullname" top="Ф.И.О." required />
					<Select onChange={onChangeRole} top="Роль" >
						<option value="ambassador">Амбассадор</option>
						<option value="mentor">Наставник</option>
					</Select>
					<Select onChange={onChangeMentor} top="Наставник" placeholder='Выберите наставника' required>
						{mentors.map((mentor, i) => (<option key={i + Date.now} value={mentor.fullName} >{mentor.fullName}</option>))}
					</Select>
					<Input onChange={onChangePhone} placeholder={formatPhoneNumber(user.phoneNumber)} pattern="[0-9]{2}\.[0-9]{2}\.[0-9]{4}" type="text" name="phonenumber" top="Телефон" bottom="Введи телефон в формате 8005553535 (без 7, +7, 8)" required />
					{/* <Input onChange={onChangeFullNameLatin} placeholder={user.latinFullName} type="text" name="fullname" top="Амбассадорская почта" required />
					<Input onChange={onChangePersonalEmail} placeholder={user.personalEmail} type="text" name="email" top="Личная почта" required />
					 */}<Input onChange={onChangeBirthday} placeholder={user.birthday} type="date" name="dateofbirth" top="Дата рождения" required />
					<Input onChange={onChangeTown} placeholder={user.town} type="text" name="city" top="Город" required />
{/* 					<Input onChange={onChangeUniversity} placeholder={user.university} type="text" name="university" top="Учебное заведение" bottom="Полное наименование" required />
 */}					<Input onChange={onChangeUniversityShortly} placeholder={user.universityShortly} type="text" name="university" top="Учебное заведение" bottom="Краткое наименование" required />
					{/* <Input onChange={onChangeUniversityPostalAddress} placeholder={user.universityPostalAddress} bottom="С индексом для отправки писем" type="text" name="pochtavuz" top="Почтовый адрес вуза" required />
					<Input onChange={onChangeRectorFullName} placeholder={user.rectorFullName} type="text" name="fiorector" top="Ф.И.О. ректора" required />
					<Input onChange={onChangeRectorPostalAddress} placeholder={user.rectorPostalAddress} ype="text" name="emailrector" top="Электронный адрес ректора" required />
					 */}<Select onChange={onChangeStatusInUniversity} placeholder={user.statusInUniversity} bottom="Курс, на который ты уже перешёл" top="Статус в вузе" >
						<option value="1 курс бакалавриат">1 курс бакалавриат</option>
						<option value="2 курс бакалавриат">2 курс бакалавриат</option>
						<option value="3 курс бакалавриат">3 курс бакалавриат</option>
						<option value="4 курс бакалавриат">4 курс бакалавриат</option>
						<option value="5 курс бакалавриат">5 курс бакалавриат</option>
						<option value="1 курс магистратура">1 курс магистратура</option>
						<option value="2 курс магистратура">2 курс магистратура</option>
						<option value="1 курс специалитет">1 курс специалитет</option>
						<option value="2 курс специалитет">2 курс специалитет</option>
						<option value="3 курс специалитет">3 курс специалитет</option>
						<option value="4 курс специалитет">4 курс специалитет</option>
						<option value="5 курс специалитет">5 курс специалитет</option>
						<option value="Аспирант">Аспирант</option>
						<option value="Сотрудник вуза">Сотрудник вуза</option>
					</Select>
					{/* <Input onChange={onChangeFacultyFull} placeholder={user.facultyFull} bottom="Полное наименование" type="text" name="facultatifull" top="Факультет" required />
					<Input onChange={onChangeFacultyShortly} placeholder={user.facultyShortly} bottom="Краткое наименование" type="text" name="facultatiless" top="Факультет" required />
					 */}<Input onChange={onChangeSpecialty} placeholder={user.specialty} type="text" name="speciality" top="Специальность" required />
					<Input onChange={onChangePersonalPostalAddress} placeholder={user.personalPostalAddress} bottom="Куда присылать мерч и другие посылки" type="text" name="pochtaadress" top="Твой почтовый адрес (с индексом)" required />
					<Select onChange={onChangeClothingSize} placeholder={user.clothingSize} top="Размер одежды (для бомбера)" >
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
					<Button style={{ backgroundColor: '#2787F5' }} type='submit' size='xl' onClick={onClickForm} onMouseUp={go} data-to="profileforinfo" data-id={user.vkID}>Добавить</Button>
				</FormLayout>
			</Group>

		</Panel>
	)
}


export default EditProfileForStaff;