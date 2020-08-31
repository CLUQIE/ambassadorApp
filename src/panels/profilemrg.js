import React from 'react';
import { postRequest } from "./functions/fetch.js";
import { excelReport } from "./functions/excelReport"
import { View, Avatar, RichCell, Group, PanelHeader, Panel, ScreenSpinner, Epic, Tabbar, TabbarItem, Header, Cell, Div, Button, ModalRoot, ModalCard, ModalPageHeader, FormLayoutGroup, FormLayout, CellButton } from '@vkontakte/vkui';
import Icon28UserOutline from '@vkontakte/icons/dist/28/user_outline';
import Icon28Users3Outline from '@vkontakte/icons/dist/28/users_3_outline';


const requestURL = 'https://ambassador-todo.herokuapp.com/access/find'
const eventsRequestURL = 'https://ambassador-todo.herokuapp.com/event/ambassador'

const ROUTES = {
    CONFIRM: 'confirm',
};

const ProfileMrg = ({ fetchedUser, id, go }) => {

    const [isLoading, setIsLoading] = React.useState(true);
    const [user, setUser] = React.useState();
    const [fetch, setFetch] = React.useState(true);
    const [activeModal, setActivePanel] = React.useState(null);
    const [quantity, setQuantity] = React.useState(0);
    const [ambassadors, setAmbassadors] = React.useState('');
    const [conf, setConf] = React.useState(false);
    const [eventsData, setEventsData] = React.useState();

    const confirm = (name) => {
        if(conf){
        postRequest('POST', eventsRequestURL, JSON.stringify({ 'ambassador': name }))
            .then(events => {
                //excelReport(events)
            })}
        console.log('confirm')
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
                        Какой отчет?
            </ModalPageHeader>
                }
            >
                <FormLayout>
                    <FormLayoutGroup>
                        {ambassadors ? ambassadors.map((ambs, ambsID) => (
                            <Button key={ambs._id} mode="secondary" size="xl" id='1' style={{ backgroundColor: '#fc2c38', color: 'white' }} onMouseUp={modalBack} onClick={confirm(ambs.fullName), setConf(true)} > {ambs.fullName} </Button>
                        )) : 'empty'}
                    </FormLayoutGroup>
                </FormLayout>


            </ModalCard>
        </ModalRoot>
    )

    if (fetch) {
        if (fetchedUser != null) {
            const vkID = JSON.stringify({ "vkID": fetchedUser.id })
            postRequest('POST', requestURL, vkID)
                .then(data => {
                    setUser(data[0]);
                    postRequest('POST', requestURL, JSON.stringify({ "mentor": data[0].fullName }))
                        .then(ambassador => {
                            console.log(ambassador)
                            setQuantity(ambassador.length)
                            setIsLoading(false)
                            setFetch(false)
                        })
                })
                .catch(err => console.log(err))
        }
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
        <View activePanel={id} modal={modal} >
            <Panel id={id}>

                <PanelHeader>
                    Профиль
                </PanelHeader>
                <div style={{ marginBottom: 100 }}>
                    {fetchedUser &&
                        <Group>
                            <RichCell
                                href={"https://vk.com/id" + user.vkID}
                                target="_blank"
                                before={<Avatar size={72} src={fetchedUser.photo_100} />}>
                                <span style={{ fontSize: '18px' }}>{user.fullName}</span>
                                <br />
                            </RichCell>
                        </Group>
                    }
                    <Group header={<Header mode="secondary">Информация о амбассадорах</Header>}>
                        <Cell indicator={quantity} >
                            Количество амбассадоров
                        </Cell>
                        {/* <Div>
                            <Button size="xl" style={{ background: "#fc2c38" }} onClick={() => { setActivePanel(ROUTES.CONFIRM); }}> Отчет </Button>
                        </Div> */}
                        <Group header={<Header mode="secondary">Статистика Excel</Header>}>
                            <CellButton style={{ color: "#fc2c38" }} onClick={() => { setActivePanel(ROUTES.CONFIRM); }}>Скачать отчет</CellButton>
                        </Group>
                    </Group>
                </div>


                <Epic>
                    <Tabbar style={{ marginTop: '100px' }}>
                        <TabbarItem onClick={go} data-to="listambassador" text="Амбассадоры">
                            <Icon28Users3Outline />
                        </TabbarItem>

                        <TabbarItem style={{ color: "#fc2c38" }} onClick={go} data-to="profilemrg" text="Профиль">
                            <Icon28UserOutline style={{ color: "#fc2c38" }} width={32} height={32} />
                        </TabbarItem>
                    </Tabbar>
                </Epic>

            </Panel>
        </View>
    )
}


export default ProfileMrg;