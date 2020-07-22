import React from 'react';
import { postRequest } from "./functions/fetch.js"
import { SimpleCell, PanelHeader, Panel, Epic, Tabbar, TabbarItem, Group, ScreenSpinner, Separator } from '@vkontakte/vkui';
import Icon28UserOutline from '@vkontakte/icons/dist/28/user_outline';
import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline';
import Icon28BrainOutline from '@vkontakte/icons/dist/28/brain_outline';
import Icon28FireOutline from '@vkontakte/icons/dist/28/fire_outline';
import Icon28Users3Outline from '@vkontakte/icons/dist/28/users_3_outline';



const requestURL = 'https://ambassador-todo.herokuapp.com/access/role'
const userRequestURL = 'https://ambassador-todo.herokuapp.com/access/find'

const ListAmbassador = ({ fetchedUser, id, go }) => {


    const [users, setUsers] = React.useState();
    const [isLoading, setIsLoading] = React.useState(true);
    const [user, setUser] = React.useState();
    const [request, setRequest] = React.useState(false);
    const [fetch, setFetch] = React.useState(true);
    const [ambassadors, setAmbassadors] = React.useState(true);


    // console.log(fetchedUser)

    if (request) {
        postRequest('POST', requestURL, JSON.stringify({ role: 'ambassador' }))
            .then(data => {
                setUsers(data);
                setIsLoading(false)
                setRequest(false)
            })
            .catch(err => console.log(err))
    }

    if (fetch) {
        if (fetchedUser != null) {
            const vkID = JSON.stringify({ "vkID": fetchedUser.id })
            postRequest('POST', userRequestURL, vkID)
                .then(data => {
                    setUser(data[0]);
                    setAmbassadors(data[0].ambassadors.split(','))
                    console.log(ambassadors)
                    setRequest(true)
                    setFetch(false)
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

        <Panel id={id}>

            <PanelHeader>
                Рейтинг
            </PanelHeader>
            {fetchedUser &&
            <SimpleCell href={"https://vk.com/id" + user.vkID} target="_blank" after={(3 + 1) * 4 + ' score'} >{user.fullName}</SimpleCell>}
            <Separator style={{ margin: '12px 0' }} />
            <Group>
                {ambassadors.map((user, id) => (
                    <SimpleCell href={"https://vk.com/id" + user} target="_blank" key={user._id} after={(id + 1) * 4 + ' score'} description='человек' >Имя человека</SimpleCell>
                ))}
            </Group>

            <Epic>
                <Tabbar style={{ marginTop: '100px' }}>
                    <TabbarItem onClick={go} style={{ color: "#fc2c38" }} data-to="listambassador" text="Амбассадоры">
                        <Icon28Users3Outline style={{ color: "#fc2c38" }}/>
                    </TabbarItem>

                    <TabbarItem  onClick={go} data-to="profilemrg" text="Профиль">
                        <Icon28UserOutline width={32} height={32} />
                    </TabbarItem>
                </Tabbar>
            </Epic>

        </Panel>

    )
}


export default ListAmbassador;
