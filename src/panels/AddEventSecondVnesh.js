import React from 'react';
import { PanelHeader, Panel,Placeholder, PanelHeaderBack, Div, Button } from '@vkontakte/vkui';




const AddEventSecondVnesh = ({ id, go }) => {

    return (

        <Panel id={id}>

            <PanelHeader
                left={<PanelHeaderBack style={{ color: "#fc2c38" }} onClick={go} data-to="addeventfirst" />}>
                Форма отчета</PanelHeader>
            <Placeholder>
                Выберите формат мероприятия
            </Placeholder>
            <Div>
                <Button  style={{backgroundColor: '#fc2c38'}}  size="xl" onClick={go} data-to="home">Онлайн</Button>
            </Div>
            <Div>
                <Button style={{backgroundColor: '#fc2c38'}} size="xl" onClick={go} data-to="addeventvneshoff">Офлайн</Button>
            </Div>


        </Panel>
    )
}


export default AddEventSecondVnesh;
