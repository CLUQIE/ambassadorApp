import React, { useEffect } from 'react';
import { Div, Group, Header, Cell, Progress } from '@vkontakte/vkui';
import Icon16Dropdown from '@vkontakte/icons/dist/16/dropdown';
import { Icon20CheckBoxOn, Icon20CheckBoxOff } from '@vkontakte/icons';
import moment from 'moment';

const grades = ['Freshman', 'Trainee', 'Junior', 'Middle', 'Senior']

const eduEventsList = [
    {
        predLevel: 'Freshman',
        eduEvents: [{
            done: false,
            text: 'Прошёл самооценку по навыкам',
            key: '11'
        },
        {
            done: false,
            text: 'Прошёл образовательный интенсив «Амбассадор в большом городе», оставил обратную связь по всем активностям',
            key: '12'

        }]
    },
    {
        predLevel: 'Trainee',
        eduEvents: [{
            done: false,
            text: 'Прошёл образовательный интенсив «Коммуникации», оставил обратную связь по всем активностям',
            key: '21'
        }]
    },
    {
        predLevel: 'Junior',
        eduEvents: [{
            done: false,
            text: 'реализует проект с декабрьского слёта',
            key: '31'
        }]
    },
    {
        predLevel: 'Middle',
        eduEvents: [{
            done: false,
            text: 'Прошёл оценку 360',
            key: '41'
        },
        {
            done: false,
            text: 'Был рассказчиком на встрече «в стиле ретро»',
            key: '42'
        }]
    },
]

const levelNorm = {
    Freshman: 1,
    Trainee: 2,
    Junior: 3,
    Middle: 4
}
const subtractEvents = {
    Freshman: 0,
    Trainee: 0,
    Junior: 1,
    Middle: 3,
    Senior: 6
}

