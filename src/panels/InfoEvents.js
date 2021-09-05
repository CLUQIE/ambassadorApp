import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import { Card, Div, CardGrid, Group,PanelHeaderBack, Text, Header, Epic, Tabbar, TabbarItem, Cell, Headline} from '@vkontakte/vkui';
import Icon28FireOutline from '@vkontakte/icons/dist/28/fire_outline';
import Icon28UserOutline from '@vkontakte/icons/dist/28/user_outline';
import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline';
import Icon28BrainOutline from '@vkontakte/icons/dist/28/brain_outline';
  

const InfoEvents = ({ id, go}) => (
	<Panel id={id}>
		<PanelHeader left={<PanelHeaderBack style={{color:"#F05C44"}} onClick={go} data-to="events"/>}>
			K-studio
		</PanelHeader>
		
        <Group separator="hide" >
        <CardGrid>
          <Card size="l" mode="shadow">
            <div >
                <img alt="img" style={{ height: 234, width:'100%', objectFit: 'cover', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"/>
                <Div>
                <Header mode="secondary">О МЕРОПРИЯТИИ</Header>

                <Headline  style={{ fontSize:17, fontWeight: 600, marginLeft: 12, marginBottom: 6}}>Название мероприятия</Headline>

                <Text style={{fontSize:15, fontWeight: 'normal', marginLeft: 12}}>
                    Много информации о мероприятии
                </Text>
                </Div>
            </div>
          </Card>
        </CardGrid>
        </Group>


        <Group separator="hide" >
        <CardGrid>
          <Card size="l" mode="shadow">
            <Div> 
            <Header mode="secondary"></Header>
                <Group header={<Header mode="secondary">Информация</Header>} style={{marginBottom: 100}}>
                    <Cell >
                        Количество человек
                    </Cell>
                    <Cell >
                        Ссылки
                    </Cell>
                    <Cell >
                        И тд
                    </Cell>

                </Group>
            </Div>
          </Card>
        </CardGrid>
        </Group>

		<Epic style={{marginTop: '100px'}}>
                <Tabbar>
                    <TabbarItem style={{color:"#2787F5"}} onClick={go} data-to="events" text="Мероприятия">
                        <Icon28NewsfeedOutline style={{color:"#2787F5"}}/>
                    </TabbarItem>
    
                    <TabbarItem onClick={go} data-to="achivements" text="Рейтинг">
                        <Icon28FireOutline/>
                    </TabbarItem>
    
                    <TabbarItem onClick={go} data-to="info" text="База знаний">
                        <Icon28BrainOutline/>
                    </TabbarItem>
    
                    <TabbarItem onClick={go} data-to="profile" text="Профиль">
                        <Icon28UserOutline width={32} height={32}/>
                    </TabbarItem>
                </Tabbar>  
        </Epic>
		
	</Panel>
);



export default InfoEvents;