import React from 'react';
import {Group, Cell, PanelHeader, Panel} from '@vkontakte/vkui';
// import Icon28ServicesOutline from '@vkontakte/icons/dist/28/services_outline';
// import Icon28UserOutline from '@vkontakte/icons/dist/28/user_outline';
// import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline';
// import Icon28BrainOutline from '@vkontakte/icons/dist/28/brain_outline';




const eventsMentor = ({fetchedUser, id, go }) => {
    
    
	return (
    
		<Panel id={id}>

			<PanelHeader>
                Профиль
            </PanelHeader>
            <Group>
                    <Cell expandable>
                        Инструменты
                    </Cell>
                    <Cell expandable>
                        Важные документы
                    </Cell>
                    <Cell expandable>
                        Презентации
                    </Cell>
                    <Cell expandable>
                        Что-то еще
                    </Cell>
			</Group>

            {/* <Epic>
                <Tabbar>
                <TabbarItem onClick={go} data-to="events" text="Мероприятия">
                    <Icon28NewsfeedOutline/>
                </TabbarItem>

                <TabbarItem  onClick={go} data-to="achivements" text="Достижения">
                    <Icon28ServicesOutline />
                </TabbarItem>

                <TabbarItem onClick={go} data-to="info" text="Информация">
                    <Icon28BrainOutline />
                </TabbarItem>

                <TabbarItem style={{color:"#fc2c38"}} onClick={go} data-to="profile" text="Профиль">
                    <Icon28UserOutline style={{color:"#fc2c38"}} width={32} height={32}/>
                </TabbarItem>
                </Tabbar>  
            </Epic> */}

		</Panel>
	)
}


export default eventsMentor;
