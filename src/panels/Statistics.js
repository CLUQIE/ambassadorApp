import React from 'react';
import { Line } from 'react-chartjs-2';
import { Counter, Group, PanelHeader, Panel, Epic, Tabbar, TabbarItem, Header, Cell } from '@vkontakte/vkui';
import Icon28UserOutline from '@vkontakte/icons/dist/28/user_outline';
import Icon28Users3Outline from '@vkontakte/icons/dist/28/users_3_outline';
import Icon28GhostOutline from '@vkontakte/icons/dist/28/ghost_outline';
import Icon28GraphOutline from '@vkontakte/icons/dist/28/graph_outline';

const Statistics = ({ id, go, allAmbs, allEvents, mentors }) => {
    const date = new Date();
    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
    let valuesForTopNow = []
    let valuesForTopAll = []
    let inEvents = []
    let outEvents = []
    let helpEvents = []
    let labelsMonths = []

    let inEventsNow = allEvents.filter(function (i, n) { return i.date && i.participationForm === "Внутреннее" && i.date[3] + i.date[4] == date.getMonth() + 1 }).length
    let outEventsNow = allEvents.filter(function (i, n) { return i.date && i.participationForm === "Внешнее" && i.date[3] + i.date[4] == date.getMonth() + 1 }).length
    let helpEventsNow = allEvents.filter(function (i, n) { return i.date && i.participationForm === "Помощь и поддержка" && i.date[3] + i.date[4] == date.getMonth() + 1 }).length

    let inEventsPrev = allEvents.filter(function (i, n) { return i.date && i.participationForm === "Внутреннее" && i.date[3] + i.date[4] == date.getMonth() }).length
    let outEventsPrev = allEvents.filter(function (i, n) { return i.date && i.participationForm === "Внешнее" && i.date[3] + i.date[4] == date.getMonth() }).length
    let helpEventsPrev = allEvents.filter(function (i, n) { return i.date && i.participationForm === "Помощь и поддержка" && i.date[3] + i.date[4] == date.getMonth() }).length

    for (let i = 8; i < 13; i++) {
        inEvents.push(allEvents.filter(function (event, n) { return (event.date && event.date[3] + event.date[4] == i && event.date.substr(6, 9) == date.getFullYear() - 1 && event.participationForm === "Внутреннее") }).length)
        outEvents.push(allEvents.filter(function (event, n) { return (event.date && event.date[3] + event.date[4] == i && event.date.substr(6, 9) == date.getFullYear() - 1 && event.participationForm === "Внешнее") }).length)
        helpEvents.push(allEvents.filter(function (event, n) { return (event.date && event.date[3] + event.date[4] == i && event.date.substr(6, 9) == date.getFullYear() - 1 && event.participationForm === "Помощь и поддержка") }).length)
        labelsMonths.push(months[i - 1])
    }
    for (let i = 1; i < 8; i++) {
        inEvents.push(allEvents.filter(function (event, n) { return (event.date && event.date[3] + event.date[4] == i && event.date.substr(6, 9) == date.getFullYear() && event.participationForm === "Внутреннее") }).length)
        outEvents.push(allEvents.filter(function (event, n) { return (event.date && event.date[3] + event.date[4] == i && event.date.substr(6, 9) == date.getFullYear() && event.participationForm === "Внешнее") }).length)
        helpEvents.push(allEvents.filter(function (event, n) { return (event.date && event.date[3] + event.date[4] == i && event.date.substr(6, 9) == date.getFullYear() && event.participationForm === "Помощь и поддержка") }).length)
        labelsMonths.push(months[i - 1])
    }

    for (let i = 0; i < allAmbs.length; i++) {
        valuesForTopNow.push({ name: allAmbs[i].fullName, events: allEvents.filter(function (event, n) { return event.date && event.date[3] + event.date[4] == date.getMonth() + 1 && event.ambassador === allAmbs[i].fullName }).length })
        valuesForTopAll.push({ name: allAmbs[i].fullName, events: allEvents.filter(function (event, n) { return event.ambassador === allAmbs[i].fullName }).length })
    }
    valuesForTopNow.sort((a, b) => a.events > b.events ? 1 : -1);
    valuesForTopAll.sort((a, b) => a.events > b.events ? 1 : -1);

    let data = {
        labels: labelsMonths,
        datasets: [
            {
                label: 'Внутренние',
                data: inEvents,
                borderColor: [
                    'rgba(39, 135, 245, 1)',
                ],
                backgroundColor: [
                    'rgba(39, 135, 245, 0)',
                ],
                borderWidth: 5,
            },
            {
                label: 'Внешние',
                data: outEvents,
                borderColor: [
                    'rgba(129, 140, 153, 1)',
                ],
                backgroundColor: [
                    'rgba(129, 140, 153, 0)',
                ],
                borderWidth: 5,
            },
            {
                label: 'Помощь и поддержка',
                data: helpEvents,
                borderColor: [
                    'rgba(51, 51, 51, 1)'
                ],
                backgroundColor: [
                    'rgba(51, 51, 51, 0)'
                ],
                borderWidth: 5,
            }
        ]
    }

    return (
        <Panel id={id}>
            <PanelHeader>
                Статистика
            </PanelHeader>
            <Group>
                <Cell
                    align='center'
                >
                    <span style={{ fontSize: '30px' }}>Всего мероприятий:{allEvents ? allEvents.length : 0} </span></Cell>
            </Group>
            <Group header={<Header style={{ color: "#2787F5" }} >Расширенная статистика</Header>}>
                <Line
                    data={data}
                    width={10}
                    height={10}
                />
            </Group>
            <Group header={<Header style={{ color: "#2787F5" }} >Последний месяц</Header>}>
                {inEventsNow > inEventsPrev ?
                    <Cell
                        indicator={<Counter key={Date.now()}>{inEventsNow}</Counter>}>
                        Внутренние мероприятия(увел. на {inEventsNow - inEventsPrev})
                    </Cell> :
                    <Cell
                        indicator={<Counter key={Date.now()}>{inEventsNow}</Counter>}>
                        Внутренние мероприятия(умен. на {inEventsPrev - inEventsNow})
                    </Cell>}

                {outEventsNow > outEventsPrev ?
                    <Cell indicator={<Counter key={Date.now()}>{outEventsNow}</Counter>}>
                        Внешние мероприятия(увел. на {outEventsNow - outEventsPrev})
                    </Cell> :
                    <Cell indicator={<Counter key={Date.now()}>{outEventsNow}</Counter>}>
                        Внешние мероприятия(умен. на {outEventsPrev - outEventsNow})
                    </Cell>}

                {helpEventsNow > helpEventsPrev ?
                    <Cell indicator={<Counter key={Date.now()}>{helpEventsNow}</Counter>}>
                        Помощь и поддержка(увел. на {helpEventsNow - helpEventsPrev})
                    </Cell> :
                    <Cell indicator={<Counter key={Date.now()}>{helpEventsNow}</Counter>}>
                        Помощь и поддержка(умен. на {helpEventsPrev - helpEventsNow})
                    </Cell>}

                <Cell indicator={<Counter key={Date.now()}>{inEventsNow + outEventsNow + helpEventsNow}</Counter>}>
                    Всего мероприятий
                </Cell>
            </Group>
            <Group header={<Header style={{ color: "#2787F5" }} >5 активных за последний месяц</Header>}>
                <Cell indicator={<Counter key={Date.now()}>{valuesForTopNow.length > 5 ? valuesForTopNow[valuesForTopNow.length - 1].events : 0}</Counter>}> {valuesForTopNow.length > 5 ? valuesForTopNow[valuesForTopNow.length - 1].name : '...'}</Cell>
                <Cell indicator={<Counter key={Date.now()}>{valuesForTopNow.length > 5 ? valuesForTopNow[valuesForTopNow.length - 2].events : 0}</Counter>}> {valuesForTopNow.length > 5 ? valuesForTopNow[valuesForTopNow.length - 2].name : '...'}</Cell>
                <Cell indicator={<Counter key={Date.now()}>{valuesForTopNow.length > 5 ? valuesForTopNow[valuesForTopNow.length - 3].events : 0}</Counter>}> {valuesForTopNow.length > 5 ? valuesForTopNow[valuesForTopNow.length - 3].name : '...'}</Cell>
                <Cell indicator={<Counter key={Date.now()}>{valuesForTopNow.length > 5 ? valuesForTopNow[valuesForTopNow.length - 4].events : 0}</Counter>}> {valuesForTopNow.length >  5 ? valuesForTopNow[valuesForTopNow.length - 4].name : '...'}</Cell>
                <Cell indicator={<Counter key={Date.now()}>{valuesForTopNow.length > 5 ? valuesForTopNow[valuesForTopNow.length - 5].events : 0}</Counter>}> {valuesForTopNow.length > 5 ? valuesForTopNow[valuesForTopNow.length - 5].name : '...'}</Cell>
            </Group>
            <Group header={<Header style={{ color: "#2787F5" }} >5 неактивных за последний месяц</Header>}>
                <Cell indicator={<Counter key={Date.now()}>{valuesForTopNow.length > 5 ? valuesForTopNow[0].events : 0}</Counter>}> {valuesForTopNow.length > 5 ? valuesForTopNow[0].name : '...'}</Cell>
                <Cell indicator={<Counter key={Date.now()}>{valuesForTopNow.length > 5 ? valuesForTopNow[1].events : 0}</Counter>}> {valuesForTopNow.length > 5 ? valuesForTopNow[1].name : '...'}</Cell>
                <Cell indicator={<Counter key={Date.now()}>{valuesForTopNow.length > 5 ? valuesForTopNow[2].events : 0}</Counter>}> {valuesForTopNow.length > 5 ? valuesForTopNow[2].name : '...'}</Cell>
                <Cell indicator={<Counter key={Date.now()}>{valuesForTopNow.length > 5 ? valuesForTopNow[3].events : 0}</Counter>}> {valuesForTopNow.length > 5 ? valuesForTopNow[3].name : '...'}</Cell>
                <Cell indicator={<Counter key={Date.now()}>{valuesForTopNow.length > 5 ? valuesForTopNow[4].events : 0}</Counter>}> {valuesForTopNow.length > 5 ? valuesForTopNow[4].name : '...'}</Cell>
            </Group>
            <Group header={<Header style={{ color: "#2787F5" }} >5 активных за все время</Header>}>
                <Cell indicator={<Counter key={Date.now()}>{valuesForTopNow.length > 5 ? valuesForTopAll[valuesForTopAll.length - 1].events : 0}</Counter>}> {valuesForTopNow.length > 5 ? valuesForTopAll[valuesForTopAll.length - 1].name : '...'}</Cell>
                <Cell indicator={<Counter key={Date.now()}>{valuesForTopNow.length > 5 ? valuesForTopAll[valuesForTopAll.length - 2].events : 0}</Counter>}> {valuesForTopNow.length > 5 ? valuesForTopAll[valuesForTopAll.length - 2].name : '...'}</Cell>
                <Cell indicator={<Counter key={Date.now()}>{valuesForTopNow.length > 5 ? valuesForTopAll[valuesForTopAll.length - 3].events : 0}</Counter>}> {valuesForTopNow.length > 5 ? valuesForTopAll[valuesForTopAll.length - 3].name : '...'}</Cell>
                <Cell indicator={<Counter key={Date.now()}>{valuesForTopNow.length > 5 ? valuesForTopAll[valuesForTopAll.length - 4].events : 0}</Counter>}> {valuesForTopNow.length > 5 ? valuesForTopAll[valuesForTopAll.length - 4].name : '...'}</Cell>
                <Cell indicator={<Counter key={Date.now()}>{valuesForTopNow.length > 5 ? valuesForTopAll[valuesForTopAll.length - 5].events : 0}</Counter>}> {valuesForTopNow.length > 5 ? valuesForTopAll[valuesForTopAll.length - 5].name : '...'}</Cell>
            </Group>
            <Group style={{ marginBottom: 50 }} header={<Header >5 неактивных за все время</Header>}>
                <Cell indicator={<Counter key={Date.now()}>{valuesForTopNow.length > 5 ? valuesForTopAll[0].events : 0}</Counter>}> {valuesForTopNow.length > 5 ? valuesForTopAll[0].name : '...'}</Cell>
                <Cell indicator={<Counter key={Date.now()}>{valuesForTopNow.length > 5 ? valuesForTopAll[1].events : 0}</Counter>}> {valuesForTopNow.length > 5 ? valuesForTopAll[1].name : '...'}</Cell>
                <Cell indicator={<Counter key={Date.now()}>{valuesForTopNow.length > 5 ? valuesForTopAll[2].events : 0}</Counter>}> {valuesForTopNow.length > 5 ? valuesForTopAll[2].name : '...'}</Cell>
                <Cell indicator={<Counter key={Date.now()}>{valuesForTopNow.length > 5 ? valuesForTopAll[3].events : 0}</Counter>}> {valuesForTopNow.length > 5 ? valuesForTopAll[3].name : '...'}</Cell>
                <Cell indicator={<Counter key={Date.now()}>{valuesForTopNow.length > 5 ? valuesForTopAll[4].events : 0}</Counter>}> {valuesForTopNow.length > 5 ? valuesForTopAll[4].name : '...'}</Cell>
            </Group>

            <Epic>
                <Tabbar style={{ marginTop: '100px' }}>
                    <TabbarItem onClick={go} data-to="listambassador" text="Амбассадоры">
                        <Icon28Users3Outline />
                    </TabbarItem>
                    <TabbarItem onClick={mentors ? go : null} data-to="listmentors" text="Наставники">
                        <Icon28GhostOutline />
                    </TabbarItem>

                    <TabbarItem style={{ color: "#2787F5" }} onClick={go} data-to="statistics" text="Статистика">
                        <Icon28GraphOutline style={{ color: "#2787F5" }} />
                    </TabbarItem>

                    <TabbarItem onClick={go} data-to="profilemrg" text="Профиль">
                        <Icon28UserOutline />
                    </TabbarItem>
                </Tabbar>
            </Epic>

        </Panel>
    )
}

export default Statistics;