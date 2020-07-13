import React from 'react';
import {SimpleCell, PanelHeader, Panel, Epic, Tabbar, TabbarItem, Group, Avatar, Select, FormLayout} from '@vkontakte/vkui';
import Icon28UserOutline from '@vkontakte/icons/dist/28/user_outline';
import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline';
import Icon28BrainOutline from '@vkontakte/icons/dist/28/brain_outline';
import Icon28FireOutline from '@vkontakte/icons/dist/28/fire_outline';



const Achivements = ({fetchedUser, id, go }) => {

	return (

		<Panel id={id}>

			<PanelHeader>
                Рейтинг
            </PanelHeader>
            <FormLayout>
                <Select  top="Месяц" placeholder=" ">
                            <option value="Год">Год</option>
              				<option value="Январь">Январь</option>
              				<option value="Февраль">Февраль</option>
                            <option value="Март">Март</option>
                            <option value="Апрель">Апрель</option>
                            <option value="Май">Май</option>
                            <option value="Июнь">Июнь</option>
                            <option value="Июль">Июль</option>
                            <option value="Август">Август</option>
                            <option value="Сентябрь">Сентябрь</option>
                            <option value="Октябрь">Октябрь</option>
                            <option value="Ноябрь">Ноябрь</option>
                            <option value="Декабрь">Декабрь</option>
           	    </Select>
            </FormLayout>
            {fetchedUser && 
			<Group>
              {/* <Header mode="secondary">Что-то</Header> */}
              <SimpleCell before={<Avatar size={48} src={fetchedUser.photo_100} />}  after={'154 балла'}description="Mail.ru Group">{fetchedUser.first_name} {fetchedUser.last_name}</SimpleCell>
              <SimpleCell before={<Avatar size={48} src={fetchedUser.photo_100} />}  after={'121 балл'}description="Команда ВКонтакте">{fetchedUser.first_name} {fetchedUser.last_name}</SimpleCell>
              <SimpleCell before={<Avatar size={48} src={fetchedUser.photo_100} />}  after={'109 баллов'}description="МГУ">{fetchedUser.first_name} {fetchedUser.last_name}</SimpleCell>
              <SimpleCell before={<Avatar size={48} src={fetchedUser.photo_100} />}  after={'108 баллов'}description="Бауманка">{fetchedUser.first_name} {fetchedUser.last_name}</SimpleCell>
              <SimpleCell before={<Avatar size={48} src={fetchedUser.photo_100} />}  after={'99 балла'}description="ИТМО">{fetchedUser.first_name} {fetchedUser.last_name}</SimpleCell>
              <SimpleCell before={<Avatar size={48} src={fetchedUser.photo_100} />}  after={'0 баллов'}description="РГУ им. А.Н. Косыгина">{fetchedUser.first_name} {fetchedUser.last_name}</SimpleCell>
            </Group>
            }
            <Epic>
                <Tabbar>
                <TabbarItem onClick={go} data-to="events" text="Мероприятия">
                    <Icon28NewsfeedOutline/>
                </TabbarItem>

                <TabbarItem style={{color:"#fc2c38"}} onClick={go} data-to="achivements" text="Рейтинг">
                    <Icon28FireOutline style={{color:"#fc2c38"}}/>
                </TabbarItem>

                <TabbarItem onClick={go} data-to="info" text="База знаний">
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
