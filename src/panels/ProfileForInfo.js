import React from 'react';
import { formatPhoneNumber } from 'react-phone-number-input/input';
import { postRequest } from "./functions/fetch.js";
import { View, ModalRoot, Avatar, ModalPage, ModalPageHeader, Select, Button, RichCell, Group, PanelHeader, Panel, ScreenSpinner, Header, Cell, PanelHeaderButton, Counter, CellButton } from '@vkontakte/vkui';
import Icon16Like from '@vkontakte/icons/dist/16/like';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';



const requestURL = 'https://ambassador-todo.herokuapp.com/access/find'
const eventsRequestURL = 'https://ambassador-todo.herokuapp.com/event/ambassador'


const ProfileForInfo = ({ id, go, info }) => {

    const ROUTES = {
        PROFILEINFO: 'profileInfo',
        INSIDEEVENTS: 'inside',
        OUTSIDEEVENTS: 'outside',
        HELPANDSUPPORT: 'helpAndSupport',
        UPGRADE: 'upgrade'
    };
    const modalBack = () => {
        setActivePanel(null);
    };

    const [isLoading, setIsLoading] = React.useState(true);
    const [user, setUser] = React.useState();
    const [eventsData, setEventsData] = React.useState();
    const [fetch, setFetch] = React.useState(true);
    const [grade, setGrade] = React.useState();
    const [activeModal, setActivePanel] = React.useState(null);

    const onChangeGrade = (event) => {
        setGrade(event.target.value)
    }

    const onClickForm = () => {
        let body = JSON.stringify({
            _id: user._id,
            vkID: user.vkID,
            grade: grade,
        })
        console.log(body)
        postRequest('POST', 'https://ambassador-todo.herokuapp.com/access/update', body)
        setFetch(true)
    }

    const profileModal = (
        <ModalRoot
            activeModal={activeModal}
            onClose={modalBack}
        >
            <ModalPage
                id={ROUTES.PROFILEINFO}
                onClose={modalBack}
                header={
                    <ModalPageHeader
                        left={<PanelHeaderButton onClick={modalBack}><Icon24Cancel /></PanelHeaderButton>}>
                        Подробнее
                    </ModalPageHeader>}>
                <Group>
                    <Cell indicator={user ? user.clothingSize : 'empty'} >
                        Размер одежды
                        </Cell>
                    <Cell indicator={user ? user.personalPostalAddress : 'empty'} >
                        Почтовый адрес (с индексом)
                        </Cell>
                    <Cell indicator={user ? user.latinFullName : 'empty'} >
                        Фамилия и имя по-латински
                        </Cell>
                    <Cell indicator={user ? user.university : 'empty'} >
                        Полное название учебного заведения
                        </Cell>
                    <Cell indicator={user ? user.facultyFull : 'empty'} >
                        Полное название факультета
                        </Cell>
                    <Cell indicator={user ? user.facultyShortly : 'empty'} >
                        Краткое название факультета
                        </Cell>
                    <Cell indicator={user ? user.statusInUniversity : 'empty'} >
                        Статус
                        </Cell>
                    <Cell indicator={user ? user.facultyFull : 'empty'} >
                        Факультет
                        </Cell>
                    <Cell indicator={user ? user.specialty : 'empty'} >
                        Специальность
                        </Cell>
                    <Cell indicator={user ? user.universityPostalAddress : 'empty'} >
                        Адрес учебного заведения
                        </Cell>
                    <Cell indicator={user ? user.rectorFullName : 'empty'} >
                        ФИО ректора
                        </Cell>
                    <Cell indicator={user ? user.rectorPostalAddress : 'empty'} >
                        Email ректора
                        </Cell>


                </Group>

            </ModalPage>

            <ModalPage
                id={ROUTES.INSIDEEVENTS}
                onClose={modalBack}
                header={
                    <ModalPageHeader
                        left={<PanelHeaderButton onClick={modalBack}><Icon24Cancel /></PanelHeaderButton>}>
                        Формат мероприятий
                    </ModalPageHeader>}>
                <Group>
                    <Cell before={<Avatar style={{ background: '#fc2c38' }} size={28} shadow={false}><Icon16Like fill="var(--white)" /></Avatar>}
                        indicator={<Counter >{eventsData ? eventsData.filter(function (i, n) { return (i.participationForm === "Внутреннее" && i.eventForm === "Онлайн") }).length : 'empty'} </Counter>}>
                        Онлайн
                            </Cell>
                    <Cell before={<Avatar style={{ background: '#fc2c38' }} size={28} shadow={false}><Icon16Like fill="var(--white)" /></Avatar>}
                        indicator={<Counter >{eventsData ? eventsData.filter(function (i, n) { return i.participationForm === "Внутреннее" && i.eventForm === "Офлайн" }).length : 'empty'}</Counter>}>
                        Офлайн
                            </Cell>
                </Group>
            </ModalPage>

            <ModalPage
                id={ROUTES.OUTSIDEEVENTS}
                onClose={modalBack}
                header={
                    <ModalPageHeader
                        left={<PanelHeaderButton onClick={modalBack}><Icon24Cancel /></PanelHeaderButton>}>
                        Формат мероприятий
                    </ModalPageHeader>}>
                <Group>
                    <Cell before={<Avatar style={{ background: '#fc2c38' }} size={28} shadow={false}><Icon16Like fill="var(--white)" /></Avatar>}
                        indicator={<Counter >{eventsData ? eventsData.filter(function (i, n) { return (i.participationForm === "Внешнее" && i.eventForm === "Онлайн") }).length : 'empty'}</Counter>}>
                        Онлайн
                            </Cell>
                    <Cell before={<Avatar style={{ background: '#fc2c38' }} size={28} shadow={false}><Icon16Like fill="var(--white)" /></Avatar>}
                        indicator={<Counter >{eventsData ? eventsData.filter(function (i, n) { return i.participationForm === "Внешнее" && i.eventForm === "Офлайн" }).length : 'empty'}</Counter>}>
                        Офлайн
                            </Cell>
                </Group>
            </ModalPage>

            <ModalPage
                id={ROUTES.HELPANDSUPPORT}
                onClose={modalBack}
                header={
                    <ModalPageHeader
                        left={<PanelHeaderButton onClick={modalBack}><Icon24Cancel /></PanelHeaderButton>}>
                        Формат мероприятий
                    </ModalPageHeader>}>
                <Group>
                    <Cell before={<Avatar style={{ background: '#fc2c38' }} size={28} shadow={false}><Icon16Like fill="var(--white)" /></Avatar>}
                        indicator={<Counter >{eventsData ? eventsData.filter(function (i, n) { return (i.participationForm === "Помощь и поддержка" && i.eventForm === "Онлайн") }).length : 'empty'}</Counter>}>
                        Онлайн
                            </Cell>
                    <Cell before={<Avatar style={{ background: '#fc2c38' }} size={28} shadow={false}><Icon16Like fill="var(--white)" /></Avatar>}
                        indicator={<Counter >{eventsData ? eventsData.filter(function (i, n) { return i.participationForm === "Помощь и поддержка" && i.eventForm === "Офлайн" }).length : 'empty'}</Counter>}>
                        Офлайн
                            </Cell>
                </Group>
            </ModalPage>

            <ModalPage
                id={ROUTES.UPGRADE}
                onClose={modalBack}
                header={
                    <ModalPageHeader
                        left={<PanelHeaderButton onClick={modalBack}><Icon24Cancel /></PanelHeaderButton>}>
                        Изменить grade
                    </ModalPageHeader>}>
                <Group >
                    <Select onChange={onChangeGrade} top="Grade" placeholder={user ? user.grade : "empty"} required>
                        <option value="Freshman">Freshman</option>
                        <option value="Trainee">Trainee</option>
                        <option value="Junior">Junior</option>
                        <option value="Middle">Middle</option>
                        <option value="Senior">Senior</option>
                    </Select>
                    <Cell> </Cell>
                    <Button style={{ backgroundColor: '#fc2c38' }} type='submit' size='xl' onClick={onClickForm} onMouseUp={modalBack} >Изменить</Button>
                </Group>
                <Cell> </Cell>
            </ModalPage>

        </ModalRoot>
    )

    if (fetch) {
        postRequest('POST', requestURL, JSON.stringify({ "vkID": info }))
            .then(data => {
                setUser(data[0]);
                postRequest('POST', eventsRequestURL, JSON.stringify({ "ambassador": data[0].fullName }))
                    .then(events => {
                        setEventsData(events)
                        setIsLoading(false)
                        setFetch(false)
                    })
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
        <View activePanel={id} modal={profileModal}>
            <Panel id={id}>

                <PanelHeader
                    left={<PanelHeaderButton style={{ color: "#fc2c38" }} onClick={go} data-to="listambassador" > <Icon24Cancel /></PanelHeaderButton>}>
                    Профиль
            </PanelHeader>
                <div style={{ marginBottom: 100 }}>
                    {
                        <Group>
                            <RichCell
                                href={"https://vk.com/id" + user.vkID}
                                target="_blank">
                                <span style={{ fontSize: '18px' }}>{user.fullName}</span>
                                <br />
                                <span style={{ fontSize: '14px', color: 'grey' }}>{user.grade}</span>
                                <br />
                            </RichCell>
                            <CellButton style={{ color: '#fc2c38' }} onClick={() => { setActivePanel(ROUTES.UPGRADE); }}>Изменить grade</CellButton>
                        </Group>
                    }

                    <Group header={<Header mode="secondary">Статистика</Header>}>
                        <Cell before={<Avatar style={{ background: '#fc2c38' }} size={28} shadow={false}><Icon16Like fill="var(--white)" /></Avatar>}
                            indicator={<Counter key={user._id}>{eventsData.length}</Counter>}>
                            Всего мероприятий
                            </Cell>
                        <Cell onClick={() => { setActivePanel(ROUTES.INSIDEEVENTS); }} before={<Avatar style={{ background: '#fc2c38' }} size={28} shadow={false}><Icon16Like fill="var(--white)" /></Avatar>}
                            indicator={<Counter key={user._id}>{eventsData.filter(function (i, n) { return i.participationForm === "Внутреннее" }).length}</Counter>}>
                            Внутренние мероприятия
                            </Cell>
                        <Cell onClick={() => { setActivePanel(ROUTES.OUTSIDEEVENTS); }} before={<Avatar style={{ background: '#fc2c38' }} size={28} shadow={false}><Icon16Like fill="var(--white)" /></Avatar>}
                            indicator={<Counter key={user._id}>{eventsData.filter(function (i, n) { return i.participationForm === "Внешнее" }).length}</Counter>}>
                            Внешние мероприятия
                            </Cell>
                        <Cell onClick={() => { setActivePanel(ROUTES.HELPANDSUPPORT); }} before={<Avatar style={{ background: '#fc2c38' }} size={28} shadow={false}><Icon16Like fill="var(--white)" /></Avatar>}
                            indicator={<Counter key={user._id}>{eventsData.filter(function (i, n) { return i.participationForm === "Помощь и поддержка" }).length}</Counter>}>
                            Помощь и поддержка
                            </Cell>

                    </Group>
                    <Group header={<Header mode="secondary">Информация о пользователе</Header>}>
                        <Cell indicator={user.town} >
                            Город
                        </Cell>
                        <Cell indicator={user.birthday} >
                            Дата рождения
                        </Cell>
                        <Cell indicator={formatPhoneNumber(user.phoneNumber)} >
                            Номер телефона
                        </Cell>
                        <Cell indicator={user.personalEmail} >
                            Email
                        </Cell>
                        <Cell indicator={user.universityShortly} >
                            Учебное заведение
                        </Cell>
                        <Cell indicator={user.statusInUniversity} >
                            Статус
                        </Cell>
                        <CellButton
                            style={{ color: '#fc2c38' }}
                            onClick={() => { setActivePanel(ROUTES.PROFILEINFO); }}>Дополнительная информация</CellButton>
                    </Group>
                </div>
            </Panel>
        </View>
    )
}


export default ProfileForInfo;