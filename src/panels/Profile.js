import React from 'react';
import { Avatar, RichCell, Group, FormLayout, PanelHeader, Panel, Input, Epic, Tabbar, TabbarItem} from '@vkontakte/vkui';
import Icon28ServicesOutline from '@vkontakte/icons/dist/28/services_outline';
import Icon28UserOutline from '@vkontakte/icons/dist/28/user_outline';
import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline';
import Icon28BrainOutline from '@vkontakte/icons/dist/28/brain_outline';




const Profile = ({ fetchedUser, id, go }) => {
    
	return (
    
		<Panel id={id}>

			<PanelHeader>
                Профиль
            </PanelHeader>
            {fetchedUser && 
			<Group>
                <RichCell
                before={<Avatar size={72}  />}>
                Name Name
                </RichCell>
                <FormLayout>
                    <Input type="text" name="dateofbirth" top="Дата рождениия" required />
                    <Input type="text" name="dateofbirth" top="Учебное заведение" required />
                    <Input type="text" name="dateofbirth" top="Номер телефона" required />
                </FormLayout>
			</Group>
            }

            <Epic>
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
            </Epic>

		</Panel>
	)
}


export default Profile;
