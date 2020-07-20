import React from 'react';
import { PanelHeader, Panel,Placeholder, PanelHeaderBack, Div, Button } from '@vkontakte/vkui';




const AddEventSecondVnesh = ({ id, go }) => {

    return (

        <Panel id={id}>

            <PanelHeader
                left={<PanelHeaderBack style={{ color: "#fc2c38" }} onClick={go} data-to="addeventfirst" />}>
                Форма отчета</PanelHeader>
            {/* {fetchedUser && */}
            {/* <Group>
                <FormLayout>
                    <Input type="text" name="ambassador" top="Имя Фамилия" required 
							status={value ? 'valid' : 'error'}
							bottom={value ? '' : 'Введите обязательное поле!'}
						/>
                    <Select top="Формат участия" placeholder=" " required>
                        <option value="Внешнее мероприятие">Внешнее мероприятие</option>
                        <option value="Внутреннее мероприятие">Внутреннее мероприятие</option>
                        <option value="Помощь и поддержка">Помощь и поддержка</option>
                    </Select>
                </FormLayout>
            </Group> */}
            <Placeholder>
                Выберите формат мероприятия
            </Placeholder>
            <Div>
                <Button  style={{backgroundColor: '#fc2c38'}}  size="xl" onClick={go} data-to="example-2">Онлайн</Button>
            </Div>
            <Div>
                <Button style={{backgroundColor: '#fc2c38'}} size="xl" onClick={go} data-to="example-2">Оффлайн</Button>
            </Div>


        </Panel>
    )
}


export default AddEventSecondVnesh;
