import React from 'react';
import { Div, Group, Panel, Placeholder, ScreenSpinner } from '@vkontakte/vkui';

const Start = ({ id, setActivePanel, allAmbs, profileInfo, fetchedUser }) => {
    if (profileInfo) {
        if (profileInfo.role === 'ambassador' && allAmbs ) {
            const stateAmb = () => {
                setActivePanel('profile')
            }
            setTimeout(stateAmb, 2000)
            return (<Panel id={id}>
                <Group>
                    <Div>
                        <Placeholder
                            stretched
                        >
                            Добро пожаловать, {fetchedUser.first_name}!
                    </Placeholder>
                    </Div>
                </Group>

            </Panel>)

        }
        else if (profileInfo.role === 'mentor' && allAmbs) {
            const stateMentor = () => {
                setActivePanel('profilemrg')
            }
            setTimeout(stateMentor, 2000)
            return (<Panel id={id}>
                <Group>
                    <Div>
                        <Placeholder
                            stretched
                        >
                            Добро пожаловать, {fetchedUser.first_name}!
                        </Placeholder>
                    </Div>
                </Group>

            </Panel>)
        }
        else if (profileInfo.role === 'staff' && allAmbs) {
            const stateStaff = () => {
                setActivePanel('profilemrg')
            }
            setTimeout(stateStaff, 2000)
            return (<Panel id={id}>
                <Group>
                    <Div>
                        <Placeholder
                            stretched
                        >
                            Добро пожаловать, {fetchedUser.first_name}!
                        </Placeholder>
                    </Div>
                </Group>

            </Panel>)
        }

    }
    return (
        <Panel id={id}>
            <Group>
                <Div>
                    <Placeholder
                        icon={<ScreenSpinner width={40} height={40} style={{ color: 'rgb(176,182,192)' }} />}
                        stretched
                    >
                        Проверка данных...
                    </Placeholder>
                </Div>
            </Group>

        </Panel>
    )

}


export default Start;