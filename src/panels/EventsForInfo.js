import React from 'react';
import { postRequest } from "./functions/fetch.js"
// import {excelReport} from "./functions/excelReport"
import { View, Div, ModalRoot, ModalPage, ModalPageHeader, Banner, Group, PanelHeader, Panel, PanelHeaderButton, Epic, Tabbar, TabbarItem, ScreenSpinner, Cell, InfoRow, Link, Placeholder } from '@vkontakte/vkui';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel'
import Icon20CalendarOutline from '@vkontakte/icons/dist/20/calendar_outline';

import Icon28AddOutline from '@vkontakte/icons/dist/28/add_outline';
import Icon28UserOutline from '@vkontakte/icons/dist/28/user_outline';
import Icon56AccessibilityOutline from '@vkontakte/icons/dist/56/accessibility_outline';
import Icon28Users3Outline from '@vkontakte/icons/dist/28/users_3_outline';

const requestURL = "https://ambassador-todo.herokuapp.com/event/ambassador"
const userRequestURL = "https://ambassador-todo.herokuapp.com/access/find"
const ROUTES = {
    EVENTSINFO: 'eventsInfo'
};



const EventsForInfo = ({ id, go, info }) => {


    const [isLoading, setIsLoading] = React.useState(true);
    const [eventsData, setEventsData] = React.useState();
    const [activeModal, setActivePanel] = React.useState(null);
    const [eventId, setEventId] = React.useState(0);
    const [fetch, setFetch] = React.useState(true);

    const modalBack = () => {
        setActivePanel(null);
    };

    if (fetch) {
        postRequest('POST', userRequestURL, JSON.stringify({ "vkID": info }))
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
                            left={<PanelHeaderButton onClick={modalBack}><Icon24Cancel /></PanelHeaderButton>}>
                            {eventsData ? eventsData[eventId].nameEvent : 'empty'}
                        </ModalPageHeader>}>
                    <Cell>
                        <InfoRow header="Формат мероприятия">
                            {eventsData ? eventsData[eventId].eventForm : 'empty'}
                        </InfoRow>
                    </Cell>

                    <Cell>
                        <InfoRow header="Место проведения">
                            {eventsData ? eventsData[eventId].eventPlace : 'empty'}
                        </InfoRow>
                    </Cell>
                    <Cell>
                        <InfoRow header="Формат участия">
                            {eventsData ? eventsData[eventId].participationForm : 'empty'}
                        </InfoRow>
                    </Cell>
                    <Cell>
                        <InfoRow header="Дата проведения">
                            {eventsData ? eventsData[eventId].date : 'empty'}
                        </InfoRow>
                    </Cell>
                    <Cell>
                        <InfoRow header="Тип мероприятия">
                            {eventsData ? eventsData[eventId].eventType : 'empty'}
                        </InfoRow>
                    </Cell>
                    <Cell>
                        <InfoRow header="Роль компании">
                            {eventsData ? eventsData[eventId].companyRole : 'empty'}
                        </InfoRow>
                    </Cell>
                    <Cell>
                        <InfoRow header="Краткое описание">
                            {eventsData ? eventsData[eventId].description : 'empty'}
                        </InfoRow>
                    </Cell>
                    <Cell>
                        <InfoRow header="Количество участников">
                            {eventsData ? eventsData[eventId].participants : 'empty'}
                        </InfoRow>
                    </Cell>
                    <Cell>
                        <InfoRow header="Ссылки">
                            <Link href={eventsData[eventId].publicationLinks} target="_blank"><span href={eventsData[eventId].publicationLinks} >{eventsData ? eventsData[eventId].publicationLinks : 'empty'}</span></Link>
                        </InfoRow>
                    </Cell>
                    <Cell>
                        <InfoRow header="Заметки">
                            {eventsData ? eventsData[eventId].notes : 'empty'}
                        </InfoRow>
                    </Cell>
                </ModalPage>
            </ModalRoot>
        )

        return (
            <View activePanel={id} modal={modal}>
                <Panel id={id}>
                    <PanelHeader
                        left={<PanelHeaderButton style={{ color: "#fc2c38" }} onClick={go} data-to="listambassador" > <Icon24Cancel /></PanelHeaderButton>}>
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
    )
}


export default EventsForInfo;