export const ProgressTab = ({ profileInfo, amboEvent, role = 'ambassador', setActiveModal = null, activeTask = null }) => {

    const [progressInfo, setProgressInfo] = React.useState(false);
    const [actualTaskList, setActualTaskList] = React.useState([]);
    const [actualCntEvents, setActualCntEvents] = React.useState('...');
    const [doneCntEvents, setDoneCntEvents] = React.useState('...');
    const [eduLength, setEduLength] = React.useState({ all: 0, done: 0 });

    const checkQualEvents = () => {
        let cntAddEvnts = 0
        let stopFilter = false
        let arrMnth = ['9', '10', '11', '12', '1', '2', '3', '4', '5', '6', '7', '8']
        let checkRepeat = { 1: { bool: false, cnt: 0 }, 2: { bool: false, cnt: 0 }, 3: { bool: false, cnt: 0 }, 4: { bool: false, cnt: 0 }, 5: { bool: false, cnt: 0 }, 6: { bool: false, cnt: 0 }, 7: { bool: false, cnt: 0 }, 8: { bool: false, cnt: 0 }, 9: { bool: false, cnt: 0 }, 10: { bool: false, cnt: 0 }, 11: { bool: false, cnt: 0 }, 12: { bool: false, cnt: 0 } }
        let monthNow = moment().format("M")
        if (amboEvent) {
            arrMnth.filter((e) => {
                if (Number(e) === Number(monthNow)) {
                    amboEvent.filter((elem) => {
                        if (moment(elem.date, 'DD.MM.YYYY').format("M") == e) {
                            checkRepeat[moment(elem.date, 'DD.MM.YYYY').format("M")].cnt += 1
                            if (!checkRepeat[moment(elem.date, 'DD.MM.YYYY').format("M")].bool) {
                                checkRepeat[moment(elem.date, 'DD.MM.YYYY').format("M")].bool = true
                            }
                        }
                        if (e === '1') {
                            if (!checkRepeat['12'].bool && checkRepeat[moment(elem.date, 'DD.MM.YYYY').format("M")].cnt > 1) {
                                checkRepeat[String(Number(moment(elem.date, 'DD.MM.YYYY').format("M")) - 1)].bool = true
                            }
                        } else {
                            if (!checkRepeat[String(Number(moment(elem.date, 'DD.MM.YYYY').format("M")) - 1)].bool && checkRepeat[moment(elem.date, 'DD.MM.YYYY').format("M")].cnt > 1 && Number(moment(elem.date, 'DD.MM.YYYY').format("M")) != 9) {
                                checkRepeat[String(Number(moment(elem.date, 'DD.MM.YYYY').format("M")) - 1)].bool = true
                            }
                        }
                    })
                    stopFilter = true
                }
                if (!stopFilter) {
                    amboEvent.filter((elem) => {
                        if (moment(elem.date, 'DD.MM.YYYY').format("M") == e) {
                            checkRepeat[moment(elem.date, 'DD.MM.YYYY').format("M")].cnt += 1
                            if (!checkRepeat[moment(elem.date, 'DD.MM.YYYY').format("M")].bool) {
                                checkRepeat[moment(elem.date, 'DD.MM.YYYY').format("M")].bool = true
                            }
                            if (e === '1') {
                                if (!checkRepeat['12'].bool && checkRepeat[moment(elem.date, 'DD.MM.YYYY').format("M")].cnt > 1) {
                                    checkRepeat[String(Number(moment(elem.date, 'DD.MM.YYYY').format("M")) - 1)].bool = true
                                }
                            } else {
                                if (!checkRepeat[String(Number(moment(elem.date, 'DD.MM.YYYY').format("M")) - 1)].bool && checkRepeat[moment(elem.date, 'DD.MM.YYYY').format("M")].cnt > 1 && Number(moment(elem.date, 'DD.MM.YYYY').format("M")) != 9) {
                                    checkRepeat[String(Number(moment(elem.date, 'DD.MM.YYYY').format("M")) - 1)].bool = true
                                }
                            }
                        }
                    })
                }
            })
            if (arrMnth.indexOf(monthNow) == 11) {
                for (let i = 0; i < arrMnth.indexOf(monthNow) + 1; i++) {
                    if (!checkRepeat[arrMnth[i]].bool) {
                        cntAddEvnts += 1
                    }

                    if (i === arrMnth.indexOf(monthNow)) {
                        setActualCntEvents(levelNorm[profileInfo.grade] + cntAddEvnts)
                        if (amboEvent.length - arrMnth.indexOf(monthNow) - subtractEvents[profileInfo.grade] < 0) {
                            setDoneCntEvents(0)
                        } else if (amboEvent.length - arrMnth.indexOf(monthNow) - subtractEvents[profileInfo.grade] > levelNorm[profileInfo.grade] + cntAddEvnts) {
                            setDoneCntEvents(levelNorm[profileInfo.grade] + cntAddEvnts)
                        } else {
                            setDoneCntEvents(amboEvent.length - arrMnth.indexOf(monthNow) - subtractEvents[profileInfo.grade])
                        }
                    }
                }
            } else {
                for (let i = 0; i < arrMnth.indexOf(monthNow) + 2; i++) {
                    if (!checkRepeat[arrMnth[i]].bool) {
                        cntAddEvnts += 1
                    }
                    if (i === arrMnth.indexOf(monthNow)) {
                        setActualCntEvents(levelNorm[profileInfo.grade] + cntAddEvnts)
                        if (amboEvent.length - arrMnth.indexOf(monthNow) - subtractEvents[profileInfo.grade] < 0) {
                            setDoneCntEvents(0)
                        } else if (amboEvent.length - arrMnth.indexOf(monthNow) - subtractEvents[profileInfo.grade] > levelNorm[profileInfo.grade] + cntAddEvnts) {
                            setDoneCntEvents(levelNorm[profileInfo.grade] + cntAddEvnts)
                        } else {
                            setDoneCntEvents(amboEvent.length - arrMnth.indexOf(monthNow) - subtractEvents[profileInfo.grade])
                        }
                    }
                }
            }
        } else {
            setDoneCntEvents(0)
            setActualCntEvents(Number(monthNow) - 8)
        }
        if (monthNow === '8') {
            setDoneCntEvents(0)
            setActualCntEvents(0)
        }
    }

    const checkEduLevel = () => {
        let actualTask = eduEventsList.filter((e) => e.predLevel === profileInfo.grade)
        actualTask[0].eduEvents = actualTask[0].eduEvents.map((e) => {
            if (profileInfo.eduKey.find((key) => key === e.key)) {
                e.done = true
                setEduLength({ all: eduLength.all, done: eduLength.done + 1 })
                return e
            } else {
                return e
            }
        })
        setEduLength({ all: actualTask[0].eduEvents.length, done: eduLength.done })
        setActualTaskList(actualTask[0].eduEvents)
    }

    useEffect(() => {
        checkEduLevel()
        checkQualEvents()
    }, [])

    return (
        <Group header={<Header mode="secondary">Прогресс</Header>} >
            <Cell multiline indicator={<div className="IndicatorOverflow">{grades[grades.findIndex((e) => e === profileInfo.grade) + 1]}</div>}>
                Следующий уровень
            </Cell>
            <Div>
                <Progress value={Math.floor(((doneCntEvents + eduLength.done) / (actualCntEvents + eduLength.all)) * 100)} />
            </Div>
            {progressInfo ? <Div>
                <Cell multiline indicator={<div className="IndicatorOverflow">{doneCntEvents}/{actualCntEvents}</div>}>
                    Проведено мероприятий
                </Cell>
                {actualTaskList.map((e, i) => (
                    role !== 'ambassador' ? <Cell key={i} onClick={() => { if (role !== 'ambassador') { activeTask({ key: e.key, done: e.done }); setActiveModal('confirmedu') } }} className='progress-cell' multiline indicator={e && e.done ? <Icon20CheckBoxOn fill="#2787F5" /> : <Icon20CheckBoxOff fill="#2787F5" />}>
                        {e ? e.text : null}
                    </Cell> : <Cell key={i} className='progress-cell' multiline indicator={e && e.done ? <Icon20CheckBoxOn fill="#2787F5" /> : <Icon20CheckBoxOff fill="#2787F5" />}>
                        {e ? e.text : null}
                    </Cell>
                ))}




            </Div> : null}
            <Div align='center' style={{ padding: 0 }}>
                <Icon16Dropdown onClick={() => { setProgressInfo(!progressInfo) }} width={30} height={25} style={{ padding: 0, color: "#2787F5", transform: `rotate(${progressInfo ? '180deg' : '0'})` }} />
            </Div>
        </Group>
    )
}