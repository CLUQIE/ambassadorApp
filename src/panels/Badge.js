import React from 'react';
import {  Card, CardGrid, Group, PanelHeader, Panel, Epic, Tabbar, TabbarItem,  PanelHeaderBack} from '@vkontakte/vkui';
import Icon28UserOutline from '@vkontakte/icons/dist/28/user_outline';
import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline';
import Icon28BrainOutline from '@vkontakte/icons/dist/28/brain_outline';
import Icon28FireOutline from '@vkontakte/icons/dist/28/fire_outline';

const avatars = {

    bestclub: 'http://pngimg.com/uploads/bitcoin/bitcoin_PNG31.png',

};


const Badge = ({ id, go }) => {

	return (

		<Panel id={id}>

			<PanelHeader
            left={<PanelHeaderBack style={{color: "#fc2c38"}} onClick={go} data-to="profile"/>}>Достижения</PanelHeader>
            <Group separator="hide">
                
			    <CardGrid>
                    <Card size="s">
                        <div style={{ 
                         height: 96,  
                         borderRadius: 10,
                         }} >
                        <img alt="badge" style={{ width: '100%', height: 96, borderRadius: 10, objectFit: 'cover', objectPosition: 'center', zIndex: 0}} src={avatars['bestclub']} />
                        </div>
                    </Card>
                    <Card size="s">
                        <div style={{ 
                         height: 96,  
                         borderRadius: 10,
                         }} >
                        <img alt="badge" style={{ width: '100%', height: 96, borderRadius: 10, objectFit: 'cover', objectPosition: 'center', zIndex: 0}} src={avatars['bestclub']} />
                        </div>
                    </Card>
                    <Card size="s">
                        <div style={{ 
                         height: 96,  
                         borderRadius: 10,
                         }} >
                        <img alt="badge" style={{ width: '100%', height: 96, borderRadius: 10, objectFit: 'cover', objectPosition: 'center', zIndex: 0}} src={avatars['bestclub']} />
                        </div>
                    </Card>
                </CardGrid>
                <CardGrid>
                <Card size="s">
                        <div style={{ 
                         height: 96,  
                         borderRadius: 10,
                         }} >
                        <img alt="badge" style={{ width: '100%', height: 96, borderRadius: 10, objectFit: 'cover', objectPosition: 'center', zIndex: 0}} src={avatars['bestclub']} />
                        </div>
                    </Card>
                    <Card size="s">
                        <div style={{ 
                         height: 96,  
                         borderRadius: 10,
                         }} >
                        <img alt="badge" style={{ width: '100%', height: 96, borderRadius: 10, objectFit: 'cover', objectPosition: 'center', zIndex: 0}} src={avatars['bestclub']} />
                        </div>
                    </Card>
                    <Card size="s">
                        <div style={{ 
                         height: 96,  
                         borderRadius: 10,
                         }} >
                        <img alt="badge" style={{ width: '100%', height: 96, borderRadius: 10, objectFit: 'cover', objectPosition: 'center', zIndex: 0}} src={avatars['bestclub']} />
                        </div>
                    </Card>
                </CardGrid>
                <CardGrid>
                <Card size="s">
                        <div style={{ 
                         height: 96,  
                         borderRadius: 10,
                         }} >
                        <img alt="badge" style={{ width: '100%', height: 96, borderRadius: 10, objectFit: 'cover', objectPosition: 'center', zIndex: 0}} src={avatars['bestclub']} />
                        </div>
                    </Card>
                    <Card size="s">
                        <div style={{ 
                         height: 96,  
                         borderRadius: 10,
                         }} >
                        <img alt="badge" style={{ width: '100%', height: 96, borderRadius: 10, objectFit: 'cover', objectPosition: 'center', zIndex: 0}} src={avatars['bestclub']} />
                        </div>
                    </Card>
                    <Card size="s">
                        <div style={{ 
                         height: 96,  
                         borderRadius: 10,
                         }} >
                        <img alt="badge" style={{ width: '100%', height: 96, borderRadius: 10, objectFit: 'cover', objectPosition: 'center', zIndex: 0}} src={avatars['bestclub']} />
                        </div>
                    </Card>
                </CardGrid>
            </Group>
            <Epic>
                <Tabbar>
                <TabbarItem onClick={go} data-to="events" text="Мероприятия">
                    <Icon28NewsfeedOutline/>
                </TabbarItem>

                <TabbarItem onClick={go} data-to="achivements" text="Рейтинг">
                    <Icon28FireOutline/>
                </TabbarItem>

                <TabbarItem style={{color:"#fc2c38"}} onClick={go} data-to="info" text="База знаний">
                    <Icon28BrainOutline style={{color:"#fc2c38"}}/>
                </TabbarItem>

                <TabbarItem onClick={go} data-to="profile" text="Профиль">
                    <Icon28UserOutline width={32} height={32}/>
                </TabbarItem>
                </Tabbar>  
            </Epic>

		</Panel>
	)
}


export default Badge;
