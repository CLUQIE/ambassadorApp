import React from 'react';
import { postRequest } from "./functions/fetch.js";
import { excelReport } from "./functions/excelReport";
import { profileReport } from "./functions/profileReport";
import { View, Avatar, Counter, ModalPage, Select, PanelHeaderButton, RichCell, Div, Group, PanelHeader, Panel, ScreenSpinner, Epic, Tabbar, TabbarItem, Header, Cell, Button, ModalRoot, ModalCard, ModalPageHeader, FormLayoutGroup, FormLayout, CellButton } from '@vkontakte/vkui';
import Icon28UserOutline from '@vkontakte/icons/dist/28/user_outline';
import Icon28Users3Outline from '@vkontakte/icons/dist/28/users_3_outline';
import Icon16Like from '@vkontakte/icons/dist/16/like';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const requestURL = 'https://ambassador-todo.herokuapp.com/access/find'
const eventsRequestURL = 'https://ambassador-todo.herokuapp.com/event/ambassador'
const allEventsRequestURL = 'https://ambassador-todo.herokuapp.com/event'

const ROUTES = {
    CONFIRM: 'confirm',
    CONFIRMPROFILES: 'confirmProfiles',
    ATTENTION: 'attention',
    EVENTSREPORT: 'eventsReport',
    INSIDEEVENTS: 'inside',
    OUTSIDEEVENTS: 'outside',
    HELPANDSUPPORT: 'helpAndSupport',
};

