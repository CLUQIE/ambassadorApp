import React from 'react';
import { Div, Group, Panel, Placeholder } from '@vkontakte/vkui';
import Icon28Pause from '@vkontakte/icons/dist/28/pause';

const Works = ({id}) => {
    return (
        <Panel id={id}>
            <Group>
                <Div>
                    <Placeholder
                        icon={<Icon28Pause width={40} height={40} style={{ color: 'rgb(176,182,192)' }} />}
                        stretched
                    >
                        Ведутся технические работы.<br />
                        Приносим свои извинения.
                    </Placeholder>
                </Div>
            </Group>

        </Panel>
    )
}


export default Works;