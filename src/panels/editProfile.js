import React from 'react';
import { postRequest } from "./functions/fetch.js"
import { FormLayout, Input, Group, Button, PanelHeader, Panel, PanelHeaderBack, Checkbox, Link, Select, ScreenSpinner } from '@vkontakte/vkui';



const requestURL = 'https://ambassador-todo.herokuapp.com/access/find'




const Editprofile = ({ fetchedUser, id, go }) => {

	if (fetchedUser != null) {
		const vkID = JSON.stringify({ "vkID": fetchedUser.id })
		postRequest('POST', requestURL, vkID)
			.then(data => {
				setUser(data[0])
				setIsLoading(false)
			})
			.catch(err => console.log(err))
		// console.log(data);
	}

	const [isLoading, setIsLoading] = React.useState(true);
	const [user, setUser] = React.useState();
	//  const [middleName, setMiddleName] = React.useState();
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
		setPhone(event.target.value)
	}

	const onChangePersonalEmail = (event) => {
		setPersonalEmail(event.target.value)
	}

	const onChangeBirthday = (event) => {
		setBirthday(event.target.value)
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

	const onClickForm = () => {
		// console.log('onClickForm triggered')
		let body = JSON.stringify({
			_id: user._id,
			vkID: user.vkID,
			avatar: " ",
			achievements: " ",
			phoneNumber: phone,
			birthday: birthday,
			fullName: fullName,
			latinFullName: fullNameLatin,
			personalEmail: personalemail,
			town: town,
			university: university,
			universityPostalAddress: universitypostaladdress,
			rectorFullName: rectorfullname,
			rectorPostalAddress: rectorpostaladdress,
			statusInUniversity: statusinuniversity,
			facultyFull: facultyfull,
			facultyShortly: facultyshortly,
			specialty: specialty,
			personalPostalAddress: personalpostaladdress,
			clothingSize: clothingsize
			// role: "ambassador",
		})
		postRequest('POST', 'https://ambassador-todo.herokuapp.com/access/update', body)
		// .then(data => console.log(data))
		// .catch(err => console.log(err))

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
				left={<PanelHeaderBack style={{ color: "#fc2c38" }} onClick={go} data-to="profile" onMouseUp={go} />}>Редактирование профиля</PanelHeader>
			<Group>
				<FormLayout>
					<Input onChange={onChangeFullName} placeholder={user.fullName} type="text" name="fullname" top="ФИО" required />
					<Input onChange={onChangeFullNameLatin} placeholder={user.latinFullName} type="text" name="fullname" top="ФИО" required />
					<Input onChange={onChangePersonalEmail}  placeholder={user.personalEmail} type="text" name="email" top="Личная почта" required />
					<Input onChange={onChangeBirthday} type="date" placeholder="01.01.1900" name="dateofbirth" top="Дата рождения" required />
					<Input onChange={onChangeTown} placeholder={user.town} type="text" name="city" top="Город" required />
					<Input onChange={onChangeUniversity} type="text" name="university" top="Учебное заведение" required />
					<Input onChange={onChangeUniversityPostalAddress} type="text" name="pochtavuz" top="Почтовый адерес ВУЗа" required />
					<Input onChange={onChangeRectorFullName} type="text" name="fiorector" top="ФИО ректора" required />
					<Input onChange={onChangeRectorPostalAddress} type="text" name="emailrector" top="Электронный адрес ректора" required />
					<Select onChange={onChangeStatusInUniversity} top="Статус в ВУЗе" placeholder=" ">
						<option value="1 курс бакалавриат">1 курс бакалавриат</option>
						<option value="2 курс бакалавриат">2 курс бакалавриат</option>
						<option value="3 курс бакалавриат">3 курс бакалавриат</option>
						<option value="4 курс бакалавриат">4 курс бакалавриат</option>
						<option value="1 курс магистратура">1 курс магистратура</option>
						<option value="2 курс магистратура">2 курс магистратура</option>
						<option value="1 курс бакалавриат">Аспирант</option>
						<option value="сотрудник ВУЗа">Сотрудник ВУЗа</option>
					</Select>
					<Input onChange={onChangeFacultyFull} type="text" name="facultatifull" top="Факультет полный" required />
					<Input onChange={onChangeFacultyShortly} type="text" name="facultatiless" top="Факультет кратко" required />
					<Input onChange={onChangeSpecialty} type="text" name="speciality" top="Специальность" required />
					<Input onChange={onChangePersonalPostalAddress} type="text" name="pochtaadress" top="Почтовый адерс (с индексом)" required />
					<Select onChange={onChangeClothingSize} placeholder={user.clothingSize} top="Размер одежды" placeholder=" ">
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
					<Input onChange={onChangePhone} placeholder="88005553535" pattern="[0-9]{2}\.[0-9]{2}\.[0-9]{4}" type="number" name="phonenumber" top="Телефон" required />
					<Checkbox>Я согласен со всем, что вы <Link>там</Link> понаписали</Checkbox>
					<Button style={{ backgroundColor: '#fc2c38' }} type='submit' size='xl' onClick={onClickForm} onMouseUp={go} data-to="profile">Добавить</Button>
				</FormLayout>
			</Group>

		</Panel>
	)
}


export default Editprofile;