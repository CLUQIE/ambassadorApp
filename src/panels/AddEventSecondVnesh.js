import React from 'react';
import { PanelHeader, Panel,Placeholder, PanelHeaderBack, Div, Button } from '@vkontakte/vkui';




const AddEventSecondVnesh = ({ id, go }) => {

    return (

        <Panel id={id}>

            <PanelHeader
                left={<PanelHeaderBack style={{ color: "#2787F5" }} onClick={go} data-to="addeventfirst" />}>
                Форма отчета</PanelHeader>
            <Placeholder>
                Выберите формат мероприятия
            </Placeholder>
            <Div>
                <Button  style={{backgroundColor: '#2787F5'}}  size="xl" onClick={go} data-to="home">Онлайн</Button>
            </Div>
            <Div>
                <Button style={{backgroundColor: '#2787F5'}} size="xl" onClick={go} data-to="addeventvneshoff">Офлайн</Button>
            </Div>


        </Panel>
    )
}


export default AddEventSecondVnesh;