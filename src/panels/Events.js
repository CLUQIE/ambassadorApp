import React from 'react';
import { postRequest } from "./functions/fetch.js"
// import {excelReport} from "./functions/excelReport"
import { Avatar, Div, Banner, Group, Button, PanelHeader, Panel, PanelHeaderButton, Epic, Tabbar, TabbarItem, ScreenSpinner, ActionSheetItem, ActionSheet, ModalCard } from '@vkontakte/vkui';
import Icon28AddOutline from '@vkontakte/icons/dist/28/add_outline';
import Icon28UserOutline from '@vkontakte/icons/dist/28/user_outline';
import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline';
import Icon28BrainOutline from '@vkontakte/icons/dist/28/brain_outline';
import Icon28FireOutline from '@vkontakte/icons/dist/28/fire_outline';

const requestURL = "https://ambassador-todo.herokuapp.com/event/ambassador"
const userRequestURL = "https://ambassador-todo.herokuapp.com/access/find"




const Events = ({ fetchedUser, id, go }) => {

    const [isLoading, setIsLoading] = React.useState(true);
    const [request, setrequest] = React.useState(true);
    const [eventsData, setEventsData] = React.useState();
    const [activeModal, setActiveModal] = React.useState(null);


    // const onClickReport = () => {
    // 	excelReport(eventsData)
    // }


    // if(request){
    //     postRequest('POST', requestURL, JSON.stringify({ambassador: 'Пузанов Мирон Андреевич' }))
    //     .then(data => {
    //       setEventsData(data)
    //       setIsLoading(false)
    //     setrequest(false)
    //     })
    //     .catch(err => console.log(err))
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

    // const onClickGo = () => {
    //     return (
    //         <ActionSheet>
    //             <ActionSheetItem autoclose>
    //                 По дням
    //     </ActionSheetItem>
    //             <ActionSheetItem autoclose>
    //                 По неделям
    //     </ActionSheetItem>
    //             <ActionSheetItem autoclose>
    //                 По месяцам
    //     </ActionSheetItem>
    //             <ActionSheetItem autoclose mode="cancel">Отменить</ActionSheetItem>
    //         </ActionSheet>
    //     )
    // }

    return (
        <Panel id={id}>

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
                            actions={<Button style={{ background: "#fc2c38" }} onClick={go} data-to="infoevents">Подробнее</Button>}
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
    )


}


export default Events;
