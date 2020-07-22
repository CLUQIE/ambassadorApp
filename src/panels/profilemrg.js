import React from 'react';
import { postRequest } from "./functions/fetch.js";
import { View, ModalRoot, Avatar, RichCell, Group, PanelHeader, Panel, ScreenSpinner, Epic, Tabbar, TabbarItem, Header, Cell, PanelHeaderButton } from '@vkontakte/vkui';
import Icon28UserOutline from '@vkontakte/icons/dist/28/user_outline';
import Icon28WriteOutline from '@vkontakte/icons/dist/28/write_outline';
import Icon28Users3Outline from '@vkontakte/icons/dist/28/users_3_outline';


const requestURL = 'https://ambassador-todo.herokuapp.com/access/find'
const eventsRequestURL = 'https://ambassador-todo.herokuapp.com/event/ambassador'


const ProfileMrg = ({ fetchedUser, id, go }) => {

    // console.log('profilemrg')

    const [isLoading, setIsLoading] = React.useState(true);
    const [user, setUser] = React.useState();
    const [eventsData, setEventsData] = React.useState();
    const [fetch, setFetch] = React.useState(true);

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
        <View activePanel={id} >
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
                            </RichCell>
                        </Group>
                    }
                    <Group header={<Header mode="secondary">Информация о пользователе</Header>}>
                        <Cell indicator='5' >
                            Количество амбассадоров
                        </Cell>
                        
                    </Group>
                </div>


                <Epic>
                    <Tabbar style={{ marginTop: '100px' }}>
                        <TabbarItem onClick={go} data-to="listambassador" text="Амбассадоры">
                            <Icon28Users3Outline />
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


export default ProfileMrg;