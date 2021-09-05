import React from 'react';
import { PanelHeader, Panel,Placeholder, PanelHeaderBack, Div, Button } from '@vkontakte/vkui';




const AddEventFirst = ({ id, go }) => {

    return (

        <Panel id={id}>

            <PanelHeader
                left={<PanelHeaderBack style={{ color: "#2787F5" }} onClick={go} data-to="events" />}>
                Форма отчета</PanelHeader>
            <Placeholder>
                Выберите формат участия
            </Placeholder>
            <Div>
                <Button  style={{backgroundColor: '#2787F5'}}  size="xl" onClick={go} data-to="addeventsecondvnesh">Внешнее мероприятие</Button>
            </Div>
            <Div>
                <Button style={{backgroundColor: '#2787F5'}} size="xl" onClick={go} data-to="addeventsecondvnutr">Внутреннее мероприятие</Button>
            </Div>
            <Div>
                <Button style={{backgroundColor: '#2787F5'}} size="xl" onClick={go} data-to="addeventsecondhelp">Помощь и поддержка</Button>
            </Div>


        </Panel>
    )
}


export default AddEventFirst;