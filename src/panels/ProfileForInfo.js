import React from 'react';
import { formatPhoneNumber } from 'react-phone-number-input/input';
import { postRequest } from "./functions/fetch.js";
import { View, ModalRoot, ModalCard, FormLayout, FormLayoutGroup, Input, InfoRow, Avatar, Div, ModalPage, ModalPageHeader, Select, Button, RichCell, Group, PanelHeader, Panel, Header, Cell, PanelHeaderButton, Counter, CellButton } from '@vkontakte/vkui';
import Icon16Like from '@vkontakte/icons/dist/16/like';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import { achivementsListReturn } from './functions/achivementsListReturn'

const ProfileForInfo = ({ id, go, info, setFetchApp, setActivePanel, allEvents, allAmbs, profileInfo }) => {

    const requestAccesDelete = 'https://ambassador-todo.herokuapp.com/access/delete'
    const achievementsRefList = ['Образоватор 1000', 'Образоватор 2000', 'Образоватор 3000', 'Текстонаписатор', 'Контроленатор', 'Брехняразрушатор', 'Контентогенератор 5000', 'Публичноговоратор 5000', 'Достигатор', 'Форматоприлагатор', 'Защищатор 3000', 'Нетворкинатор', 'Контентомейкинатор', 'Юнитопривлекатор', 'Проектопроцветатор 1000', 'Идеявоплощатор', 'Собиратор', 'Новостегенератор', 'Фидбекатор', 'Мастератор', 'Скиллопоглощатор 47000']

    const ROUTES = {
        CONFIRM: 'confirm',
        INSIDEEVENTS: 'inside',
        OUTSIDEEVENTS: 'outside',
        HELPANDSUPPORT: 'helpAndSupport',
        UPGRADE: 'upgrade',
        ADDACHIVE: 'addAchive',
        ACHIVES: 'achives',
        ADDCOINS: 'addcoins',
    };
    let userRole = profileInfo.role;
    info !== undefined ? info = info.split(',') : info = ['Акопян Тина Кареновна', 0];
    const user = allAmbs[info[1]]
    let eventsData = allEvents.filter(function (i, n) { return i.ambassador === info[0] });
    const [fetch, setFetch] = React.useState(true);
    const [grade, setGrade] = React.useState();
    const [activeModal, setActiveModal] = React.useState(null);
    const [achievementsList, setAchievementsList] = React.useState('');
    const [newAchive, setNewAchive] = React.useState();
    const [newCoins, setNewCoins] = React.useState();

    const getPng = (list) => {
        setAchievementsList(achivementsListReturn(list))
    }
    if (user && fetch && user.achievements !== undefined) {
        getPng(user.achievements)
        setFetch(false)
    }

    const confirm = () => {
        postRequest('POST', requestAccesDelete, JSON.stringify({ _id: user._id }))
            .then(setActivePanel('start'), setFetchApp(true))
    }

    const modalBack = () => {
        setActiveModal(null);
    };

    const onChangeGrade = (event) => {
        setGrade(event.target.value)
    }

    const onChangeAchive = (achive) => {
        setNewAchive(achive.target.value + ',')
    }

    const onChangeCoins = (coins) => {
        setNewCoins(coins.target.value)
    }

    const addNewAchive = () => {
        let body = JSON.stringify({
            _id: user._id,
            vkID: user.vkID,
            achievements: user.achievements + newAchive,
        })
        postRequest('POST', 'https://ambassador-todo.herokuapp.com/access/update', body)
            .then(data => { setActivePanel('start'); setFetchApp(true) })
    }

    const onClickForm = () => {
        let body = JSON.stringify({
            _id: user._id,
            vkID: user.vkID,
            grade: grade,
        })
        postRequest('POST', 'https://ambassador-todo.herokuapp.com/access/update', body)
            .then(data => { setActivePanel('start'); setFetchApp(true) })
    }

    const onClickCoins = () => {
        let body = JSON.stringify({
            _id: user._id,
            vkID: user.vkID,
            coins: newCoins,
        })
        postRequest('POST', 'https://ambassador-todo.herokuapp.com/access/update', body)
            .then(data => { setActivePanel('start'); setFetchApp(true) })

    }

    const profileModal = (
        <ModalRoot
            activeModal={activeModal}
            onClose={modalBack}
        >
            <ModalCard
                id={ROUTES.CONFIRM}
                onClose={modalBack}
                header={
                    <ModalPageHeader>
                        Удалить пользователя?
            </ModalPageHeader>
                }
            >
                <FormLayout>
                    <FormLayoutGroup>
                        <Button mode="secondary" size="xl" id='1' style={{ backgroundColor: '#fc2c38', color: 'white' }} onMouseUp={modalBack} onClick={confirm} > Да </Button>
                        <Button mode="secondary" size="xl" id='2' style={{ backgroundColor: '#fc2c38', color: 'white' }} onClick={modalBack}> Нет </Button>
                    </FormLayoutGroup>
                </FormLayout>


            </ModalCard>

            <ModalPage
                id={ROUTES.INSIDEEVENTS}
                onClose={modalBack}
                header={
                    <ModalPageHeader
                        left={<PanelHeaderButton onClick={modalBack}><Icon24Cancel /></PanelHeaderButton>}>
                        Формат мероприятий
                    </ModalPageHeader>}>
                <Group>
                    <Cell before={<Avatar style={{ background: '#fc2c38' }} size={28} shadow={false}><Icon16Like fill="var(--white)" /></Avatar>}
                        indicator={<Counter >{eventsData ? eventsData.filter(function (i, n) { return (i.participationForm === "Внутреннее" && i.eventForm === "Онлайн") }).length : 'empty'} </Counter>}>
                        Онлайн
                            </Cell>
                    <Cell before={<Avatar style={{ background: '#fc2c38' }} size={28} shadow={false}><Icon16Like fill="var(--white)" /></Avatar>}
                        indicator={<Counter >{eventsData ? eventsData.filter(function (i, n) { return i.participationForm === "Внутреннее" && i.eventForm === "Офлайн" }).length : 'empty'}</Counter>}>
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
                    <Cell before={<Avatar style={{ background: '#fc2c38' }} size={28} shadow={false}><Icon16Like fill="var(--white)" /></Avatar>}
                        indicator={<Counter >{eventsData ? eventsData.filter(function (i, n) { return (i.participationForm === "Внешнее" && i.eventForm === "Онлайн") }).length : 'empty'}</Counter>}>
                        Онлайн
                            </Cell>
                    <Cell before={<Avatar style={{ background: '#fc2c38' }} size={28} shadow={false}><Icon16Like fill="var(--white)" /></Avatar>}
                        indicator={<Counter >{eventsData ? eventsData.filter(function (i, n) { return i.participationForm === "Внешнее" && i.eventForm === "Офлайн" }).length : 'empty'}</Counter>}>
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
                    <Cell before={<Avatar style={{ background: '#fc2c38' }} size={28} shadow={false}><Icon16Like fill="var(--white)" /></Avatar>}
                        indicator={<Counter >{eventsData ? eventsData.filter(function (i, n) { return (i.participationForm === "Помощь и поддержка" && i.eventForm === "Онлайн") }).length : 'empty'}</Counter>}>
                        Онлайн
                            </Cell>
                    <Cell before={<Avatar style={{ background: '#fc2c38' }} size={28} shadow={false}><Icon16Like fill="var(--white)" /></Avatar>}
                        indicator={<Counter >{eventsData ? eventsData.filter(function (i, n) { return i.participationForm === "Помощь и поддержка" && i.eventForm === "Офлайн" }).length : 'empty'}</Counter>}>
                        Офлайн
                            </Cell>
                </Group>
            </ModalPage>

            <ModalPage
                id={ROUTES.UPGRADE}
                onClose={modalBack}
                header={
                    <ModalPageHeader
                        left={<PanelHeaderButton onClick={modalBack}><Icon24Cancel /></PanelHeaderButton>}>
                        Изменить grade
                    </ModalPageHeader>}>
                <Group >
                    <Div>
                        <Select onChange={onChangeGrade} top="Grade" placeholder={user ? user.grade : "empty"} required>
                            <option value="Freshman">Freshman</option>
                            <option value="Trainee">Trainee</option>
                            <option value="Junior">Junior</option>
                            <option value="Middle">Middle</option>
                            <option value="Senior">Senior</option>
                        </Select>
                    </Div>
                    <Cell> </Cell>
                    <Div>
                        <Button style={{ backgroundColor: '#fc2c38' }} type='submit' size='xl' onClick={onClickForm} onMouseUp={modalBack} >Изменить</Button>
                    </Div>
                </Group>
                <Cell> </Cell>
            </ModalPage>

            <ModalPage
                id={ROUTES.ADDACHIVE}
                onClose={modalBack}
                header={
                    <ModalPageHeader
                        left={<PanelHeaderButton onClick={modalBack}><Icon24Cancel /></PanelHeaderButton>}>
                        Присвоить достижение
                    </ModalPageHeader>}>
                <Group >
                    <Div>
                        <Select onChange={onChangeAchive} top="Достижение" placeholder='Выберите достижение' required>
                            {achievementsRefList.map((achive, i) => (<option key={i + Date.now} value={achive} >{achive}</option>))}
                        </Select>
                    </Div>
                    <Cell> </Cell>
                    <Div>
                        <Button style={{ backgroundColor: '#fc2c38' }} type='submit' size='xl' onClick={addNewAchive} onMouseUp={modalBack} >Присвоить</Button>
                    </Div>
                </Group>
                <Cell> </Cell>
            </ModalPage>

            <ModalPage
                id={ROUTES.ACHIVES}
                onClose={modalBack}
                header={
                    <ModalPageHeader
                        left={<PanelHeaderButton onClick={modalBack}><Icon24Cancel /></PanelHeaderButton>}>
                        Достижения
                    </ModalPageHeader>}>
                <Group >
                    {user && user.achievements !== ' ' ?
                        <Div>
                            {achievementsList ? achievementsList.map((ref) => (ref.map((ref, i) => (
                                <RichCell
                                    key={i + Date.now}
                                    target="_blank"
                                    before={<img src={ref.png} width="72" height="72" alt="lorem" />}>
                                    <span style={{ fontSize: '18px' }}><Div>{ref.name} </Div></span>
                                </RichCell>)))) : null}
                        </Div> :
                        <Div align='center' style={{ marginBottom: '20px', color: 'rgb(176,182,192)' }}>
                            Пока нет достижений.
                        </Div>}
                </Group>
                <Cell> </Cell>
            </ModalPage>

            <ModalPage
                id={ROUTES.ADDCOINS}
                onClose={modalBack}
                header={
                    <ModalPageHeader
                        left={<PanelHeaderButton onClick={modalBack}><Icon24Cancel /></PanelHeaderButton>}>
                        Изменить баланс
                    </ModalPageHeader>}>
                <Group>
                    <Input onChange={onChangeCoins} type="text" name="coins" top="Новый баланс" />
                    <Button style={{ backgroundColor: '#fc2c38', marginTop: 20 }} type='submit' size='xl' onClick={onClickCoins} onMouseUp={modalBack}>Изменить</Button>
                </Group>
                <Cell> </Cell>
            </ModalPage>
        </ModalRoot>
    )

    return (
        <View activePanel={id} modal={profileModal}>
            <Panel id={id}>

                <PanelHeader
                    left={<PanelHeaderButton style={{ color: "#fc2c38" }} onClick={go} data-to="listambassador" > <Icon24Cancel /></PanelHeaderButton>}>
                    Профиль
            </PanelHeader>
                <div style={{ marginBottom: 50 }}>
                    {
                        <Group>
                            <RichCell
                                href={"https://vk.com/id" + user.vkID}
                                target="_blank">
                                <span style={{ fontSize: '18px' }}>{user.fullName}</span>
                                <br />
                                <span style={{ fontSize: '14px', color: 'grey' }}>{user.grade}</span>
                                <br />
                            </RichCell>
                            <CellButton style={{ color: '#fc2c38' }} onClick={() => { setActiveModal(ROUTES.UPGRADE); }}>Изменить grade</CellButton>
                        </Group>
                    }
                    <Group>
                        <Cell indicator={<Counter>{user.coins ? user.coins : '0'}</Counter>}>{String.fromCodePoint(0xD83D, 0xDCB3)} Баланс</Cell>
                        <CellButton style={{ color: '#fc2c38' }} onClick={() => { setActiveModal(ROUTES.ADDCOINS); }}>Изменить баланс</CellButton>
                    </Group>
                    {userRole === "staff" ? <Group header={<Header mode="secondary">Staff функции</Header>}>
                        <CellButton
                            style={{ color: '#fc2c38' }}
                            onClick={go}
                            data-to="editprofileforstaff"
                            data-id={user.vkID}>Редактировать профиль</CellButton>
                        <CellButton
                            style={{ color: '#fc2c38' }}
                            onClick={() => { setActiveModal(ROUTES.CONFIRM); }}
                            data-id={user.vkID}>Удалить пользователя</CellButton>
                    </Group> : null}

                    <Group header={<Header mode="secondary"> Достижения </Header>}>
                        <CellButton
                            style={{ color: '#fc2c38' }}
                            onClick={() => { setActiveModal(ROUTES.ACHIVES); }}>Посмотреть достижения</CellButton>
                        <CellButton
                            style={{ color: '#fc2c38' }}
                            onClick={() => { setActiveModal(ROUTES.ADDACHIVE); }}
                            data-id={user.vkID}> Присвоить достижение </CellButton>
                    </Group>

                    <Group header={<Header mode="secondary">Статистика</Header>}>
                        <Cell before={<Avatar style={{ background: '#fc2c38' }} size={28} shadow={false}><Icon16Like fill="var(--white)" /></Avatar>}
                            indicator={<Counter key={user._id}>{eventsData.length}</Counter>}>
                            Всего мероприятий
                            </Cell>
                        <Cell onClick={() => { setActiveModal(ROUTES.INSIDEEVENTS); }} before={<Avatar style={{ background: '#fc2c38' }} size={28} shadow={false}><Icon16Like fill="var(--white)" /></Avatar>}
                            indicator={<Counter key={user._id}>{eventsData.filter(function (i, n) { return i.participationForm === "Внутреннее" }).length}</Counter>}>
                            Внутренние мероприятия
                            </Cell>
                        <Cell onClick={() => { setActiveModal(ROUTES.OUTSIDEEVENTS); }} before={<Avatar style={{ background: '#fc2c38' }} size={28} shadow={false}><Icon16Like fill="var(--white)" /></Avatar>}
                            indicator={<Counter key={user._id}>{eventsData.filter(function (i, n) { return i.participationForm === "Внешнее" }).length}</Counter>}>
                            Внешние мероприятия
                            </Cell>
                        <Cell onClick={() => { setActiveModal(ROUTES.HELPANDSUPPORT); }} before={<Avatar style={{ background: '#fc2c38' }} size={28} shadow={false}><Icon16Like fill="var(--white)" /></Avatar>}
                            indicator={<Counter key={user._id}>{eventsData.filter(function (i, n) { return i.participationForm === "Помощь и поддержка" }).length}</Counter>}>
                            Помощь и поддержка
                            </Cell>

                    </Group>
                    <Group header={<Header mode="secondary">Информация о пользователе</Header>}>
                        <Cell multiline indicator={<InfoRow><Cell multiline><span style={{ color: '#838c98' }}>{user.town}</span></Cell></InfoRow>} >
                            Город
                        </Cell>
                        <Cell multiline indicator={<InfoRow><Cell multiline><span style={{ color: '#838c98' }}>{user.birthday}</span></Cell></InfoRow>} >
                            Дата рождения
                        </Cell>
                        <Cell multiline indicator={<InfoRow><Cell multiline><span style={{ color: '#838c98' }}>{formatPhoneNumber(user.phoneNumber)}</span></Cell></InfoRow>} >
                            Номер телефона
                        </Cell>
                        <Cell multiline indicator={<InfoRow><Cell multiline><span style={{ color: '#838c98' }}>{user.personalEmail}</span></Cell></InfoRow>} >
                            Email
                        </Cell>
                        <Cell multiline indicator={<InfoRow><Cell multiline><span style={{ color: '#838c98' }}>{user.universityShortly}</span></Cell></InfoRow>} >
                            Учебное заведение
                        </Cell>
                        <Cell multiline indicator={<InfoRow><Cell multiline><span style={{ color: '#838c98' }}>{user.clothingSize}</span></Cell></InfoRow>} >
                            Размер одежды
                        </Cell>
                        <Cell multiline indicator={<InfoRow><Cell multiline ><span style={{ color: '#838c98' }}>{user.personalPostalAddress}</span></Cell></InfoRow>} >
                            Почтовый адрес (с индексом)
                        </Cell>
                        <Cell multiline indicator={<InfoRow><Cell multiline><span style={{ color: '#838c98' }}>{user.latinFullName}</span></Cell></InfoRow>}>
                            Амбассадорская почта
                        </Cell>
                        <Cell multiline indicator={<InfoRow><Cell multiline><span style={{ color: '#838c98' }}>{user.university}</span></Cell></InfoRow>} >
                            Полное название учебного заведения
                        </Cell>
                        <Cell multiline indicator={<InfoRow><Cell multiline><span style={{ color: '#838c98' }}>{user.facultyFull}</span></Cell></InfoRow>} >
                            Полное название факультета
                        </Cell>
                        <Cell multiline indicator={<InfoRow><Cell multiline><span style={{ color: '#838c98' }}>{user.facultyShortly} </span></Cell></InfoRow>}>
                            Краткое название факультета
                        </Cell>
                        <Cell multiline indicator={<InfoRow><Cell multiline><span style={{ color: '#838c98' }}>{user.statusInUniversity}</span></Cell></InfoRow>} >
                            Статус
                        </Cell>
                        <Cell multiline indicator={<InfoRow><Cell multiline><span style={{ color: '#838c98' }}>{user.facultyFull}</span></Cell></InfoRow>} >
                            Факультет
                        </Cell>
                        <Cell multiline indicator={<InfoRow><Cell multiline><span style={{ color: '#838c98' }}>{user.specialty}</span></Cell></InfoRow>} >
                            Специальность
                        </Cell>
                        <Cell multiline indicator={<InfoRow><Cell multiline><span style={{ color: '#838c98' }}>{user.universityPostalAddress}</span></Cell></InfoRow>} >
                            Адрес учебного заведения
                        </Cell>
                        <Cell multiline indicator={<InfoRow><Cell multiline><span style={{ color: '#838c98' }}>{user.rectorFullName}</span></Cell></InfoRow>}>
                            ФИО ректора
                        </Cell>
                        <Cell multiline indicator={<InfoRow><Cell multiline><span style={{ color: '#838c98' }}>{user.rectorPostalAddress}</span></Cell></InfoRow>} >
                            Email ректора
                        </Cell>

                    </Group>
                </div>
            </Panel>
        </View>
    )
}


export default ProfileForInfo;