import React from 'react';
import { postRequest } from "./functions/fetch.js"
import { View, Div, CellButton, ModalCard, FormLayout, Separator, FormLayoutGroup, Button, ModalRoot, ModalPage, ModalPageHeader, Banner, Group, PanelHeader, Panel, PanelHeaderButton, Cell, InfoRow, Placeholder } from '@vkontakte/vkui';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel'
import Icon20CalendarOutline from '@vkontakte/icons/dist/20/calendar_outline';
import Icon56AccessibilityOutline from '@vkontakte/icons/dist/56/accessibility_outline';
import Icon24Write from '@vkontakte/icons/dist/24/write';

const requestDeleteURL = "https://ambassador-todo.herokuapp.com/event/delete"

const ROUTES = {
    EVENTSINFO: 'eventsInfo',
    CONFIRMDELETE: 'confirmdelete'
};

const EventsForInfo = ({ id, go, info, allEvents, setFetchApp, setPanel }) => {

    let filtredEvents = allEvents.filter(function (i, n) { return i.ambassador === info});
    const [eventsData, setEventsData] = React.useState(filtredEvents);
    const [activeModal, setActivePanel] = React.useState(null);
    const [eventId, setEventId] = React.useState(0);

    const modalBack = () => {
        setActivePanel(null);
    };

    const confirmDelete = () => {
        postRequest('POST', requestDeleteURL, JSON.stringify({ _id: eventsData[eventId]._id }))
            .catch(err => console.log(err))
        setFetchApp(true)
        setPanel('listambassador')

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
                        <InfoRow header="Отзывы участников">
                            {eventsData ? eventsData[eventId].participantsCallback : 'empty'}
                        </InfoRow>
                    </Cell>
                    <Cell multiline>
                        <InfoRow header="Ссылки">
                            {eventsData ? eventsData[eventId].publicationLinks : 'empty'}
                        </InfoRow>
                    </Cell>
                    <Cell multiline>
                        <InfoRow header="Заметки">
                            {eventsData ? eventsData[eventId].notes : 'empty'}
                        </InfoRow>
                    </Cell>
                    <Separator></Separator>
                    <CellButton style={{ color: "#fc2c38", marginBottom: 50 }} align='center' onClick={() => { setActivePanel(ROUTES.CONFIRMDELETE); }}>Удалить мероприятие</CellButton>
                </ModalPage>

                <ModalCard
                    id={ROUTES.CONFIRMDELETE}
                    onClose={() => { setActivePanel(ROUTES.EVENTSINFO); }}
                    header={
                        <ModalPageHeader>
                            Удалить мероприятие?
            </ModalPageHeader>
                    }
                >
                    <FormLayout>
                        <FormLayoutGroup>
                            <Button mode="secondary" size="xl" id='1' style={{ backgroundColor: '#fc2c38', color: 'white' }} onMouseUp={modalBack} onClick={confirmDelete} > Да </Button>

                            <Button mode="secondary" size="xl" id='2' style={{ backgroundColor: '#fc2c38', color: 'white' }} onClick={() => { setActivePanel(ROUTES.EVENTSINFO); }}> Нет </Button>
                        </FormLayoutGroup>
                    </FormLayout>
                </ModalCard>
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
                left={<PanelHeaderButton style={{ color: "#fc2c38" }} onClick={go} data-to="listambassador" > <Icon24Cancel /></PanelHeaderButton>}>                Мероприятия
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
        </Panel>
    )
}


export default EventsForInfo;