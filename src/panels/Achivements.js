import React from 'react';
import { Card, CardGrid, PanelHeader, Panel, Epic, Tabbar, TabbarItem, Group} from '@vkontakte/vkui';
import Icon28ServicesOutline from '@vkontakte/icons/dist/28/services_outline';
import Icon28UserOutline from '@vkontakte/icons/dist/28/user_outline';
import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline';
import Icon28BrainOutline from '@vkontakte/icons/dist/28/brain_outline';




const Achivements = ({ id, go }) => {

	return (

		<Panel id={id}>

			<PanelHeader>
                Достижения
            </PanelHeader>
			<Group>
            <CardGrid>
                <Card size="s">
                    <div style={{ height: 96 }} />
                </Card>
                <Card size="s">
                    <div style={{ height: 96 }} />
                </Card>
                <Card size="s">
                    <div style={{ height: 96 }} />
                </Card>
            </CardGrid>
            <CardGrid>
                <Card size="s">
                    <div style={{ height: 96 }} />
                </Card>
                <Card size="s">
                    <div style={{ height: 96 }} />
                </Card>
                <Card size="s">
                    <div style={{ height: 96 }} />
                </Card>
            </CardGrid>
			</Group>

            <Epic>
                <Tabbar>
                <TabbarItem onClick={go} data-to="events" text="Мероприятия">
                    <Icon28NewsfeedOutline/>
                </TabbarItem>

                <TabbarItem style={{color:"#fc2c38"}} onClick={go} data-to="achivements" text="Достижения">
                    <Icon28ServicesOutline style={{color:"#fc2c38"}}/>
                </TabbarItem>

                <TabbarItem onClick={go} data-to="info" text="Информация">
                    <Icon28BrainOutline />
                </TabbarItem>

                <TabbarItem onClick={go} data-to="profile" text="Профиль">
                    <Icon28UserOutline width={32} height={32}/>
                </TabbarItem>
                </Tabbar>  
            </Epic>

		</Panel>
	)
}


export default Achivements;