const ProfileMrg = ({ fetchedUser, id, go }) => {

    const [isLoading, setIsLoading] = React.useState(true);
    const [user, setUser] = React.useState();
    const [reportUsers, setReportUsers] = React.useState();
    const [eventsData, setEventsData] = React.useState();
    const [fetch, setFetch] = React.useState(true);
    const [activeModal, setActivePanel] = React.useState(null);
    const [amboQuantity, setAmboQuantity] = React.useState();
    const [eventQuantity, setEventQuantity] = React.useState();
    const [month, setMonth] = React.useState();

    const onChangeMonth = (event) => {
        setMonth(event.target.value)
    }

    const confirmProfiles = () => {
        profileReport(reportUsers)
}

const confirm = () => {
    let filtredEvents = eventsData.filter(function (i, n) { return (i.date) })
    if (eventsData.length && filtredEvents.length !== 0) {
        if (month === "all") {
            filtredEvents = eventsData
        }
        else {
            filtredEvents = eventsData.filter(function (i, n) { return (i.date[3] + i.date[4] === month) })
        }
        excelReport(filtredEvents)
    }
    else {
        setActivePanel(ROUTES.ATTENTION);
    }
}

const modalBack = () => {
    setActivePanel(null);
}

const modal = (
    <ModalRoot
        activeModal={activeModal}
        onClose={modalBack}
    >
        <ModalCard
            id={ROUTES.CONFIRM}
            onClose={modalBack}
            header={
                <ModalPageHeader>
                    Скачать файл?
            </ModalPageHeader>
            }
        >
            <FormLayout>
                <FormLayoutGroup>
                    <Button mode="secondary" size="xl" id='1' style={{ backgroundColor: '#fc2c38', color: 'white' }} onMouseUp={modalBack} onClick={confirm} > Да </Button>

                    <Button mode="secondary" size="xl" id='2' style={{ backgroundColor: '#fc2c38', color: 'white' }} onClick={modalBack}> Нет </Button>
                </FormLayoutGroup>
            </FormLayout>


        </ModalCard>

        <ModalCard
            id={ROUTES.ATTENTION}
            onClose={modalBack}
            header={
                <Cell multiline>
                    Мероприятия отсутствуют!
                    </Cell>
            }

        ><Cell></Cell>
        </ModalCard>

        <ModalPage
            id={ROUTES.INSIDEEVENTS}
            onClose={modalBack}
            header={
                <ModalPageHeader
                    left={<PanelHeaderButton onClick={() => { setActivePanel(ROUTES.EVENTSREPORT); }}><Icon24Back style={{ color: 'rgb(176,182,192)' }} /></PanelHeaderButton>}>
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
                <Cell></Cell>
            </Group>
        </ModalPage>

        <ModalPage
            id={ROUTES.OUTSIDEEVENTS}
            onClose={modalBack}
            header={
                <ModalPageHeader
                    left={<PanelHeaderButton onClick={() => { setActivePanel(ROUTES.EVENTSREPORT); }}><Icon24Back style={{ color: 'rgb(176,182,192)' }} /></PanelHeaderButton>}>
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
                <Cell></Cell>
            </Group>
        </ModalPage>

        <ModalPage
            id={ROUTES.HELPANDSUPPORT}
            onClose={modalBack}
            header={
                <ModalPageHeader
                    left={<PanelHeaderButton onClick={() => { setActivePanel(ROUTES.EVENTSREPORT); }}><Icon24Back style={{ color: 'rgb(176,182,192)' }} /></PanelHeaderButton>}>
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
                <Cell></Cell>
            </Group>
        </ModalPage>

        <ModalPage
            id={ROUTES.EVENTSREPORT}
            onClose={modalBack}
            header={
                <ModalPageHeader
                    left={<PanelHeaderButton onClick={modalBack}><Icon24Cancel /></PanelHeaderButton>}>
                    Статистика мероприятий
                    </ModalPageHeader>}>
            <Group>
                <Cell onClick={() => { setActivePanel(ROUTES.INSIDEEVENTS); }} before={<Avatar style={{ background: '#fc2c38' }} size={28} shadow={false}><Icon16Like fill="var(--white)" /></Avatar>}
                    indicator={<Counter>{eventsData ? eventsData.filter(function (i, n) { return i.participationForm === "Внутреннее" }).length : 'empty'}</Counter>}>
                    Внутренние мероприятия
                            </Cell>
                <Cell onClick={() => { setActivePanel(ROUTES.OUTSIDEEVENTS); }} before={<Avatar style={{ background: '#fc2c38' }} size={28} shadow={false}><Icon16Like fill="var(--white)" /></Avatar>}
                    indicator={<Counter>{eventsData ? eventsData.filter(function (i, n) { return i.participationForm === "Внешнее" }).length : 'empty'}</Counter>}>
                    Внешние мероприятия
                            </Cell>
                <Cell onClick={() => { setActivePanel(ROUTES.HELPANDSUPPORT); }} before={<Avatar style={{ background: '#fc2c38' }} size={28} shadow={false}><Icon16Like fill="var(--white)" /></Avatar>}
                    indicator={<Counter>{eventsData ? eventsData.filter(function (i, n) { return i.participationForm === "Помощь и поддержка" }).length : 'empty'}</Counter>}>
                    Помощь и поддержка
                            </Cell>
                <Cell></Cell>
            </Group>
        </ModalPage>

        <ModalCard
            id={ROUTES.CONFIRMPROFILES}
            onClose={modalBack}
            header={
                <ModalPageHeader>
                    Скачать информацию?
            </ModalPageHeader>
            }
        >
            <FormLayout>
                <FormLayoutGroup>
                    <Button mode="secondary" size="xl" id='1' style={{ backgroundColor: '#fc2c38', color: 'white' }} onMouseUp={modalBack} onClick={confirmProfiles} > Да </Button>

                    <Button mode="secondary" size="xl" id='2' style={{ backgroundColor: '#fc2c38', color: 'white' }} onClick={modalBack}> Нет </Button>
                </FormLayoutGroup>
            </FormLayout>


        </ModalCard>

    </ModalRoot>
)

if (fetch && fetchedUser != null) {
    const vkID = JSON.stringify({ "vkID": fetchedUser.id })
    postRequest('POST', requestURL, vkID)
        .then(data => {
            setUser(data[0]);
            if (data[0].role === 'mentor') {
                postRequest('POST', requestURL, JSON.stringify({ "mentor": data[0].fullName }))
                    .then(ambassador => {
                        setAmboQuantity(ambassador.length)
                        let eventsForMentors = []
                        for (let i = 0; i < ambassador.length; i++) {
                            postRequest('POST', eventsRequestURL, JSON.stringify({ 'ambassador': ambassador[i].fullName }))
                                .then(events => {
                                    for (let i = 0; i < events.length; i++) {
                                        eventsForMentors.push(events[i])
                                    }
                                    setEventsData(eventsForMentors)
                                    setEventQuantity(eventsForMentors.length)
                                })
                        }
                        setIsLoading(false)
                        setFetch(false)
                    })
            }
            if (data[0].role === 'staff') {
                postRequest('POST', requestURL, JSON.stringify({ "role": "ambassador" }))
                    .then(ambassador => {
                        setAmboQuantity(ambassador.length)
                        let sortUser = [];
                        for (let i = 0; i < ambassador.length; i++) {
                            sortUser.push({
                                fullName: ambassador[i].fullName,
                                _id: ambassador[i]._id,
                                vkID: ambassador[i].vkID,
                                role: ambassador[i].role,
                                avatar: ambassador[i].avatar,
                                achievements: ambassador[i].achievements,
                                town: ambassador[i].town,
                                birthday: ambassador[i].birthday,
                                grade: ambassador[i].grade,
                                phoneNumber: ambassador[i].phoneNumber,
                                amboEmail: ambassador[i].amboEmail,
                                personalEmail: ambassador[i].personalEmail,
                                mentor: ambassador[i].mentor,
                                university: ambassador[i].university,
                                specialty: ambassador[i].specialty,
                                statusInUniversity: ambassador[i].statusInUniversity,
                                universityShortly: ambassador[i].universityShortly,
                                universityPostalAddress: ambassador[i].universityPostalAddress,
                                rectorFullName: ambassador[i].rectorFullName,
                                rectorPostalAddress: ambassador[i].rectorPostalAddress,
                                facultyFull: ambassador[i].facultyFull,
                                facultyShortly: ambassador[i].facultyShortly,
                                personalPostalAddress: ambassador[i].personalPostalAddress,
                                clothingSize: ambassador[i].clothingSize,
                                __v: ambassador[i].__v,
                            })
                        }
                        setReportUsers(sortUser)
                        postRequest('GET', allEventsRequestURL)
                            .then(events => {
                                setEventsData(events)
                                setEventQuantity(events.length)
                                setIsLoading(false)
                                setFetch(false)
                            })
                    })
            }
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
    <View activePanel={id} modal={modal} >
        <Panel id={id}>
            <PanelHeader>
                Профиль
                </PanelHeader>
            <Group>
                <RichCell
                    href={"https://vk.com/id" + user.vkID}
                    target="_blank"
                    before={<Avatar size={72} src={fetchedUser.photo_100} />}>
                    <span style={{ fontSize: '18px' }}>{user.fullName}</span>
                    <br />
                    <span style={{ fontSize: '14px', color: 'grey' }}>{user.role}</span>
                    <br />
                </RichCell>
            </Group>
            <Group style={{ marginBottom: 100 }} header={<Header mode="secondary">Информация о амбассадорах</Header>}>
                <Cell indicator={amboQuantity} >
                    Количество амбассадоров
                        </Cell>
                <Cell indicator={eventQuantity} >
                    Проведено мероприятий
                        </Cell>
                <CellButton style={{ color: "#fc2c38" }} onClick={() => { setActivePanel(ROUTES.EVENTSREPORT); }}>Статистика мероприятий</CellButton>
                {navigator.appVersion.indexOf("Win")!==-1 || navigator.appVersion.indexOf("Mac")!==-1 ? <Group header={<Header mode="secondary">Статистика Excel</Header>}>
                    <Div>
                        <Select onChange={onChangeMonth} placeholder="Выберите месяц мероприятий" bottom="Выберите месяц" >
                            <option value="09">Сентябрь</option>
                            <option value="10">Октябрь</option>
                            <option value="11">Ноябрь</option>
                            <option value="12">Декабрь</option>
                            <option value="01">Январь</option>
                            <option value="02">Февраль</option>
                            <option value="03">Март</option>
                            <option value="04">Апрель</option>
                            <option value="05">Май</option>
                            <option value="all">За все время</option>
                        </Select>
                    </Div>
                    <CellButton style={{ color: "#fc2c38" }} onClick={() => { setActivePanel(ROUTES.CONFIRM); }}>Скачать отчет</CellButton>
                </Group> : null}
                {user.role === 'staff' && ( navigator.appVersion.indexOf("Win")!==-1 || navigator.appVersion.indexOf("Mac")!==-1) ? <Group header={<Header mode="secondary">Информация из профиля в Excel</Header>}>
                    <CellButton style={{ color: "#fc2c38" }} onClick={() => { setActivePanel(ROUTES.CONFIRMPROFILES); }}>Скачать информацию</CellButton>
                </Group> : null}
            </Group>

            <Epic>
                <Tabbar style={{ marginTop: '100px' }}>
                    <TabbarItem onClick={go} data-to="listambassador" text="Амбассадоры">
                        <Icon28Users3Outline />
                    </TabbarItem>

                    <TabbarItem style={{ color: "#fc2c38" }} onClick={go} data-to="profilemrg" text="Профиль">
                        <Icon28UserOutline style={{ color: "#fc2c38" }} width={32} height={32} />
                    </TabbarItem>
                </Tabbar>
            </Epic>

        </Panel>
    </View>
)
}

export default ProfileMrg;