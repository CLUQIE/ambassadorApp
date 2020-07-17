import React from 'react';
import { postRequest } from "./functions/fetch.js"
import { Avatar, RichCell, Group, PanelHeader, Panel, ScreenSpinner, Epic, Tabbar, TabbarItem, Header, Cell, PanelHeaderButton, Counter } from '@vkontakte/vkui';
import Icon28UserOutline from '@vkontakte/icons/dist/28/user_outline';
import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline';
import Icon28BrainOutline from '@vkontakte/icons/dist/28/brain_outline';
import Icon28FireOutline from '@vkontakte/icons/dist/28/fire_outline';
import Icon28WriteOutline from '@vkontakte/icons/dist/28/write_outline';
import Icon16Like from '@vkontakte/icons/dist/16/like';
import Icon16Fire from '@vkontakte/icons/dist/16/fire';
import Icon16Smile from '@vkontakte/icons/dist/16/smile';
import Icon16FireVerified from '@vkontakte/icons/dist/16/fire_verified';
import Icon16PaletteOutline from '@vkontakte/icons/dist/16/palette_outline';


const requestURL = 'https://ambassador-todo.herokuapp.com/access/find'
const eventsRequestURL = 'https://ambassador-todo.herokuapp.com/event/ambassador'


const Profile = ({ fetchedUser, id, go }) => {

    const [isLoading, setIsLoading] = React.useState(true);
    const [user, setUser] = React.useState();
    const [eventsData, setEventsData] = React.useState();

    if (fetchedUser != null) {
        const vkID = JSON.stringify({ "vkID": fetchedUser.id })
        postRequest('POST', requestURL, vkID)

            .then(data => {
                setUser(data[0]);
                postRequest('POST', eventsRequestURL, JSON.stringify({ "ambassador": data[0].fullName }))
                    .then(events => {
                        setEventsData(events)
                        setIsLoading(false)
                    })
            })
            .catch(err => console.log(err))
    }


    if (isLoading === true) {
        return (
            <Panel id={id}>
                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <ScreenSpinner style={{ marginTop: '50%' }} />
                </div>
            </Panel>
        )
    }

    return (


        <Panel id={id}>

            <PanelHeader
                left={<PanelHeaderButton><Icon28WriteOutline style={{ color: "#fc2c38" }} onClick={go} data-to="editprofile" /></PanelHeaderButton>}>
                Профиль
            </PanelHeader>
            {fetchedUser &&
                <div style={{ marginBottom: 100 }}>
                    <Group>
                        <RichCell
                            href={"https://vk.com/id"+user.vkID}  
                            target="_blank" 
                            before={<Avatar size={72} src={fetchedUser.photo_100} />}>
                            <span style={{ fontSize: '18px' }}>{user.fullName}</span>
                            <br />
                        </RichCell>
                    </Group>

                    <Group header={<Header mode="secondary">Статистика</Header>}>

                        {/* <Banner
                            mode="image"
                            header="Мои достижения"
                            subheader="Разблокировано 0 из 9"
                            background={
                                <div
                                    style={{
                                        backgroundColor: '#fc2c38',
                                        backgroundImage: 'url(https://i.imgur.com/6yyTLZO.jpg)',
                                        backgroundPosition: 'right bottom',
                                        backgroundSize: 320,
                                        backgroundRepeat: 'no-repeat',
                                    }}
                                />
                            }
                            actions={<Button onClick={go} data-to="badge" style={{ background: 'white', color: "#fc2c38" }} mode="overlay_primary">Подробнее</Button>}
                        /> */}

                        {/* <SimpleCell> */}
                            <Cell before={<Avatar style={{ background: '#fc2c38' }} size={28} shadow={false}><Icon16Like fill="var(--white)" /></Avatar>}
                                  indicator={<Counter key={user._id}>{eventsData.length}</Counter>}>
                                Проведено мероприятий
                            </Cell>
                            <Cell before={<Avatar style={{ background: '#fc2c38' }} size={28} shadow={false}><Icon16Fire fill="var(--white)" /></Avatar>}
                                  indicator={<Counter key={user._id}>{eventsData.length}</Counter>}>
                                Внешние мероприятия
                            </Cell>
                            <Cell before={<Avatar style={{ background: '#fc2c38' }} size={28} shadow={false}><Icon16Smile fill="var(--white)" /></Avatar>}
                                  indicator={<Counter key={user._id}>{eventsData.length}</Counter>}>
                                Онлайн мероприятия
                            </Cell>
                            <Cell before={<Avatar style={{ background: '#fc2c38' }} size={28} shadow={false}><Icon16FireVerified fill="var(--white)" /></Avatar>}
                                  indicator={<Counter key={user._id}>{eventsData.length}</Counter>}>
                                Офлайн мероприятия
                            </Cell>
                            <Cell before={<Avatar style={{ background: '#fc2c38' }} size={28} shadow={false}><Icon16PaletteOutline fill="var(--white)" /></Avatar>}
                                  indicator={<Counter key={user._id}>{eventsData.length}</Counter>}>
                                Количество участников
                            </Cell>
                        {/* </SimpleCell> */}

                        {/* <SimpleCell>
                            <Cell before={<Avatar style={{ background: '#fc2c38' }} size={28} shadow={false}><Icon16Like fill="var(--white)" /></Avatar>} 
                            indicator={<Counter>1</Counter>}>Какая-то статистика</Cell>
                        </SimpleCell> */}
                    </Group>
                    <Group header={<Header mode="secondary">Информация о пользователе</Header>}>
                        <Cell indicator={user.town} >
                            Город
                        </Cell>
                        <Cell indicator={user.birthday} >
                            Дата рождения
                        </Cell>
                        <Cell indicator={user.phoneNumber} >
                            Номер телефона
                        </Cell>
                        <Cell indicator={user.personalEmail} >
                            Email
                        </Cell>
                        <Cell indicator={user.clothingSize} >
                            Размер одежды
                        </Cell>
                        <Cell indicator={user.personalPostalAddress} >
                            Почтовый адерес
                        </Cell>
                        <Cell indicator={user.latinFullName} >
                            ФИО по латински
                        </Cell>
                        <Cell indicator={user.university} >
                            Учебное заведение
                        </Cell>
                        <Cell indicator={user.statusInUniversity} >
                            Статус
                        </Cell>
                        <Cell indicator={user.facultyFull} >
                            Факультет
                        </Cell>
                        <Cell indicator={user.specialty} >
                            Специальность
                        </Cell>
                        <Cell indicator={user.universityPostalAddress} >
                            Адрес учебного заведения
                        </Cell>
                        <Cell indicator={user.rectorFullName} >
                            ФИО ректора
                        </Cell>
                        <Cell indicator={user.rectorPostalAddress} >
                            Email ректора
                        </Cell>
                        
{/* 
                        _id: user._id,
			vkID: user.vkID,
			avatar: " ",
			achievements: " ",
			phoneNumber: phone,
			birthday: birthday,
			fullName: fullName,
			latinFullName: fullNameLatin,
			personalEmail: personalemail,
			town: town,
			university: university,
			universityPostalAddress: universitypostaladdress,
			rectorFullName: rectorfullname,
			rectorPostalAddress: rectorpostaladdress,
			statusInUniversity: statusinuniversity,
			facultyFull: facultyfull,
			facultyShortly: facultyshortly,
			specialty: specialty,
			personalPostalAddress: personalpostaladdress,
			clothingSize: clothingsize */}
                    


                    </Group>
                </div>
            }

            <Epic>
                <Tabbar style={{ marginTop: '100px' }}>
                    <TabbarItem onClick={go} data-to="events" text="Мероприятия">
                        <Icon28NewsfeedOutline />
                    </TabbarItem>

                    <TabbarItem onClick={go} data-to="achivements" text="Рейтинг">
                        <Icon28FireOutline />
                    </TabbarItem>

                    <TabbarItem onClick={go} data-to="info" text="База знаний">
                        <Icon28BrainOutline />
                    </TabbarItem>

                    <TabbarItem style={{ color: "#fc2c38" }} onClick={go} data-to="profile" text="Профиль">
                        <Icon28UserOutline style={{ color: "#fc2c38" }} width={32} height={32} />
                    </TabbarItem>
                </Tabbar>
            </Epic>

        </Panel>
    )
}


export default Profile;
