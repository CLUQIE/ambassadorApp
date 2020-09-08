import React from 'react';
import { postRequest } from "./functions/fetch.js"
import { View, Div, ModalRoot, ModalCard, FormLayout, FormLayoutGroup, Button, ModalPage, ModalPageHeader, Banner, Group, PanelHeader, Panel, PanelHeaderButton, Epic, Tabbar, TabbarItem, ScreenSpinner, Cell, InfoRow, Link, Placeholder, CellButton, Separator } from '@vkontakte/vkui';
import Icon28AddOutline from '@vkontakte/icons/dist/28/add_outline';
import Icon28UserOutline from '@vkontakte/icons/dist/28/user_outline';
import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline';
import Icon28BrainOutline from '@vkontakte/icons/dist/28/brain_outline';
import Icon28FireOutline from '@vkontakte/icons/dist/28/fire_outline';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel'
import Icon20CalendarOutline from '@vkontakte/icons/dist/20/calendar_outline';
import Icon56AccessibilityOutline from '@vkontakte/icons/dist/56/accessibility_outline';
import Icon24Write from '@vkontakte/icons/dist/24/write';

const requestURL = "https://ambassador-todo.herokuapp.com/event/ambassador"
const userRequestURL = "https://ambassador-todo.herokuapp.com/access/find"
const requestDeleteURL = "https://ambassador-todo.herokuapp.com/event/delete"

const ROUTES = {
    EVENTSINFO: 'eventsInfo',
    CONFIRMDELETE: 'confirmdelete'
};



