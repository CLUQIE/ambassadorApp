import React from 'react';
import { postRequest } from "./functions/fetch.js"
import { SimpleCell, PanelHeader, Panel, Epic, Tabbar, TabbarItem, Group, ScreenSpinner, Separator } from '@vkontakte/vkui';
import Icon28UserOutline from '@vkontakte/icons/dist/28/user_outline';
import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline';
import Icon28BrainOutline from '@vkontakte/icons/dist/28/brain_outline';
import Icon28FireOutline from '@vkontakte/icons/dist/28/fire_outline';


const requestURL = 'https://ambassador-todo.herokuapp.com/access/role'
const userRequestURL = 'https://ambassador-todo.herokuapp.com/access/find'

const Achivements = ({ fetchedUser, id, go }) => {


    const [users, setUsers] = React.useState();
    const [isLoading, setIsLoading] = React.useState(true);
    const [user, setUser] = React.useState();
    const [request, setRequest] = React.useState(false);
    const [fetch, setFetch] = React.useState(true);


    if (request) {
        postRequest('POST', requestURL, JSON.stringify({ role: 'ambassador' }))
            .then(data => {
                let filtredUsers = data.filter(function (i, n) { return (i.role === "ambassador" && i.grade) })
                console.log(filtredUsers)
                setUsers(filtredUsers);
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
                <SimpleCell href={"https://vk.com/id" + user.vkID} target="_blank" after={user.grade} description={user.universityShortly}>{user.fullName}</SimpleCell>}
            <Separator style={{ margin: '12px 0' }} />
            <Group style={{ marginBottom: 50 }}>
                {users.map((user, id) => (
                    <SimpleCell href={"https://vk.com/id" + user.vkID} target="_blank" after={user.grade} key={user._id} description={user.universityShorlty}>{user.fullName}</SimpleCell>
                ))}
            </Group>

            <Epic>
                <Tabbar>
                    <TabbarItem onClick={go} data-to="events" text="Мероприятия">
                        <Icon28NewsfeedOutline />
                    </TabbarItem>

                    <TabbarItem style={{ color: "#fc2c38" }} onClick={go} data-to="achivements" text="Рейтинг">
                        <Icon28FireOutline style={{ color: "#fc2c38" }} />
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


export default Achivements;