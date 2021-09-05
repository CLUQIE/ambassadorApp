import React from 'react';
import { excelReport } from "./functions/excelReport";
import { profileReport } from "./functions/profileReport";
import { View, Avatar, Counter, ModalPage, Select, PanelHeaderButton, RichCell, Div, Group, PanelHeader, Panel, Epic, Tabbar, TabbarItem, Header, Cell, Button, ModalRoot, ModalCard, ModalPageHeader, FormLayoutGroup, FormLayout, CellButton } from '@vkontakte/vkui';
import Icon28UserOutline from '@vkontakte/icons/dist/28/user_outline';
import Icon28Users3Outline from '@vkontakte/icons/dist/28/users_3_outline';
import Icon16Like from '@vkontakte/icons/dist/16/like';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon28GhostOutline from '@vkontakte/icons/dist/28/ghost_outline';
import Icon28GraphOutline from '@vkontakte/icons/dist/28/graph_outline';

const ROUTES = {
    CONFIRM: 'confirm',
    CONFIRMPROFILES: 'confirmProfiles',
    ATTENTION: 'attention',
    EVENTSREPORT: 'eventsReport',
    INSIDEEVENTS: 'inside',
    OUTSIDEEVENTS: 'outside',
    HELPANDSUPPORT: 'helpAndSupport',
};

