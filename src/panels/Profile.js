import React from 'react';
import { formatPhoneNumber } from 'react-phone-number-input/input';
import { postRequest } from "./functions/fetch.js";
import { View, ModalRoot, Avatar, ModalPage, ModalPageHeader, RichCell, Group, PanelHeader, Panel, ScreenSpinner, Epic, Tabbar, TabbarItem, Header, Cell, PanelHeaderButton, Counter, CellButton } from '@vkontakte/vkui';
import Icon28UserOutline from '@vkontakte/icons/dist/28/user_outline';
import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline';
import Icon28BrainOutline from '@vkontakte/icons/dist/28/brain_outline';
import Icon28FireOutline from '@vkontakte/icons/dist/28/fire_outline';
import Icon28WriteOutline from '@vkontakte/icons/dist/28/write_outline';
import Icon16Like from '@vkontakte/icons/dist/16/like';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';



const requestURL = 'https://ambassador-todo.herokuapp.com/access/find'
const eventsRequestURL = 'https://ambassador-todo.herokuapp.com/event/ambassador'


const Profile = ({ fetchedUser, id, go }) => {

    const ROUTES = {
        PROFILEINFO: 'profileInfo',
        INSIDEEVENTS: 'inside',
        OUTSIDEEVENTS: 'outside',
        HELPANDSUPPORT: 'helpAndSupport'
    };
    const modalBack = () => {
        setActivePanel(null);
    };

    const [isLoading, setIsLoading] = React.useState(true);
    const [user, setUser] = React.useState();
    const [eventsData, setEventsData] = React.useState();
    const [fetch, setFetch] = React.useState(true);
    const [activeModal, setActivePanel] = React.useState(null);

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
                    <Cell multiline indicator={<Cell>{user ? user.clothingSize : 'empty'}</Cell>} >
                        Размер одежды
                        </Cell>
                    <Cell multiline indicator={<Cell>{user ? user.personalPostalAddress : 'empty'}</Cell>} >
                        Почтовый адрес (с индексом)
                        </Cell>
                    <Cell multiline indicator={<Cell >{user ? user.latinFullName : 'empty'}</Cell>} >
                        Амбассадорская почта
                        </Cell>
                    <Cell multiline indicator={<Cell >{user ? user.university : 'empty'}</Cell>}>
                        Полное название учебного заведения
                        </Cell>
                    <Cell multiline indicator={<Cell >{user ? user.facultyFull : 'empty'}</Cell>} >
                        Полное название факультета
                        </Cell>
                    <Cell multiline indicator={<Cell >{user ? user.facultyShortly : 'empty'}</Cell>}  >
                        Краткое название факультета
                        </Cell>
                    <Cell multiline indicator={<Cell >{user ? user.statusInUniversity : 'empty'}</Cell>}  >
                        Статус
                        </Cell>
                    <Cell multiline indicator={<Cell >{user ? user.facultyFull : 'empty'} </Cell>}>
                        Факультет
                        </Cell>
                    <Cell multiline indicator={<Cell >{user ? user.specialty : 'empty'} </Cell>}>
                        Специальность
                        </Cell>
                    <Cell multiline indicator={<Cell >{user ? user.universityPostalAddress : 'empty'} </Cell>}>
                        Адрес учебного заведения
                        </Cell>
                    <Cell multiline indicator={<Cell >{user ? user.rectorFullName : 'empty'}</Cell>} >
                        ФИО ректора
                        </Cell>
                    <Cell multiline indicator={<Cell >{user ? user.rectorPostalAddress : 'empty'}</Cell>} >
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

        </ModalRoot>
    )

    if (fetch) {
        if (fetchedUser != null) {
            const vkID = JSON.stringify({ "vkID": fetchedUser.id })
            postRequest('POST', requestURL, vkID)

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
                    left={<PanelHeaderButton><Icon28WriteOutline style={{ color: "#fc2c38" }} onClick={go} data-to="editprofile" /></PanelHeaderButton>}>
                    Профиль
            </PanelHeader>
                <div style={{ marginBottom: 100 }}>
                    {fetchedUser &&
                        <Group>
                            <RichCell
                                href={"https://vk.com/id" + user.vkID}
                                target="_blank"
                                before={<Avatar size={72} src={fetchedUser.photo_100} />}>
                                <span style={{ fontSize: '18px' }}>{user.fullName}</span>
                                <br />
                                <span style={{ fontSize: '14px', color: 'grey' }}>{user.grade}</span>
                                <br />
                            </RichCell>
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
                        <Cell multiline indicator={user.town} >
                            Город
                        </Cell>
                        <Cell multiline indicator={user.birthday} >
                            Дата рождения
                        </Cell>
                        <Cell multiline indicator={formatPhoneNumber(user.phoneNumber)} >
                            Номер телефона
                        </Cell>
                        <Cell multiline indicator={user.personalEmail} >
                            Email
                        </Cell>
                        <Cell multiline indicator={<div className="IndicatorOverflow">{user.universityShortly}</div>}
                        >
                            Учебное заведение
                        </Cell>
                        <Cell multiline indicator={user.statusInUniversity} >
                            Статус
                        </Cell>
                        <CellButton
                            style={{ color: '#fc2c38' }}
                            onClick={() => { setActivePanel(ROUTES.PROFILEINFO); }}>Дополнительная информация</CellButton>
                    </Group>
                </div>


                <Epic>
                    <Tabbar style={{ marginTop: '100px' }}>
                        <TabbarItem onClick={go} data-to="events" text="Мероприятия">
                            <Icon28NewsfeedOutline />
                        </TabbarItem>

                        <TabbarItem onClick={go} data-to="achivements" text="Рейтинг">
                            <Icon28FireOutline />
                        </TabbarItem>

                        <TabbarItem onClick={go} data-to="info" text="База знаний">
                            <Icon28BrainOutline />
                        </TabbarItem>

                        <TabbarItem style={{ color: "#fc2c38" }} onClick={go} data-to="profile" text="Профиль">
                            <Icon28UserOutline style={{ color: "#fc2c38" }} width={32} height={32} />
                        </TabbarItem>
                    </Tabbar>
                </Epic>

            </Panel>
        </View>
    )
}


export default Profile;