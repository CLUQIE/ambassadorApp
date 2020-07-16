import React from 'react';
import { postRequest } from "./functions/fetch.js"
// import {excelReport} from "./functions/excelReport"
import { View,Avatar, Div,ModalRoot,ModalPage,ModalPageHeader, Banner, Group, Button, PanelHeader, Panel, PanelHeaderButton, Epic, Tabbar, TabbarItem, ScreenSpinner,Cell } from '@vkontakte/vkui';
import Icon28AddOutline from '@vkontakte/icons/dist/28/add_outline';
import Icon28UserOutline from '@vkontakte/icons/dist/28/user_outline';
import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline';
import Icon28BrainOutline from '@vkontakte/icons/dist/28/brain_outline';
import Icon28FireOutline from '@vkontakte/icons/dist/28/fire_outline';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel'

const requestURL = "https://ambassador-todo.herokuapp.com/event/ambassador"
const userRequestURL = "https://ambassador-todo.herokuapp.com/access/find"
const ROUTES = {
    EVENTS: 'events',
    EVENTSINFO: 'eventsInfo',
};



const Events = ({ fetchedUser, id, go }) => {

    const [isLoading, setIsLoading] = React.useState(true);
    const [request, setrequest] = React.useState(true);
    const [eventsData, setEventsData] = React.useState();
    const [activeModal, setActivePanel] = React.useState(null);
    const [eventId, setEventId] = React.useState(0);

    const modalBack = () => {
        setActivePanel(null);
    };

    let modalHistory = [];

    // const onClickReport = () => {
    // 	excelReport(eventsData)
    // }

    if (fetchedUser != null) {
        const vkID = JSON.stringify({ "vkID": fetchedUser.id })
        postRequest('POST', userRequestURL, vkID)
            .then(data => {
                postRequest('POST', requestURL, JSON.stringify({ ambassador: data[0].fullName }))
                    .then(data => {
                        setEventsData(data)
                        setIsLoading(false)
                        setrequest(false)
                    })
                    .catch(err => console.log(err))
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

    if (activeModal === null) {
        modalHistory = [];
    } else if (modalHistory.indexOf(activeModal) !== -1) {
        modalHistory = modalHistory.splice(0, modalHistory.indexOf(activeModal) + 1);
    } else {
        modalHistory.push(activeModal);
    }
    const modal = (
        <ModalRoot
            activeModal={activeModal}
            onClose={modalBack}
        >
            <ModalPage
                id={ROUTES.EVENTSINFO}
                onClose={modalBack}
                header={
                    <ModalPageHeader
                        left={<PanelHeaderButton onClick={modalBack}><Icon24Cancel /></PanelHeaderButton>}
                    >
                        {eventsData ? eventsData[eventId].nameEvent : 'empty'}
                    </ModalPageHeader>
                }
            >
                <Cell>
                    {eventsData ? 'Формат мероприятия: ' + eventsData[eventId].eventForm : 'empty'}
                </Cell>
                <Cell>
                    {eventsData ? 'Место проведения: ' + eventsData[eventId].eventPlace : 'empty'}
                </Cell>
                <Cell>
                    {eventsData ? 'Формат участия: ' + eventsData[eventId].participationForm : 'empty'}
                </Cell>
                <Cell>
                    {eventsData ? 'Дата проведения: ' + eventsData[eventId].date : 'empty'}
                </Cell>
                <Cell>
                    {eventsData ? 'Тип меропрития: ' + eventsData[eventId].eventType : 'empty'}
                </Cell>
                <Cell>
                    {eventsData ? 'Роль компании: ' + eventsData[eventId].companyRole : 'empty'}
                </Cell>
                <Cell>
                    {eventsData ? 'Краткое описание: ' + eventsData[eventId].description : 'empty'}
                </Cell>
                <Cell>
                    {eventsData ? 'Количетсво участников: ' + eventsData[eventId].participants : 'empty'}
                </Cell>
            </ModalPage>
        </ModalRoot>
    )

    return (
        <View activePanel={'modals'} modal={modal}>
            <Panel id={'modals'}>
                <PanelHeader
                    // left={<Icon28AddOutline onClick={onClickReport}/>}
                    left={<PanelHeaderButton><Icon28AddOutline style={{ color: "#fc2c38" }} onClick={go} data-to="home" /></PanelHeaderButton>}>
                    {/* right={<PanelHeaderButton><Icon28AddOutline style={{color: "#fc2c38"}} onClick={go} data-to="home" /></PanelHeaderButton>}> */}
                    Мероприятия
                </PanelHeader>
                <Group>
                    <Div>
                        {eventsData.map((event) => (
                            <Banner key={event._id}
                                before={<Avatar size={120} mode="image" style={{ objectFit: 'cover' }}
                                    src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />}
                                header={event.nameEvent}
                                subheader={event.date}
                                actions={<Button style={{ background: "#fc2c38" }} onClick={() => { setEventId(eventId); console.log(eventId); setTimeout(3000); setActivePanel(ROUTES.EVENTSINFO); }} >Подробнее</Button>} />
                        ))}
                    </Div>
                </Group>

                <Epic style={{ marginTop: '100px' }}>
                    <Tabbar>
                        <TabbarItem style={{ color: "#fc2c38" }} onClick={go} data-to="events" text="Мероприятия">
                            <Icon28NewsfeedOutline style={{ color: "#fc2c38" }} />
                        </TabbarItem>

                        <TabbarItem onClick={go} data-to="achivements" text="Рейтинг">
                            <Icon28FireOutline />
                        </TabbarItem>

                        <TabbarItem onClick={go} data-to="info" text="База знаний">
                            <Icon28BrainOutline />
                        </TabbarItem>

                        <TabbarItem onClick={go} data-to="profile" text="Профиль">
                            <Icon28UserOutline width={32} height={32} />
                        </TabbarItem>
                    </Tabbar>
                </Epic>

            </Panel>
        </View>
    )


}


export default Events;