const ProfileMrg = ({ fetchedUser, id, go, profileInfo, allAmbs, allEvents, mentors }) => {

    const [reportUsers, setReportUsers] = React.useState();
    const [activeModal, setActivePanel] = React.useState(null);
    const [month, setMonth] = React.useState();

    const onChangeMonth = (event) => {
        setMonth(event.target.value)
    }

    const confirmProfiles = () => {
        profileReport(reportUsers)
    }

    const confirm = () => {
        let filtredEvents = allEvents.filter(function (i, n) { return (i.date) })
    console.log(allEvents)
        if (allEvents.length && filtredEvents.length !== 0) {
            if (month === "all") {
                filtredEvents = allEvents
            }
            else {
                filtredEvents = allEvents.filter(function (i, n) { return i.date && (i.date[3] + i.date[4] === month) })
            }
            excelReport(filtredEvents)
        }
        else {
            setActivePanel(ROUTES.ATTENTION);
        }
    }

    const modalBack = () => {
        setActivePanel(null);
    }

    const modal = (
        <ModalRoot
            activeModal={activeModal}
            onClose={modalBack}
        >
            <ModalCard
                id={ROUTES.CONFIRM}
                onClose={modalBack}
                header={
                    <ModalPageHeader>
                        Скачать файл?
            </ModalPageHeader>
                }
            >
                <FormLayout>
                    <FormLayoutGroup>
                        <Button mode="secondary" size="xl" id='1' style={{ backgroundColor: '#2787F5', color: 'white' }} onMouseUp={modalBack} onClick={confirm} > Да </Button>

                        <Button mode="secondary" size="xl" id='2' style={{ backgroundColor: '#2787F5', color: 'white' }} onClick={modalBack}> Нет </Button>
                    </FormLayoutGroup>
                </FormLayout>


            </ModalCard>

            <ModalCard
                id={ROUTES.ATTENTION}
                onClose={modalBack}
                header={
                    <Cell multiline>
                        Мероприятия отсутствуют!
                    </Cell>
                }

            ><Cell></Cell>
            </ModalCard>

            <ModalPage
                id={ROUTES.INSIDEEVENTS}
                onClose={modalBack}
                header={
                    <ModalPageHeader
                        left={<PanelHeaderButton onClick={() => { setActivePanel(ROUTES.EVENTSREPORT); }}><Icon24Back style={{ color: 'rgb(176,182,192)' }} /></PanelHeaderButton>}>
                        Формат мероприятий
                    </ModalPageHeader>}>
                <Group>
                    <Cell before={<Avatar style={{ background: '#2787F5' }} size={28} shadow={false}><Icon16Like fill="var(--white)" /></Avatar>}
                        indicator={<Counter >{allEvents ? allEvents.filter(function (i, n) { return (i.participationForm === "Внутреннее" && i.eventForm === "Онлайн") }).length : 'empty'} </Counter>}>
                        Онлайн
                            </Cell>
                    <Cell before={<Avatar style={{ background: '#2787F5' }} size={28} shadow={false}><Icon16Like fill="var(--white)" /></Avatar>}
                        indicator={<Counter >{allEvents ? allEvents.filter(function (i, n) { return i.participationForm === "Внутреннее" && i.eventForm === "Офлайн" }).length : 'empty'}</Counter>}>
                        Офлайн
                            </Cell>
                    <Cell></Cell>
                </Group>
            </ModalPage>

            <ModalPage
                id={ROUTES.OUTSIDEEVENTS}
                onClose={modalBack}
                header={
                    <ModalPageHeader
                        left={<PanelHeaderButton onClick={() => { setActivePanel(ROUTES.EVENTSREPORT); }}><Icon24Back style={{ color: 'rgb(176,182,192)' }} /></PanelHeaderButton>}>
                        Формат мероприятий
                    </ModalPageHeader>}>
                <Group>
                    <Cell before={<Avatar style={{ background: '#2787F5' }} size={28} shadow={false}><Icon16Like fill="var(--white)" /></Avatar>}
                        indicator={<Counter >{allEvents ? allEvents.filter(function (i, n) { return (i.participationForm === "Внешнее" && i.eventForm === "Онлайн") }).length : 'empty'}</Counter>}>
                        Онлайн
                            </Cell>
                    <Cell before={<Avatar style={{ background: '#2787F5' }} size={28} shadow={false}><Icon16Like fill="var(--white)" /></Avatar>}
                        indicator={<Counter >{allEvents ? allEvents.filter(function (i, n) { return i.participationForm === "Внешнее" && i.eventForm === "Офлайн" }).length : 'empty'}</Counter>}>
                        Офлайн
                            </Cell>
                    <Cell></Cell>
                </Group>
            </ModalPage>

            <ModalPage
                id={ROUTES.HELPANDSUPPORT}
                onClose={modalBack}
                header={
                    <ModalPageHeader
                        left={<PanelHeaderButton onClick={() => { setActivePanel(ROUTES.EVENTSREPORT); }}><Icon24Back style={{ color: 'rgb(176,182,192)' }} /></PanelHeaderButton>}>
                        Формат мероприятий
                    </ModalPageHeader>}>
                <Group>
                    <Cell before={<Avatar style={{ background: '#2787F5' }} size={28} shadow={false}><Icon16Like fill="var(--white)" /></Avatar>}
                        indicator={<Counter >{allEvents ? allEvents.filter(function (i, n) { return (i.participationForm === "Помощь и поддержка" && i.eventForm === "Онлайн") }).length : 'empty'}</Counter>}>
                        Онлайн
                            </Cell>
                    <Cell before={<Avatar style={{ background: '#2787F5' }} size={28} shadow={false}><Icon16Like fill="var(--white)" /></Avatar>}
                        indicator={<Counter >{allEvents ? allEvents.filter(function (i, n) { return i.participationForm === "Помощь и поддержка" && i.eventForm === "Офлайн" }).length : 'empty'}</Counter>}>
                        Офлайн
                            </Cell>
                    <Cell></Cell>
                </Group>
            </ModalPage>

            <ModalPage
                id={ROUTES.EVENTSREPORT}
                onClose={modalBack}
                header={
                    <ModalPageHeader
                        left={<PanelHeaderButton onClick={modalBack}><Icon24Cancel /></PanelHeaderButton>}>
                        Статистика мероприятий
                    </ModalPageHeader>}>
                <Group>
                    <Cell onClick={() => { setActivePanel(ROUTES.INSIDEEVENTS); }} before={<Avatar style={{ background: '#2787F5' }} size={28} shadow={false}><Icon16Like fill="var(--white)" /></Avatar>}
                        indicator={<Counter>{allEvents ? allEvents.filter(function (i, n) { return i.participationForm === "Внутреннее" }).length : 'empty'}</Counter>}>
                        Внутренние мероприятия
                            </Cell>
                    <Cell onClick={() => { setActivePanel(ROUTES.OUTSIDEEVENTS); }} before={<Avatar style={{ background: '#2787F5' }} size={28} shadow={false}><Icon16Like fill="var(--white)" /></Avatar>}
                        indicator={<Counter>{allEvents ? allEvents.filter(function (i, n) { return i.participationForm === "Внешнее" }).length : 'empty'}</Counter>}>
                        Внешние мероприятия
                            </Cell>
                    <Cell onClick={() => { setActivePanel(ROUTES.HELPANDSUPPORT); }} before={<Avatar style={{ background: '#2787F5' }} size={28} shadow={false}><Icon16Like fill="var(--white)" /></Avatar>}
                        indicator={<Counter>{allEvents ? allEvents.filter(function (i, n) { return i.participationForm === "Помощь и поддержка" }).length : 'empty'}</Counter>}>
                        Помощь и поддержка
                            </Cell>
                    <Cell></Cell>
                </Group>
            </ModalPage>

            <ModalCard
                id={ROUTES.CONFIRMPROFILES}
                onClose={modalBack}
                header={
                    <ModalPageHeader>
                        Скачать информацию?
            </ModalPageHeader>
                }
            >
                <FormLayout>
                    <FormLayoutGroup>
                        <Button mode="secondary" size="xl" id='1' style={{ backgroundColor: '#2787F5', color: 'white' }} onMouseUp={modalBack} onClick={confirmProfiles} > Да </Button>

                        <Button mode="secondary" size="xl" id='2' style={{ backgroundColor: '#2787F5', color: 'white' }} onClick={modalBack}> Нет </Button>
                    </FormLayoutGroup>
                </FormLayout>
            </ModalCard>

        </ModalRoot>
    )

    const sort = () => {
        let sortUser = [];
        for (let i = 0; i < allAmbs.length; i++) {
            sortUser.push({
                fullName: allAmbs[i].fullName,
                _id: allAmbs[i]._id,
                vkID: allAmbs[i].vkID,
                role: allAmbs[i].role,
                avatar: allAmbs[i].avatar,
                achievements: allAmbs[i].achievements,
                town: allAmbs[i].town,
                birthday: allAmbs[i].birthday,
                grade: allAmbs[i].grade,
                phoneNumber: allAmbs[i].phoneNumber,
                amboEmail: allAmbs[i].amboEmail,
                personalEmail: allAmbs[i].personalEmail,
                mentor: allAmbs[i].mentor,
                university: allAmbs[i].university,
                specialty: allAmbs[i].specialty,
                statusInUniversity: allAmbs[i].statusInUniversity,
                universityShortly: allAmbs[i].universityShortly,
                universityPostalAddress: allAmbs[i].universityPostalAddress,
                rectorFullName: allAmbs[i].rectorFullName,
                rectorPostalAddress: allAmbs[i].rectorPostalAddress,
                facultyFull: allAmbs[i].facultyFull,
                facultyShortly: allAmbs[i].facultyShortly,
                personalPostalAddress: allAmbs[i].personalPostalAddress,
                clothingSize: allAmbs[i].clothingSize,
                __v: allAmbs[i].__v,
            })
        }
        setReportUsers(sortUser)
    }

    return (
        <View activePanel={id} modal={modal} >
            <Panel id={id}>
                <PanelHeader>
                    Профиль
                </PanelHeader>
                <Group>
                    <RichCell
                        href={"https://vk.com/id" + profileInfo.vkID}
                        target="_blank"
                        before={<Avatar size={72} src={fetchedUser.photo_100} />}>
                        <span style={{ fontSize: '18px' }}>{profileInfo.fullName}</span>
                        <br />
                        <span style={{ fontSize: '14px', color: 'grey' }}>{profileInfo.role}</span>
                        <br />
                    </RichCell>
                </Group>
                <Group style={{ marginBottom: 100 }} header={<Header mode="secondary">Информация о амбассадорах</Header>}>
                    <Cell indicator={allAmbs ? allAmbs.length:0} >
                        Количество амбассадоров
                        </Cell>
                    <Cell indicator={allEvents ? allEvents.length:0} >
                        Проведено мероприятий
                        </Cell>
                        {profileInfo.role === 'mentor' ?
                    <CellButton style={{ color: "#2787F5" }} onClick={() => { setActivePanel(ROUTES.EVENTSREPORT); }}>Статистика мероприятий</CellButton>:null}
                    <Group header={<Header mode="secondary">Статистика Excel</Header>}>
                        <Div>
                            <Select onChange={onChangeMonth} placeholder="Выберите месяц мероприятий" bottom="Выберите месяц" >
                                <option value="09">Сентябрь</option>
                                <option value="10">Октябрь</option>
                                <option value="11">Ноябрь</option>
                                <option value="12">Декабрь</option>
                                <option value="01">Январь</option>
                                <option value="02">Февраль</option>
                                <option value="03">Март</option>
                                <option value="04">Апрель</option>
                                <option value="05">Май</option>
                                <option value="all">За все время</option>
                            </Select>
                        </Div>
                        <CellButton style={{ color: "#2787F5" }} onClick={() => { setActivePanel(ROUTES.CONFIRM); }}>Скачать отчет</CellButton>
                    </Group>
                    {profileInfo.role === 'staff' && (navigator.appVersion.indexOf("Win") !== -1 || navigator.appVersion.indexOf("Mac") !== -1) ? <Group header={<Header mode="secondary">Информация из профиля в Excel</Header>}>
                        <CellButton style={{ color: "#2787F5" }} onClick={() => { setActivePanel(ROUTES.CONFIRMPROFILES);}} onMouseUp={sort}>Скачать информацию</CellButton>
                    </Group> : null}
                    {profileInfo.role === 'staff' ? <Group header={<Header mode="secondary">Управление пользователями</Header>}>
                        <CellButton style={{ color: "#2787F5" }} onClick={go} data-to="adduser">Добавить пользователя</CellButton>
                    </Group> : null}
                </Group>

                <Epic>
                    <Tabbar style={{ marginTop: '100px' }}>
                        <TabbarItem onClick={go} data-to="listambassador" text="Амбассадоры">
                            <Icon28Users3Outline />
                        </TabbarItem>

                        {profileInfo.role === 'staff' ? <TabbarItem onClick={mentors ? go : null} data-to="listmentors" text="Наставники">
                            <Icon28GhostOutline  />
                        </TabbarItem> : null}

                        {profileInfo.role === 'staff' ?
                        <TabbarItem  onClick={allEvents ? go : null} data-to="statistics" text="Статистика">
                            <Icon28GraphOutline  />
                        </TabbarItem> :null}

                        <TabbarItem style={{ color: "#2787F5" }} onClick={go} data-to="profilemrg" text="Профиль">
                            <Icon28UserOutline style={{ color: "#2787F5" }}  />
                        </TabbarItem>
                    </Tabbar>
                </Epic>

            </Panel>
        </View>
    )
}

export default ProfileMrg;