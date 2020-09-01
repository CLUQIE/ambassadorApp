import React from 'react';
import {Group, Cell, PanelHeader, Panel} from '@vkontakte/vkui';

const eventsMentor = ({fetchedUser, id, go }) => {
    
    
	return (
    
		<Panel id={id}>

			<PanelHeader>
                Профиль
            </PanelHeader>
            <Group>
                    <Cell expandable>
                        Инструменты
                    </Cell>
                    <Cell expandable>
                        Важные документы
                    </Cell>
                    <Cell expandable>
                        Презентации
                    </Cell>
                    <Cell expandable>
                        Что-то еще
                    </Cell>
			</Group>

		</Panel>
	)
}


export default eventsMentor;