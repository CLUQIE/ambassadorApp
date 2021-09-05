import React from 'react';
import { postRequest } from "./functions/fetch.js";
import { FormLayout, Input, Group, Button, PanelHeader, Panel, PanelHeaderBack, Select } from '@vkontakte/vkui';

const AddUser = ({ id, go, setFetchApp, mentors }) => {

    const [vk, setVk] = React.useState();
    const [fullName, setFullName] = React.useState();
    const [town, setTown] = React.useState();
    const [role, setRole] = React.useState('ambassador');
    const [grade, setGrade] = React.useState('');
    const [birthday, setBirthday] = React.useState();
    const [mentor, setMentor] = React.useState('');
    const [universityShortly, setUniversityShortly] = React.useState();

    const checkDisabled = () => {
        if (role === 'ambassador') {
            return grade.length === 0 || !vk || !fullName || mentor.length === 0
        } else if (role === 'mentor') {
            return !vk || !fullName
        } if (role === 'staff') {
            return !vk || !fullName
        } else {
            return false
        }
    }

    const onChangeUniversityShortly = (event) => {
        setUniversityShortly(event.target.value)
    }

    const onChangeRole = (event) => {
        setRole(event.target.value)
    }
    const onChangeFullName = (event) => {
        setFullName(event.target.value)
    }

    const onChangeGrade = (event) => {
        setGrade(event.target.value)
    }

    const onChangeBirthday = (event) => {
        setBirthday(event.target.value)
    }

    const onChangeVk = (event) => {
        setVk(event.target.value)
    }

    const onChangeMentor = (event) => {
        setMentor(event.target.value)
    }

    const onChangeTown = (event) => {
        setTown(event.target.value)
    }

    const onClickForm = () => {
        let body = JSON.stringify({
            vkID: vk,
            avatar: " ",
            achievements: " ",
            fullName: fullName,
            mentor: mentor,
            grade: grade,
            role: role,
            generation: "4",
            eduEvents: [],
            coins: '0'
        })
        postRequest('POST', 'https://ambassador-todo.herokuapp.com/access', body)
            .then(setFetchApp(true))

    }

    return (

        <Panel id={id}>

            <PanelHeader
                left={<PanelHeaderBack style={{ color: "#2787F5" }} onClick={go} data-to="profilemrg" />}>Добавление пользователя</PanelHeader>
            <Group>
                <FormLayout>
                    <Select onChange={onChangeRole} top="Роль" >
                        <option value="ambassador">Амбассадор</option>
                        <option value="mentor">Наставник</option>
                        <option value="staff">Куратор</option>
                    </Select>
                    <Input onChange={onChangeVk} type="text" name="fullname" top="id Вконтакте" bottom="Только цифры" required />
                    <Input onChange={onChangeFullName} type="text" name="fullname" top="Ф.И.О." required />
                    {role === 'ambassador' ?
                        <Select onChange={onChangeGrade} top="Grade" placeholder='Выберите grade' required>
                            <option value="Freshman">Freshman</option>
                            <option value="Trainee">Trainee</option>
                            <option value="Junior">Junior</option>
                            <option value="Middle">Middle</option>
                            <option value="Senior">Senior</option>
                        </Select> : null}
                    {role === 'ambassador' ?
                        <Select onChange={onChangeMentor} top="Наставник" placeholder='Выберите наставника' required>
                            {mentors.map((mentor, i) => (<option key={i + Date.now} value={mentor.fullName} >{mentor.fullName}</option>))}
                        </Select> : null}
                    <Button style={{ backgroundColor: '#2787F5' }} disabled={checkDisabled()} type='submit' size='xl' onClick={onClickForm} onMouseUp={go} data-to="profilemrg">Добавить</Button>
                </FormLayout>
            </Group>

        </Panel>
    )
}


export default AddUser;