import React, { useEffect } from 'react';
import moment from 'moment';

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

export const eventsCounterForStaff = (profileInfo, amboEvent) => {
    let actualCntEvents = 0
    let doneCntEvents = 0

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
                    actualCntEvents = levelNorm[profileInfo.grade] + cntAddEvnts
                    if (amboEvent.length - arrMnth.indexOf(monthNow) - subtractEvents[profileInfo.grade] < 0) {
                        doneCntEvents = 0
                    } else if (amboEvent.length - arrMnth.indexOf(monthNow) - subtractEvents[profileInfo.grade] > levelNorm[profileInfo.grade] + cntAddEvnts) {
                        doneCntEvents = levelNorm[profileInfo.grade] + cntAddEvnts
                    } else {
                        doneCntEvents = amboEvent.length - arrMnth.indexOf(monthNow) - subtractEvents[profileInfo.grade]
                    }
                }
            }
        } else {
            for (let i = 0; i < arrMnth.indexOf(monthNow) + 2; i++) {
                if (!checkRepeat[arrMnth[i]].bool) {
                    cntAddEvnts += 1
                }
                if (i === arrMnth.indexOf(monthNow)) {
                    actualCntEvents = levelNorm[profileInfo.grade] + cntAddEvnts
                    if (amboEvent.length - arrMnth.indexOf(monthNow) - subtractEvents[profileInfo.grade] < 0) {
                        doneCntEvents = 0
                    } else if (amboEvent.length - arrMnth.indexOf(monthNow) - subtractEvents[profileInfo.grade] > levelNorm[profileInfo.grade] + cntAddEvnts) {
                        doneCntEvents = levelNorm[profileInfo.grade] + cntAddEvnts
                    } else {
                        doneCntEvents = amboEvent.length - arrMnth.indexOf(monthNow) - subtractEvents[profileInfo.grade]
                    }
                }
            }
        }
    } else {
        doneCntEvents = 0
        actualCntEvents = Number(monthNow) - 8
    }

    if (monthNow === '8') {
        doneCntEvents = 0
        actualCntEvents = 0
    }

    return (<span style={doneCntEvents === actualCntEvents ? { color: '#2787F5' } : null}>{doneCntEvents}/{actualCntEvents} </span>)
}