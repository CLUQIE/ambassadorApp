import Brehnyarazrushator from '../../img/achivements/Брехняразрушатор.png'
import Dostigator from '../../img/achivements/Достигатор.png'
import Zashishator from '../../img/achivements/Защищатор.png'
import Idaevoploshator from '../../img/achivements/Идеявоплощатор.png'
import Kontentogenerator5000 from '../../img/achivements/Контентогенератор 5000.png'
import Kontentomeikinator from '../../img/achivements/Контентомейкинатор.png'
import Kontrolenator from '../../img/achivements/Контроленатор.png'
import Masterator from '../../img/achivements/Мастератор 11000.png'
import Netvorkinator from '../../img/achivements/Нетворкинатор.png'
import Novostegenerator from '../../img/achivements/Новостегенератор.png'
import Obrozovator1000 from '../../img/achivements/Образоватор 1000.png'
import Obrozovator2000 from '../../img/achivements/Образоватор 2000.png'
import Obrozovator3000 from '../../img/achivements/Образоватор 3000.png'
import Proektoprocvetator1000 from '../../img/achivements/Проектопроцветатор 1000.png'
import Publichnogovorator5000 from '../../img/achivements/Публичноговоратор 5000.png'
import Scillopogloshator47000 from '../../img/achivements/Скилопоглощатор 47000.png'
import Sobirator from '../../img/achivements/Собиратор.png'
import Textonapisator from '../../img/achivements/Текстонаписатор.png'
import Feedbackator from '../../img/achivements/Фидбекатор.png'
import Formatoprilagator from '../../img/achivements/Форматоприлагатор.png'
import Unitoprivlekator from '../../img/achivements/Юнитопривлекатор.png'

const achievementsFullList = 'Образоватор 1000,Образоватор 2000,Образоватор 3000,Текстонаписатор,Контроленатор,Брехняразрушатор,Контентогенератор 5000,Публичноговоратор 5000,Достигатор,Форматоприлагатор,Защищатор 3000,Нетворкинатор,Контентомейкинатор,Юнитопривлекатор,Проектопроцветатор 1000,Идеявоплощатор,Собиратор,Новостегенератор,Фидбекатор,Мастератор,Скиллопоглощатор 47000'

export function achivementsListReturn(list) {
    const referenceList = [{
        png: Brehnyarazrushator,
        name: 'Брехняразрушатор'
    },
    {
        png: Dostigator,
        name: 'Достигатор'
    },
    {
        png: Zashishator,
        name: 'Защищатор 3000'
    },
    {
        png: Idaevoploshator,
        name: 'Идеявоплощатор'
    },
    {
        png: Kontentogenerator5000,
        name: 'Контентогенератор 5000'
    },
    {
        png: Kontentomeikinator,
        name: 'Контентомейкинатор'
    },
    {
        png: Kontrolenator,
        name: 'Контроленатор'
    }, {
        png: Masterator,
        name: 'Мастератор'
    }, {
        png: Netvorkinator,
        name: 'Нетворкинатор'
    }, {
        png: Novostegenerator,
        name: 'Новостегенератор'
    }, {
        png: Obrozovator1000,
        name: 'Образоватор 1000'
    }, {
        png: Obrozovator2000,
        name: 'Образоватор 2000'
    }, {
        png: Obrozovator3000,
        name: 'Образоватор 3000'
    }, {
        png: Proektoprocvetator1000,
        name: 'Проектопроцветатор 1000'
    }, {
        png: Publichnogovorator5000,
        name: 'Публичноговоратор 5000'
    }, {
        png: Scillopogloshator47000,
        name: 'Скиллопоглощатор 47000'
    }, {
        png: Sobirator,
        name: 'Собиратор'
    }, {
        png: Textonapisator,
        name: 'Текстонаписатор'
    }, {
        png: Feedbackator,
        name: 'Фидбекатор'
    }, {
        png: Formatoprilagator,
        name: 'Форматоприлагатор'
    }, {
        png: Unitoprivlekator,
        name: 'Юнитопривлекатор'
    }]
    let refList = []
    let achiveArr = list.split(',')
    for (let i = 0; i<achiveArr.length; i++){
        refList.push(referenceList.filter(element => element.name === achiveArr[i]))
    }
    return (refList)
}

export const fullListPng = achivementsListReturn(achievementsFullList)