const Events = ({ fetchedUser, id, go }) => {


    const [isLoading, setIsLoading] = React.useState(true);
    const [eventsData, setEventsData] = React.useState();
    const [activeModal, setActivePanel] = React.useState(null);
    const [eventId, setEventId] = React.useState(0);
    const [fetch, setFetch] = React.useState(true);

    const modalBack = () => {
        setActivePanel(null);
    };

    const confirmDelete = () => {
        postRequest('POST', requestDeleteURL, JSON.stringify({ _id: eventsData[eventId]._id }))
            .catch(err => console.log(err))
            setFetch(true)

    }

    if (fetch && fetchedUser != null) {
            const vkID = JSON.stringify({ "vkID": fetchedUser.id })
            postRequest('POST', userRequestURL, vkID)
                .then(data => {
                    postRequest('POST', requestURL, JSON.stringify({ ambassador: data[0].fullName }))
                        .then(data => {
                            setEventsData(data)
                            setIsLoading(false)
                            setFetch(false)
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
    if (eventsData.length > 0) {
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
                            right={<PanelHeaderButton style={{ color: '#fc2c38' }} onMouseUp={modalBack} onClick={go} data-to='editevent' data-id={eventsData ? eventsData[eventId]._id : 'empty'}><Icon24Write /></PanelHeaderButton>}>
                            {eventsData ? eventsData[eventId].nameEvent : 'empty'}
                        </ModalPageHeader>}>
                    <Cell multiline>
                        <InfoRow header="Формат мероприятия">
                            {eventsData ? eventsData[eventId].eventForm : 'empty'}
                        </InfoRow>
                    </Cell>

                    <Cell multiline>
                        <InfoRow header="Место проведения">
                            {eventsData ? eventsData[eventId].eventPlace : 'empty'}
                        </InfoRow>
                    </Cell>
                    <Cell multiline>
                        <InfoRow header="Формат участия">
                            {eventsData ? eventsData[eventId].participationForm : 'empty'}
                        </InfoRow>
                    </Cell>
                    <Cell multiline>
                        <InfoRow header="Дата проведения">
                            {eventsData ? eventsData[eventId].date : 'empty'}
                        </InfoRow>
                    </Cell>
                    <Cell multiline>
                        <InfoRow header="Тип мероприятия">
                            {eventsData ? eventsData[eventId].eventType : 'empty'}
                        </InfoRow>
                    </Cell>
                    <Cell multiline>
                        <InfoRow header="Краткое описание">
                            {eventsData ? eventsData[eventId].description : 'empty'}
                        </InfoRow>
                    </Cell>
                    <Cell multiline>
                        <InfoRow header="Количество участников">
                            {eventsData ? eventsData[eventId].participants : 'empty'}
                        </InfoRow>
                    </Cell>
                    <Cell multiline>
                        <InfoRow header="Ссылки">
                            <Link style={{ color: "#fc2c38" }} href={eventsData[eventId].publicationLinks} target="_blank"><span href={eventsData[eventId].publicationLinks} >{eventsData ? eventsData[eventId].publicationLinks : 'empty'}</span></Link>
                        </InfoRow>
                    </Cell>
                    <Cell multiline>
                        <InfoRow header="Заметки">
                            {eventsData ? eventsData[eventId].notes : 'empty'}
                        </InfoRow>
                    </Cell>
                    <Separator></Separator>
                    <CellButton style={{ color: "#fc2c38", marginBottom: 50}} align='center' onClick={() => { setActivePanel(ROUTES.CONFIRMDELETE); }}>Удалить мероприятие</CellButton>
                </ModalPage>

                <ModalCard
                    id={ROUTES.CONFIRMDELETE}
                    onClose={() => {setActivePanel(ROUTES.EVENTSINFO); }}
                    header={
                        <ModalPageHeader>
                            Удалить мероприятие?
            </ModalPageHeader>
                    }
                >
                    <FormLayout>
                        <FormLayoutGroup>
                            <Button mode="secondary" size="xl" id='1' style={{ backgroundColor: '#fc2c38', color: 'white' }} onMouseUp={modalBack} onClick={confirmDelete} > Да </Button>

                            <Button mode="secondary" size="xl" id='2' style={{ backgroundColor: '#fc2c38', color: 'white' }}  onClick={() => {setActivePanel(ROUTES.EVENTSINFO); }}> Нет </Button>
                        </FormLayoutGroup>
                    </FormLayout>
                </ModalCard>
            </ModalRoot>
        )

        return (
            <View activePanel={id} modal={modal}>
                <Panel id={id}>
                    <PanelHeader
                        left={<PanelHeaderButton><Icon28AddOutline style={{ color: "#fc2c38" }} onClick={go} data-to="addeventfirst" /></PanelHeaderButton>}>
                        Мероприятия
                </PanelHeader>
                    <Group>
                        <Div>
                            {eventsData.map((event, eventId) => (
                                <Banner key={event._id}
                                    header={<React.Fragment>
                                        <span style={{ fontWeight: '300', color: "#fc2c38", marginBottom: '10px' }}>{event.eventForm}, {event.eventType}</span> <br />
                                        <span>{event.nameEvent}</span>

                                    </React.Fragment>}
                                    subheader={<React.Fragment>
                                        <div style={{ display: 'inline-block' }}>
                                            <Icon20CalendarOutline />
                                        </div>
                                        <div style={{ display: 'inline-block' }}>
                                            <span style={{}}>{event.date}</span>
                                        </div>

                                    </React.Fragment>}
                                    asideMode="expand"
                                    onClick={() => { setEventId(eventId); setActivePanel(ROUTES.EVENTSINFO); }}
                                />
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
    return (
        <Panel id={id}>
            <PanelHeader
                left={<PanelHeaderButton><Icon28AddOutline style={{ color: "#fc2c38" }} onClick={go} data-to="addeventfirst" /></PanelHeaderButton>}>
                Мероприятия
            </PanelHeader>
            <Group>
                <Div>
                    <Placeholder
                        icon={<Icon56AccessibilityOutline style={{ color: 'rgb(176,182,192)' }} />}
                        stretched
                    >
                        Нет мероприятий<br />
                    </Placeholder>
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
    )
}


export default Events;