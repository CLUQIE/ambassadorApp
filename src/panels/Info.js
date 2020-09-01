import React from 'react';
import { Cell, Group, PanelHeader, Panel, Epic, Tabbar, TabbarItem, Header} from '@vkontakte/vkui';
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
			<Group header={<Header mode="secondary">Ресурсы</Header>}>
                    <Cell expandable before={<Icon28CopyOutline style={{color:"#fc2c38"}}/>} target="_blank" href="https://cloud.mail.ru/home/%D0%90%D0%BC%D0%B1%D0%B0%D1%81%D1%81%D0%B0%D0%B4%D0%BE%D1%80%D1%8B%203.0%20">
                        Папка на Облаке
                    </Cell>
			</Group>
            <Group header={<Header mode="secondary">Ссылки на компанию</Header>}>
                    <Cell expandable before={<Icon28CopyOutline style={{color:"#fc2c38"}}/>}  target="_blank" href="https://www.youtube.com/user/TPMGTU/videos">
                        YouTube-канал Технострим  
                    </Cell>
                    <Cell expandable before={<Icon28CopyOutline style={{color:"#fc2c38"}}/>}  target="_blank" href="https://www.corp.mail.ru">
                        Официальный сайт Mail.ru Group 
                    </Cell>
			</Group>
            <Group header={<Header mode="secondary">Метериалы для чтения</Header>}>
                    <Cell expandable before={<Icon28CopyOutline style={{color:"#fc2c38"}}/>} target="_blank" href="https://vk.com/video-153502007_456239172?list=5df1abb45183e47f5e">
                        Интервью с Дмитрием Гришиным
                    </Cell>
                    <Cell expandable before={<Icon28CopyOutline style={{color:"#fc2c38"}}/>} target="_blank" href="https://vk.com/video-153502007_456239241"> 
                        Выступление Бориса Добродеева на форуме ПроеКТОриЯ 
                    </Cell>
                    <Cell expandable before={<Icon28CopyOutline style={{color:"#fc2c38"}}/>} target="_blank" href="https://thebell.io/boris-dobrodeev-mail-ru-group-legkie-modeli-v-internete-zakonchilis">
                        Интервью Бориса Добродеева в The Bell
                    </Cell>
                    <Cell expandable before={<Icon28CopyOutline style={{color:"#fc2c38"}}/>} target="_blank" href="https://www.rbc.ru/interview/technology_and_media/16/12/2019/5dee6c7d9a794758a559c774">
                        Интервью Бориса Добродеева в РБК
                    </Cell>
                    <Cell expandable before={<Icon28CopyOutline style={{color:"#fc2c38"}}/>} target="_blank" href="https://corp.mail.ru/ru/company/strategy_ceo/">
                        Подробный рассказ Бориса Добродеева о экосистеме экосистем  
                    </Cell>
                    <Cell expandable before={<Icon28CopyOutline style={{color:"#fc2c38"}}/>} target="_blank" href="https://corp.imgsmail.ru/media/files/esg2019.pdf">
                        Первый отчет в области устойчивого развития (ESG-отчет)  
                    </Cell>
                    <Cell expandable before={<Icon28CopyOutline style={{color:"#fc2c38"}}/>} target="_blank" href="https://corp.imgsmail.ru/media/files/mail.rugrouparfy2019.pdf">
                        Годовой отчет 2019 года 
                    </Cell>
            </Group>

            <Epic style={{ marginTop: '100px' }}>
                <Tabbar >
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
