import React from 'react';
import { PanelHeader, Panel, Banner, Button, Epic, Tabbar, TabbarItem, Group } from '@vkontakte/vkui';
import Icon28UserOutline from '@vkontakte/icons/dist/28/user_outline';
import Icon28Users3Outline from '@vkontakte/icons/dist/28/users_3_outline';
import Icon28GhostOutline from '@vkontakte/icons/dist/28/ghost_outline';
import Icon28GraphOutline from '@vkontakte/icons/dist/28/graph_outline';

const ListMentors = ({ id, go, mentors, setMentorInfo, setActiveModal }) => {
  
        return (

            <Panel id={id}>

                <PanelHeader>
                    Наставники
                </PanelHeader>
               <Group style={{ marginBottom: 50 }}>
                    {mentors.map((user, id) => (
                        <React.Fragment key={user._id}>
                            <Banner
                                header={<React.Fragment>
                                    <span>{user.fullName}</span> <br />
                                </React.Fragment>}
                                 actions={
                                    <React.Fragment>
                                        <Button style={{ backgroundColor: '#fc2c38', color: 'white' }} onClick={() => { setActiveModal('changerole');setMentorInfo(user) }}>Изменить роль</Button>
                                        <Button style={{ backgroundColor: '#fc2c38', color: 'white' }} onClick={() => { setActiveModal('confirmdeletementor');setMentorInfo(user) }}>Удалить пользователя</Button>
                                    </React.Fragment>
                                }
                            />
                        </React.Fragment>
                    ))}
                </Group>

                <Epic>
                    <Tabbar style={{ marginTop: '100px' }}>
                        <TabbarItem onClick={go} data-to="listambassador" text="Амбассадоры">
                            <Icon28Users3Outline />
                        </TabbarItem>

                        <TabbarItem onClick={go} style={{ color: "#fc2c38" }} data-to="listmentors" text="Наставники">
                            <Icon28GhostOutline style={{ color: "#fc2c38" }} />
                        </TabbarItem>

                        <TabbarItem  onClick={go} data-to="statistics" text="Статистика">
                            <Icon28GraphOutline  />
                        </TabbarItem> 
                        
                        <TabbarItem onClick={go} data-to="profilemrg" text="Профиль">
                            <Icon28UserOutline  />
                        </TabbarItem>
                    </Tabbar>
                </Epic>

            </Panel>

        )

}

export default ListMentors;
