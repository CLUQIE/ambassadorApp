import React from 'react';
import { PanelHeader, Panel,Placeholder, PanelHeaderBack, Div, Button } from '@vkontakte/vkui';




const AddEventSecondHelp = ({ id, go }) => {

    return (

        <Panel id={id}>

            <PanelHeader
                left={<PanelHeaderBack style={{ color: "#2787F5" }} onClick={go} data-to="addeventfirst" />}>
                Форма отчета</PanelHeader>
            <Placeholder>
                Выберите формат мероприятия
            </Placeholder>
            <Div>
                <Button  style={{backgroundColor: '#2787F5'}}  size="xl" onClick={go} data-to="addeventhelponl">Онлайн</Button>
            </Div>
            <Div>
                <Button style={{backgroundColor: '#2787F5'}} size="xl" onClick={go} data-to="addeventhelpoff">Офлайн</Button>
            </Div>


        </Panel>
    )
}


export default AddEventSecondHelp;