import React from 'react';
import { postRequest } from "./functions/fetch.js"
import { PanelHeader, Search, Panel, Epic, Tabbar, TabbarItem, Group, ScreenSpinner, Placeholder, Div, RichCell, Button } from '@vkontakte/vkui';
import Icon28UserOutline from '@vkontakte/icons/dist/28/user_outline';
import Icon28Users3Outline from '@vkontakte/icons/dist/28/users_3_outline';
import Icon56UserAddOutline from '@vkontakte/icons/dist/56/user_add_outline';

const userRequestURL = 'https://ambassador-todo.herokuapp.com/access/find'

const ListAmbassador = ({ fetchedUser, id, go }) => {


    const [isLoading, setIsLoading] = React.useState(true);
    const [fetch, setFetch] = React.useState(true);
    const [search, setSearch] = React.useState('');
    const [ambassadors, setAmbassadors] = React.useState();
    const [userRole, setUserRole] = React.useState();
    const [searchAmbassadors, setSearchAmbassadors] = React.useState();


    const onChangeSearch = (event) => {
        setSearch(event.target.value)
        setAmbassadors(searchAmbassadors.filter(function (i, n) { return i.fullName.toLowerCase().indexOf(search.toLowerCase()) > -1 }))
    }


    if (fetch) {
        if (fetchedUser != null) {
            const vkID = JSON.stringify({ "vkID": fetchedUser.id })
            postRequest('POST', userRequestURL, vkID)
                .then(data => {
                    setUserRole(data[0].role)
                    if (data[0].role === 'mentor') {
                        postRequest('POST', userRequestURL, JSON.stringify({ "mentor": data[0].fullName }))
                            .then(ambassadors => {
                                setAmbassadors(ambassadors)
                                setSearchAmbassadors(ambassadors)
                                setIsLoading(false)
                                setFetch(false)
                            })
                    }
                    if (data[0].role === 'staff') {
                        postRequest('POST', userRequestURL, JSON.stringify({ "role": 'ambassador' }))
                            .then(ambassadors => {
                                setAmbassadors(ambassadors)
                                setSearchAmbassadors(ambassadors)
                                setIsLoading(false)
                                setFetch(false)
                            })
                    }
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


    if (searchAmbassadors.length > 0) {
        return (

            <Panel id={id}>

                <PanelHeader>
                    Амбассадоры
                </PanelHeader>
                {userRole === 'staff' ?
                <Search value={search} onChange={onChangeSearch} after={null} />: null}
                <Group style={{ marginBottom: 50 }}>
                    {ambassadors.map((user, id) => (
                        <Div key={user._id}>
                            <RichCell disabled
                                multiline
                                actions={
                                    <React.Fragment >
                                        <Button style={{ backgroundColor: '#fc2c38', color: 'white' }} onClick={go} data-to="profileforinfo" data-id={user.vkID}>Профиль</Button>
                                        <Button style={{ backgroundColor: '#fc2c38', color: 'white' }} onClick={go} data-to="eventsforinfo" data-id={user.vkID}>Мероприятия</Button>
                                    </React.Fragment>
                                }
                                caption={user.universityShortly} >{user.fullName}
                            </RichCell>
                        </Div>
                    ))}
                </Group>

                <Epic>
                    <Tabbar style={{ marginTop: '100px' }}>
                        <TabbarItem onClick={go} style={{ color: "#fc2c38" }} data-to="listambassador" text="Амбассадоры">
                            <Icon28Users3Outline style={{ color: "#fc2c38" }} />
                        </TabbarItem>

                        <TabbarItem onClick={go} data-to="profilemrg" text="Профиль">
                            <Icon28UserOutline width={32} height={32} />
                        </TabbarItem>
                    </Tabbar>
                </Epic>

            </Panel>

        )
    }
    if (ambassadors.length === 0 && userRole === "staff") {
        return (
            <Panel id={id}>

                <PanelHeader>
                    Амбассадоры
                    </PanelHeader>
                <Search value={search} onChange={onChangeSearch} after={null} />
                <Group>
                    <Div>
                        <Placeholder
                            icon={<Icon56UserAddOutline style={{ color: 'rgb(176,182,192)' }} />}
                            stretched
                        >
                            Нет таких амбассадоров<br />
                        </Placeholder>
                    </Div>
                </Group>

                <Epic>
                    <Tabbar style={{ marginTop: '100px' }}>
                        <TabbarItem onClick={go} style={{ color: "#fc2c38" }} data-to="listambassador" text="Амбассадоры">
                            <Icon28Users3Outline style={{ color: "#fc2c38" }} />
                        </TabbarItem>

                        <TabbarItem onClick={go} data-to="profilemrg" text="Профиль">
                            <Icon28UserOutline width={32} height={32} />
                        </TabbarItem>
                    </Tabbar>
                </Epic>

            </Panel>
        )
    }
    if (searchAmbassadors.length === 0) {
        return (
            <Panel id={id}>
                <PanelHeader>
                    Амбассадоры
                </PanelHeader>
                <Group>
                    <Div>
                        <Placeholder
                            icon={<Icon56UserAddOutline style={{ color: 'rgb(176,182,192)' }} />}
                            stretched
                        >
                            Нет амбассадоров<br />
                        </Placeholder>
                    </Div>
                </Group>

                <Epic>
                    <Tabbar style={{ marginTop: '100px' }}>
                        <TabbarItem onClick={go} style={{ color: "#fc2c38" }} data-to="listambassador" text="Амбассадоры">
                            <Icon28Users3Outline style={{ color: "#fc2c38" }} />
                        </TabbarItem>

                        <TabbarItem onClick={go} data-to="profilemrg" text="Профиль">
                            <Icon28UserOutline width={32} height={32} />
                        </TabbarItem>
                    </Tabbar>
                </Epic>

            </Panel>
        )
    }

}


export default ListAmbassador;
