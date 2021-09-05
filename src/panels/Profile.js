import React from 'react';
import { formatPhoneNumber } from 'react-phone-number-input/input';
import { achieveDescription, typeDescription } from './functions/AchieveDescription'
import { View, ModalRoot, HorizontalScroll, Avatar, Tabs, TabsItem, Div, ModalPage, ModalPageHeader, RichCell, Group, PanelHeader, Panel, Epic, Tabbar, TabbarItem, Header, Cell, PanelHeaderButton, Counter, CellButton } from '@vkontakte/vkui';
import { fullListPng } from './functions/achivementsListReturn'
import Icon28UserOutline from '@vkontakte/icons/dist/28/user_outline';
import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline';
import Icon28FireOutline from '@vkontakte/icons/dist/28/fire_outline';
import Icon28WriteOutline from '@vkontakte/icons/dist/28/write_outline';
import Icon16Like from '@vkontakte/icons/dist/16/like';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import { ProgressTab } from './functions/progressFunctions';


const itemStyle = {
    flexShrink: 0,
    width: 80,
    height: 94,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: 12
};

const grades = ['Freshman', 'Trainee', 'Junior', 'Middle', 'Senior']


const Profile = ({ fetchedUser, id, go, amboEvent, profileInfo, achievementsList }) => {

    const ROUTES = {
        PROFILEINFO: 'profileInfo',
        INSIDEEVENTS: 'inside',
        OUTSIDEEVENTS: 'outside',
        HELPANDSUPPORT: 'helpAndSupport',
        ACHIVES: 'achives',
        ACHIVESDESCRIPTION: 'achivedescription'
    };
    const modalBack = () => {
        setActivePanel(null);
    };

    const [activeModal, setActivePanel] = React.useState(null);
    const [activeTab, setActiveTab] = React.useState({ type: 'types', name: 'Типы достижений' });
    const [achieveDescripActive, setAchieveDescripActive] = React.useState(1);

    const profileModal = (
        <ModalRoot
            activeModal={activeModal}
            onClose={modalBack}
        >
            <ModalPage
                id={ROUTES.PROFILEINFO}
                onClose={modalBack}
                header={
                    <ModalPageHeader
                        left={<PanelHeaderButton onClick={modalBack}><Icon24Cancel /></PanelHeaderButton>}>
                        Подробнее
                    </ModalPageHeader>}>
                <Group>
                    <Cell multiline indicator={<Cell>{profileInfo ? profileInfo.clothingSize : 'empty'}</Cell>} >
                        Размер одежды
                    </Cell>
                    <Cell multiline indicator={<Cell>{profileInfo ? profileInfo.personalPostalAddress : 'empty'}</Cell>} >
                        Почтовый адрес (с индексом)
                    </Cell>
                    {/*  <Cell multiline indicator={<Cell >{profileInfo ? profileInfo.latinFullName : 'empty'}</Cell>} >
                        Амбассадорская почта
                    </Cell> */}
                    <Cell multiline indicator={<Cell >{profileInfo ? profileInfo.universityShortly : 'empty'}</Cell>}>
                        Название учебного заведения
                    </Cell>
                    {/*  <Cell multiline indicator={<Cell >{profileInfo ? profileInfo.facultyFull : 'empty'}</Cell>} >
                        Полное название факультета
                    </Cell>
                    <Cell multiline indicator={<Cell >{profileInfo ? profileInfo.facultyShortly : 'empty'}</Cell>}  >
                        Краткое название факультета
                    </Cell> */}
                    <Cell multiline indicator={<Cell >{profileInfo ? profileInfo.statusInUniversity : 'empty'}</Cell>}  >
                        Статус
                    </Cell>
                    {/* <Cell multiline indicator={<Cell >{profileInfo ? profileInfo.facultyFull : 'empty'} </Cell>}>
                        Факультет
                    </Cell> */}
                    <Cell multiline indicator={<Cell >{profileInfo ? profileInfo.specialty : 'empty'} </Cell>}>
                        Специальность
                    </Cell>
                    {/*  <Cell multiline indicator={<Cell >{profileInfo ? profileInfo.universityPostalAddress : 'empty'} </Cell>}>
                        Адрес учебного заведения
                    </Cell>
                    <Cell multiline indicator={<Cell >{profileInfo ? profileInfo.rectorFullName : 'empty'}</Cell>} >
                        Ф.И.О. ректора
                    </Cell>
                    <Cell multiline indicator={<Cell >{profileInfo ? profileInfo.rectorPostalAddress : 'empty'}</Cell>} >
                        Email ректора
                    </Cell> */}


                </Group>

            </ModalPage>

            <ModalPage
                id={ROUTES.INSIDEEVENTS}
                onClose={modalBack}
                header={
                    <ModalPageHeader
                        left={<PanelHeaderButton onClick={modalBack}><Icon24Cancel /></PanelHeaderButton>}>
                        Формат мероприятий
                    </ModalPageHeader>}>
                <Group>
                    <Cell before={<Avatar style={{ background: '#2787F5' }} size={28} shadow={false}><Icon16Like fill="var(--white)" /></Avatar>}
                        indicator={<Counter >{amboEvent ? amboEvent.filter(function (i, n) { return (i.participationForm === "Внутреннее" && i.eventForm === "Онлайн") }).length : 'empty'} </Counter>}>
                        Онлайн
                    </Cell>
                    <Cell before={<Avatar style={{ background: '#2787F5' }} size={28} shadow={false}><Icon16Like fill="var(--white)" /></Avatar>}
                        indicator={<Counter >{amboEvent ? amboEvent.filter(function (i, n) { return i.participationForm === "Внутреннее" && i.eventForm === "Офлайн" }).length : 'empty'}</Counter>}>
                        Офлайн
                    </Cell>
                </Group>
            </ModalPage>

            <ModalPage
                id={ROUTES.OUTSIDEEVENTS}
                onClose={modalBack}
                header={
                    <ModalPageHeader
                        left={<PanelHeaderButton onClick={modalBack}><Icon24Cancel /></PanelHeaderButton>}>
                        Формат мероприятий
                    </ModalPageHeader>}>
                <Group>
                    <Cell before={<Avatar style={{ background: '#2787F5' }} size={28} shadow={false}><Icon16Like fill="var(--white)" /></Avatar>}
                        indicator={<Counter >{amboEvent ? amboEvent.filter(function (i, n) { return (i.participationForm === "Внешнее" && i.eventForm === "Онлайн") }).length : 'empty'}</Counter>}>
                        Онлайн
                    </Cell>
                    <Cell before={<Avatar style={{ background: '#2787F5' }} size={28} shadow={false}><Icon16Like fill="var(--white)" /></Avatar>}
                        indicator={<Counter >{amboEvent ? amboEvent.filter(function (i, n) { return i.participationForm === "Внешнее" && i.eventForm === "Офлайн" }).length : 'empty'}</Counter>}>
                        Офлайн
                    </Cell>
                </Group>
            </ModalPage>

            <ModalPage
                id={ROUTES.HELPANDSUPPORT}
                onClose={modalBack}
                header={
                    <ModalPageHeader
                        left={<PanelHeaderButton onClick={modalBack}><Icon24Cancel /></PanelHeaderButton>}>
                        Формат мероприятий
                    </ModalPageHeader>}>
                <Group>
                    <Cell before={<Avatar style={{ background: '#2787F5' }} size={28} shadow={false}><Icon16Like fill="var(--white)" /></Avatar>}
                        indicator={<Counter >{amboEvent ? amboEvent.filter(function (i, n) { return (i.participationForm === "Помощь и поддержка" && i.eventForm === "Онлайн") }).length : 'empty'}</Counter>}>
                        Онлайн
                    </Cell>
                    <Cell before={<Avatar style={{ background: '#2787F5' }} size={28} shadow={false}><Icon16Like fill="var(--white)" /></Avatar>}
                        indicator={<Counter >{amboEvent ? amboEvent.filter(function (i, n) { return i.participationForm === "Помощь и поддержка" && i.eventForm === "Офлайн" }).length : 'empty'}</Counter>}>
                        Офлайн
                    </Cell>
                </Group>
            </ModalPage>
            <ModalPage
                id={ROUTES.ACHIVES}
                onClose={modalBack}
                header={
                    <ModalPageHeader
                        left={<PanelHeaderButton onClick={modalBack}><Icon24Cancel /></PanelHeaderButton>}>
                        {activeTab.name}
                    </ModalPageHeader>}>
                <Tabs>
                    <TabsItem
                        onClick={() => setActiveTab({ type: 'achieves', name: 'Достижения' })}
                        selected={activeTab.type === 'achieves'}
                    >
                        Достижения
                    </TabsItem>
                    <TabsItem
                        onClick={() => setActiveTab({ type: 'types', name: 'Типы достижений' })}
                        selected={activeTab.type === 'types'}
                    >
                        Типы
                    </TabsItem>
                </Tabs>
                {activeTab.type === 'achieves' ?
                    <Group >
                        <Div>
                            {achieveDescription ? achieveDescription.map((desc, i) => (
                                <RichCell
                                    key={i + Date.now}
                                    target="_blank"
                                    onClick={() => { setActivePanel(ROUTES.ACHIVESDESCRIPTION); setAchieveDescripActive(i) }}
                                    before={<Avatar src={fullListPng[i][0].png} size={62} />}>
                                    <span style={{ fontSize: '14px' }}><Div>{desc.name} </Div></span>
                                </RichCell>)) : null}
                        </Div>
                    </Group> : <Group >
                        <Div>
                            {typeDescription ? typeDescription.map((desc, i) => (
                                <Group key={i + Date.now} header={<Header mode="secondary">{desc.type}</Header>}><Div>{desc.description}</Div></Group>)) : null}
                        </Div>
                    </Group>}
                <Cell> </Cell>
            </ModalPage>
            <ModalPage
                id={ROUTES.ACHIVESDESCRIPTION}
                onClose={modalBack}
                header={
                    <ModalPageHeader
                        left={<PanelHeaderButton onClick={() => { setActivePanel(ROUTES.ACHIVES) }}><Icon24Cancel /></PanelHeaderButton>}>
                        {achieveDescription[achieveDescripActive].name}
                    </ModalPageHeader>}>
                <Group >
                    <Div>
                        <Group header={<Header mode="secondary">Описание</Header>}><Div>{achieveDescription[achieveDescripActive].description}</Div></Group>
                        <Group header={<Header mode="secondary">Тип достижения</Header>}><Div>{achieveDescription[achieveDescripActive].type}</Div></Group>
                    </Div>
                </Group>
                <Cell> </Cell>
            </ModalPage>

        </ModalRoot>
    )

    return (
        <View activePanel={id} modal={profileModal}>
            <Panel id={id}>

                <PanelHeader
                    left={<PanelHeaderButton><Icon28WriteOutline style={{ color: "#2787F5" }} onClick={go} data-to="editprofile" /></PanelHeaderButton>}>
                    Профиль
                </PanelHeader>
                <div style={{ marginBottom: 100 }}>
                    {fetchedUser &&
                        <Group>
                            <RichCell
                                href={"https://vk.com/id" + profileInfo.vkID}
                                target="_blank"
                                before={<Avatar size={72} src={fetchedUser.photo_100} />}>
                                <span style={{ fontSize: '18px' }}>{profileInfo.fullName}</span>
                                <br />
                                <span style={{ fontSize: '14px', color: 'grey' }}>{profileInfo.grade}</span>
                                <br />
                            </RichCell>
                        </Group>
                    }
                    {/* <Group>
                <Cell indicator={<Counter>{profileInfo.coins ? profileInfo.coins : '0'}</Counter>}>{String.fromCodePoint(0xD83D, 0xDCB3)} Баланс</Cell>
                    </Group> */}

                    <ProgressTab profileInfo={profileInfo} amboEvent={amboEvent} />

                    <Group header={<Header mode="secondary">Статистика</Header>}>
                        <Cell before={<Avatar style={{ background: '#2787F5 ' }} size={28} shadow={false}><Icon16Like fill="var(--white)" /></Avatar>}
                            indicator={<Counter key={profileInfo._id}>{amboEvent ? amboEvent.length : 0}</Counter>}>
                            Всего мероприятий
                        </Cell>
                        <Cell onClick={() => { setActivePanel(ROUTES.INSIDEEVENTS); }} before={<Avatar style={{ background: '#2787F5 ' }} size={28} shadow={false}><Icon16Like fill="var(--white)" /></Avatar>}
                            indicator={<Counter key={profileInfo._id}>{amboEvent ? amboEvent.filter(function (i, n) { return i.participationForm === "Внутреннее" }).length : 0}</Counter>}>
                            Внутренние мероприятия
                        </Cell>
                        <Cell onClick={() => { setActivePanel(ROUTES.OUTSIDEEVENTS); }} before={<Avatar style={{ background: '#2787F5 ' }} size={28} shadow={false}><Icon16Like fill="var(--white)" /></Avatar>}
                            indicator={<Counter key={profileInfo._id}>{amboEvent ? amboEvent.filter(function (i, n) { return i.participationForm === "Внешнее" }).length : 0}</Counter>}>
                            Внешние мероприятия
                        </Cell>
                        <Cell onClick={() => { setActivePanel(ROUTES.HELPANDSUPPORT); }} before={<Avatar style={{ background: '#2787F5 ' }} size={28} shadow={false}><Icon16Like fill="var(--white)" /></Avatar>}
                            indicator={<Counter key={profileInfo._id}>{amboEvent ? amboEvent.filter(function (i, n) { return i.participationForm === "Помощь и поддержка" }).length : 0}</Counter>}>
                            Помощь и поддержка
                        </Cell>

                        {/* <Group header={<Header mode="secondary" aside={<CellButton style={{ color: '#2787F5' }} onClick={() => { setActivePanel(ROUTES.ACHIVES); }}>Подробнее</CellButton>}>Достижения</Header>}>
                            <HorizontalScroll style={profileInfo && profileInfo.achievements !== ' ' ? { paddingTop: 10 } : { paddingTop: 0 }} >
                                {profileInfo && profileInfo.achievements !== ' ' ?
                                    <div style={{ display: 'flex' }}>
                                        {achievementsList ? achievementsList.map((ref) => (ref.map((ref, i) => (
                                            <div onClick={() => { setActivePanel(ROUTES.ACHIVESDESCRIPTION); setAchieveDescripActive(achieveDescription.findIndex((element, id) => { if (element.name === ref.name) return true })) }} key={i + Date.now} style={{ ...itemStyle, paddingLeft: 5, paddingRight: 5 }}>
                                                <Avatar size={72} style={{ marginBottom: 1 }} src={ref.png}></Avatar>
                                            </div>)))) : null}
                                    </div> : <CellButton align='center' style={{ fontSize: '18px', color: 'grey' }} onClick={() => { setActivePanel(ROUTES.ACHIVES); }}> Твои достижения еще впереди!</CellButton>}
                            </HorizontalScroll>
                        </Group> */}

                    </Group>
                    <Group header={<Header mode="secondary">Информация о пользователе</Header>}>
                        <Cell multiline indicator={profileInfo.town} >
                            Город
                        </Cell>
                        <Cell multiline indicator={profileInfo.birthday} >
                            Дата рождения
                        </Cell>
                        {/*  <Cell multiline indicator={formatPhoneNumber(profileInfo.phoneNumber)} >
                            Номер телефона
                        </Cell>
                       <Cell multiline indicator={profileInfo.personalEmail} >
                            Email
                        </Cell> */}
                        <Cell multiline indicator={<div className="IndicatorOverflow">{profileInfo.universityShortly}</div>}
                        >
                            Учебное заведение
                        </Cell>
                        <Cell multiline indicator={profileInfo.statusInUniversity} >
                            Статус
                        </Cell>
                        <CellButton
                            style={{ color: '#2787F5' }}
                            onClick={() => { setActivePanel(ROUTES.PROFILEINFO); }}>Дополнительная информация</CellButton>
                    </Group>
                </div>


                <Epic>
                    <Tabbar style={{ marginTop: '100px' }}>
                        <TabbarItem onClick={go} data-to="events" text="Мероприятия">
                            <Icon28NewsfeedOutline />
                        </TabbarItem>

                        <TabbarItem onClick={go} data-to="achivements" text="Грейды">
                            <Icon28FireOutline />
                        </TabbarItem>

                        <TabbarItem style={{ color: "#2787F5 " }} onClick={go} data-to="profile" text="Профиль">
                            <Icon28UserOutline style={{ color: "#2787F5" }} width={32} height={32} />
                        </TabbarItem>
                    </Tabbar>
                </Epic>

            </Panel>
        </View>
    )
}


export default Profile;