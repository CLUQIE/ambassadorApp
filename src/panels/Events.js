import React from 'react';
import { Group, PanelHeader, Panel, PanelHeaderButton, Epic, Tabbar, TabbarItem, Placeholder, Div, Banner } from '@vkontakte/vkui';
import Icon28AddOutline from '@vkontakte/icons/dist/28/add_outline';
import Icon28UserOutline from '@vkontakte/icons/dist/28/user_outline';
import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline';
import Icon28FireOutline from '@vkontakte/icons/dist/28/fire_outline';
import Icon20CalendarOutline from '@vkontakte/icons/dist/20/calendar_outline';
import Icon56AccessibilityOutline from '@vkontakte/icons/dist/56/accessibility_outline';

const ROUTES = {
    EVENTSINFO: 'eventsInfo',
    CONFIRMDELETE: 'confirmdelete'
};

const Events = ({ id, go, amboEvent, setActiveModal, setEventId }) => {

    if (amboEvent) {
        return (
            <Panel id={id}>
                <PanelHeader
                    left={<PanelHeaderButton><Icon28AddOutline style={{ color: "#2787F5" }} onClick={go} data-to="addeventfirst" /></PanelHeaderButton>}>
                    Мероприятия
                </PanelHeader>
                <Group>
                    <Div>
                        {amboEvent.map((event, id) => (
                            <Banner key={event._id}
                                header={<React.Fragment>
                                    <span style={{ fontWeight: '300', color: "#2787F5", marginBottom: '10px' }}>{event.eventForm}, {event.eventType}</span> <br />
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
                                onClick={() => { setEventId(id); setActiveModal(ROUTES.EVENTSINFO); }}
                            />
                        ))}
                    </Div>
                </Group>
                <Epic style={{ marginTop: '100px' }}>
                    <Tabbar>
                        <TabbarItem style={{ color: "#2787F5" }} onClick={go} data-to="events" text="Мероприятия">
                            <Icon28NewsfeedOutline style={{ color: "#2787F5" }} />
                        </TabbarItem>

                        <TabbarItem onClick={go} data-to="achivements" text="Грейды">
                            <Icon28FireOutline />
                        </TabbarItem>

                        <TabbarItem onClick={go} data-to="profile" text="Профиль">
                            <Icon28UserOutline width={32} height={32} />
                        </TabbarItem>
                    </Tabbar>
                </Epic>

            </Panel>
        )
    }
    else {
        return (
            <Panel id={id}>
                <PanelHeader
                    left={<PanelHeaderButton><Icon28AddOutline style={{ color: "#2787F5" }} onClick={go} data-to="addeventfirst" /></PanelHeaderButton>}>
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
                        <TabbarItem style={{ color: "#2787F5" }} onClick={go} data-to="events" text="Мероприятия">
                            <Icon28NewsfeedOutline style={{ color: "#2787F5" }} />
                        </TabbarItem>

                        <TabbarItem onClick={go} data-to="achivements" text="Грейды">
                            <Icon28FireOutline />
                        </TabbarItem>

                        <TabbarItem onClick={go} data-to="profile" text="Профиль">
                            <Icon28UserOutline width={32} height={32} />
                        </TabbarItem>
                    </Tabbar>
                </Epic>

            </Panel>
        )
    }
}


export default Events;