import React from 'react';
import { SimpleCell, PanelHeader, Panel, Epic, Tabbar, TabbarItem, Group, Separator } from '@vkontakte/vkui';
import Icon28UserOutline from '@vkontakte/icons/dist/28/user_outline';
import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline';
import Icon28FireOutline from '@vkontakte/icons/dist/28/fire_outline';

const Achivements = ({ fetchedUser, id, go, allAmbs, profileInfo }) => {

    return (

        <Panel id={id}>

            <PanelHeader>
               Грейды
            </PanelHeader>
            {fetchedUser &&
                <SimpleCell href={"https://vk.com/id" + profileInfo.vkID} target="_blank" after={profileInfo.grade} description={profileInfo.universityShortly}>{profileInfo.fullName}</SimpleCell>}
            <Separator style={{ margin: '12px 0' }} />
            <Group style={{ marginBottom: 50 }}>
                {allAmbs.map((user, id) => (
                    <SimpleCell href={"https://vk.com/id" + user.vkID} target="_blank" after={user.grade} key={user._id} description={user.universityShorlty}>{user.fullName}</SimpleCell>
                ))}
            </Group>

            <Epic>
                <Tabbar>
                    <TabbarItem onClick={go} data-to="events" text="Мероприятия">
                        <Icon28NewsfeedOutline />
                    </TabbarItem>

                    <TabbarItem style={{ color: "#2787F5" }} onClick={go} data-to="achivements" text="Грейды">
                        <Icon28FireOutline style={{ color: "#2787F5" }} />
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