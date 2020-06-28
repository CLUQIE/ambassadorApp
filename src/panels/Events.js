import React from 'react';
import { Avatar, Div, Banner, Group, Button, PanelHeader, Panel, Textarea, PanelHeaderButton, FixedLayout, FormLayoutGroup, Epic, Tabbar, TabbarItem} from '@vkontakte/vkui';
import Icon28ServicesOutline from '@vkontakte/icons/dist/28/services_outline';
import Icon28AddOutline from '@vkontakte/icons/dist/28/add_outline';
import Icon28UserOutline from '@vkontakte/icons/dist/28/user_outline';
import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline';
import Icon28BrainOutline from '@vkontakte/icons/dist/28/brain_outline';




const Events = ({ id, go }) => {

	return (

		<Panel id={id}>

			<PanelHeader 
                right={<PanelHeaderButton><Icon28AddOutline style={{color: "#fc2c38"}} onClick={go} data-to="home" /></PanelHeaderButton>}>
                Мероприятия
            </PanelHeader>
			<Group>
                <Div>
                    <Banner
                    before={<Avatar size={120} mode="image" style={{objectFit: 'cover'}} 
                    src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />}
                    header="Название"
                    subheader="Какая-то информация"
                    actions={<Button style={{background: "#fc2c38"}}>Подробнее</Button>}
                    />
				</Div>
			</Group>

            <Epic>
                <Tabbar>
                <TabbarItem style={{color:"#fc2c38"}} onClick={go} data-to="events" text="Мероприятия">
                    <Icon28NewsfeedOutline style={{color:"#fc2c38"}}/>
                </TabbarItem>

                <TabbarItem onClick={go} data-to="achivements" text="Достижения">
                    <Icon28ServicesOutline/>
                </TabbarItem>

                <TabbarItem onClick={go} data-to="info" text="Информация">
                    <Icon28BrainOutline/>
                </TabbarItem>

                <TabbarItem onClick={go} data-to="profile" text="Профиль">
                    <Icon28UserOutline width={32} height={32}/>
                </TabbarItem>
                </Tabbar>  
            </Epic>

		</Panel>
	)
}


export default Events;
