import React from 'react';
import { formatPhoneNumber } from 'react-phone-number-input/input';
import { postRequest } from "./functions/fetch.js";
import { profileReport } from "./functions/profileReport"
import { View, ModalRoot, ModalCard, FormLayout, FormLayoutGroup, InfoRow, Avatar, Div, ModalPage, ModalPageHeader, Select, Button, RichCell, Group, PanelHeader, Panel, ScreenSpinner, Header, Cell, PanelHeaderButton, Counter, CellButton } from '@vkontakte/vkui';
import Icon16Like from '@vkontakte/icons/dist/16/like';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';



const requestURL = 'https://ambassador-todo.herokuapp.com/access/find'
const eventsRequestURL = 'https://ambassador-todo.herokuapp.com/event/ambassador'


const ProfileForInfo = ({ fetchedUser, id, go, info }) => {

    const ROUTES = {
        CONFIRM: 'confirm',
        PROFILEINFO: 'profileInfo',
        INSIDEEVENTS: 'inside',
        OUTSIDEEVENTS: 'outside',
        HELPANDSUPPORT: 'helpAndSupport',
        UPGRADE: 'upgrade'
    };

    const [isLoading, setIsLoading] = React.useState(true);
    const [user, setUser] = React.useState();
    const [userRole, setUserRole] = React.useState();
    const [reportUser, setReportUser] = React.useState();
    const [eventsData, setEventsData] = React.useState();
    const [fetch, setFetch] = React.useState(true);
    const [grade, setGrade] = React.useState();
    const [activeModal, setActivePanel] = React.useState(null);

    const confirm = () => {
        profileReport(reportUser)
    }

    const modalBack = () => {
        setActivePanel(null);
    };

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
            <ModalCard
                id={ROUTES.CONFIRM}
                onClose={modalBack}
                header={
                    <ModalPageHeader>
                        Скачать профиль?
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

            <ModalPage
                id={ROUTES.PROFILEINFO}
                onClose={modalBack}
                header={
                    <ModalPageHeader
                        left={<PanelHeaderButton onClick={modalBack}><Icon24Cancel /></PanelHeaderButton>}>
                        Подробнее
                    </ModalPageHeader>}>
                <Group>
                    <Cell multiline indicator={<Cell>{user ? user.clothingSize : 'empty'}</Cell>} >
                        Размер одежды
                        </Cell>
                    <Cell multiline indicator={<Cell>{user ? user.personalPostalAddress : 'empty'}</Cell>} >
                        Почтовый адрес (с индексом)
                        </Cell>
                    <Cell multiline indicator={<Cell>{user ? user.latinFullName : 'empty'} </Cell>}>
                        Амбассадорская почта
                        </Cell>
                    <Cell multiline indicator={<Cell>{user ? user.university : 'empty'}</Cell>} >
                        Полное название учебного заведения
                        </Cell>
                    <Cell multiline indicator={<Cell>{user ? user.facultyFull : 'empty'}</Cell>} >
                        Полное название факультета
                        </Cell>
                    <Cell multiline indicator={<Cell>{user ? user.facultyShortly : 'empty'} </Cell>}>
                        Краткое название факультета
                        </Cell>
                    <Cell multiline indicator={<Cell>{user ? user.statusInUniversity : 'empty'}</Cell>} >
                        Статус
                        </Cell>
                    <Cell multiline indicator={<Cell>{user ? user.facultyFull : 'empty'}</Cell>} >
                        Факультет
                        </Cell>
                    <Cell multiline indicator={<Cell>{user ? user.specialty : 'empty'}</Cell>} >
                        Специальность
                        </Cell>
                    <Cell multiline indicator={<Cell>{user ? user.universityPostalAddress : 'empty'}</Cell>} >
                        Адрес учебного заведения
                        </Cell>
                    <Cell multiline indicator={<Cell>{user ? user.rectorFullName : 'empty'} </Cell>}>
                        ФИО ректора
                        </Cell>
                    <Cell multiline indicator={<Cell>{user ? user.rectorPostalAddress : 'empty'}</Cell>} >
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
                    <Div>
                        <Select onChange={onChangeGrade} top="Grade" placeholder={user ? user.grade : "empty"} required>
                            <option value="Freshman">Freshman</option>
                            <option value="Trainee">Trainee</option>
                            <option value="Junior">Junior</option>
                            <option value="Middle">Middle</option>
                            <option value="Senior">Senior</option>
                        </Select>
                    </Div>
                    <Cell> </Cell>
                    <Div>
                        <Button style={{ backgroundColor: '#fc2c38' }} type='submit' size='xl' onClick={onClickForm} onMouseUp={modalBack} >Изменить</Button>
                    </Div>
                </Group>
                <Cell> </Cell>
            </ModalPage>

        </ModalRoot>
    )

    if (fetch) {
        if (fetchedUser != null) {
            const vkID = JSON.stringify({ "vkID": fetchedUser.id })
            postRequest('POST', requestURL, vkID)
                .then(data => {
                    setUserRole(data[0].role)
                    postRequest('POST', requestURL, JSON.stringify({ "vkID": info }))
                        .then(data => {
                            setUser(data[0]);
                            setReportUser([{
                                fullName: data[0].fullName,
                                _id: data[0]._id,
                                vkID: data[0].vkID,
                                role: data[0].role,
                                avatar: data[0].avatar,
                                achievements: data[0].achievements,
                                town: data[0].town,
                                birthday: data[0].birthday,
                                grade: data[0].grade,
                                phoneNumber: data[0].phoneNumber,
                                amboEmail: data[0].amboEmail,
                                personalEmail: data[0].personalEmail,
                                mentor: data[0].mentor,
                                university: data[0].university,
                                specialty: data[0].specialty,
                                statusInUniversity: data[0].statusInUniversity,
                                universityShortly: data[0].universityShortly,
                                universityPostalAddress: data[0].universityPostalAddress,
                                rectorFullName: data[0].rectorFullName,
                                rectorPostalAddress: data[0].rectorPostalAddress,
                                facultyFull: data[0].facultyFull,
                                facultyShortly: data[0].facultyShortly,
                                personalPostalAddress: data[0].personalPostalAddress,
                                clothingSize: data[0].clothingSize,
                                __v: data[0].__v,
                            }]);
                            postRequest('POST', eventsRequestURL, JSON.stringify({ "ambassador": data[0].fullName }))
                                .then(events => {
                                    setEventsData(events)
                                    setIsLoading(false)
                                    setFetch(false)
                                })
                        })
                        .catch(err => console.log(err))
                })
        }
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
                <div style={{ marginBottom: 50 }}>
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
                        <Cell multiline indicator={<InfoRow>{user.town}</InfoRow>} >
                            Город
                        </Cell>
                        <Cell multiline indicator={<InfoRow>{user.birthday}</InfoRow>} >
                            Дата рождения
                        </Cell>
                        <Cell multiline indicator={<InfoRow>{formatPhoneNumber(user.phoneNumber)}</InfoRow>} >
                            Номер телефона
                        </Cell>
                        <Cell multiline indicator={<InfoRow>{user.personalEmail}</InfoRow>} >
                            Email
                        </Cell>
                        <Cell multiline indicator={<InfoRow>{user.universityShortly}</InfoRow>} >
                            Учебное заведение
                        </Cell>
                        <Cell multiline indicator={<InfoRow>{user.statusInUniversity}</InfoRow>} >
                            Статус
                        </Cell>
                        <CellButton
                            style={{ color: '#fc2c38' }}
                            onClick={() => { setActivePanel(ROUTES.PROFILEINFO); }}>Дополнительная информация</CellButton>
                    </Group>
                    {userRole === "staff" ? <Group header={<Header mode="secondary">Staff функции</Header>}>
                         <CellButton
                            style={{ color: '#fc2c38' }}
                            onClick={() => { setActivePanel(ROUTES.CONFIRM); }}>Скачать профиль</CellButton>
                        <CellButton
                            style={{ color: '#fc2c38' }}
                            onClick={go}
                            data-to="editprofileforstaff"
                            data-id={user.vkID}>Редактировать профиль</CellButton> 
                    </Group>: null}
                </div>
            </Panel>
        </View>
    )
}


export default ProfileForInfo;