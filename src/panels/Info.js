import React from 'react';
import { Cell, Group, PanelHeader, Panel, Epic, Tabbar, TabbarItem} from '@vkontakte/vkui';
import Icon28UserOutline from '@vkontakte/icons/dist/28/user_outline';
import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline';
import Icon28BrainOutline from '@vkontakte/icons/dist/28/brain_outline';
import Icon28FireOutline from '@vkontakte/icons/dist/28/fire_outline';
import Icon28CopyOutline from '@vkontakte/icons/dist/28/copy_outline';




const Info = ({ id, go }) => {

	return (

		<Panel id={id}>

			<PanelHeader>
                База знаний
            </PanelHeader>
			<Group>
                    <Cell expandable before={<Icon28CopyOutline style={{color:"#fc2c38"}}/>}>
                        Инструменты
                    </Cell>
                    <Cell expandable before={<Icon28CopyOutline style={{color:"#fc2c38"}}/>}>
                        Важные документы
                    </Cell>
                    <Cell expandable before={<Icon28CopyOutline style={{color:"#fc2c38"}}/>}>
                        Презентации
                    </Cell>
                    <Cell expandable before={<Icon28CopyOutline style={{color:"#fc2c38"}}/>}>
                        Что-то еще
                    </Cell>
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


export default Info;
