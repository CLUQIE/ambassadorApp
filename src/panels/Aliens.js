import React from 'react';
import { Div, Group, Panel, Placeholder } from '@vkontakte/vkui';
import Icon16Smile from '@vkontakte/icons/dist/16/smile';

const Aliens = ({id}) => {
    return (
        <Panel id={id}>
            <Group>
                <Div>
                    <Placeholder
                        icon={<Icon16Smile width={40} height={40} style={{ color: 'rgb(176,182,192)' }} />}
                        stretched
                    >
                        Вы не амбассадор.<br />
                        Приносим свои извинения.
                    </Placeholder>
                </Div>
            </Group>

        </Panel>
    )
}


export default Aliens;