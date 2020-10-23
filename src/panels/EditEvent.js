import React from 'react';
import { postRequest } from "./functions/fetch.js"
import { FormLayout, ScreenSpinner, Select, Input, Group, Button, PanelHeader, Panel, Textarea, PanelHeaderBack } from '@vkontakte/vkui';


const requestUpdateURL = 'https://ambassador-todo.herokuapp.com/event/update'
const requestFindURL = 'https://ambassador-todo.herokuapp.com/event/ambassador'

const EditEvent = ({ info, id, go, setFetchApp, profileInfo }) => {

    const [nameEvent, setNameEvent] = React.useState();
    const [links, setLinks] = React.useState();
    const [description, setDescription] = React.useState();
    const [notes, setNotes] = React.useState();
    const [callback, setCallback] = React.useState();
    const [fetch, setFetch] = React.useState(true);
    const [eventInfo, setEventInfo] = React.useState();
    const [place, setPlace] = React.useState();
    const [participants, setParticipants] = React.useState();
    const [eventType, setEventType] = React.useState();
    const [participationForm, setParticipationForm] = React.useState();
    const [eventForm, setEventForm] = React.useState();

    if (fetch) {
        const eventID = JSON.stringify({ "_id": info })
        postRequest('POST', requestFindURL, eventID)
            .then(data => {
                setEventInfo(data[0])
                setFetch(false)
            })
    }

    const onChangeNameEvent = (event) => {
        setNameEvent(event.target.value)
    }

    const onChangeCallback = (event) => {
        setCallback(event.target.value)
    }

    const onChangeLinks = (event) => {
        setLinks(event.target.value)
    }

    const onChangeDescription = (event) => {
        setDescription(event.target.value)
    }

    const onChangeNotes = (event) => {
        setNotes(event.target.value)
    }

    const onChangePlace = (event) => {
        setPlace(event.target.value)
    }

    const onChangeEventType = (event) => {
        setEventType(event.target.value)
    }

    const onChangeParticipants = (event) => {
        setParticipants(event.target.value)
    }

    const onChangeParticipationForm = (event) => {
        setParticipationForm(event.target.value)
    }

    const onChangeEventForm = (event) => {
        setEventForm(event.target.value)
    }

    const onClickForm = () => {
        let body = JSON.stringify({
            nameEvent: nameEvent,
            _id: eventInfo._id,
            description: description,
            participantsCallback: callback,
            publicationLinks: links,
            notes: notes,

            eventPlace: place,
            eventType: eventType,
            participants: participants,
            participationForm: participationForm,
            eventForm: eventForm,
        })
        postRequest('POST', requestUpdateURL, body)
            .then(setFetchApp(true))
            .catch(err => console.log(err))

    }

    if (fetch) {
        return (
            <Panel id={id}>
                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <ScreenSpinner style={{ marginTop: '50%' }} />
                </div>
            </Panel>
        )
    }

    return (

        <Panel id={id}>

            <PanelHeader
                left={profileInfo.role === 'ambassador' ? <PanelHeaderBack style={{ color: "#fc2c38" }} onClick={go} data-to="events" /> : <PanelHeaderBack style={{ color: "#fc2c38" }} onClick={go} data-to="listambassador" />}>
                Редактирование мероприятия</PanelHeader>
            {profileInfo.role === 'ambassador' ? <Group>
                <FormLayout>
                    <Input onChange={onChangeNameEvent} type="text" name="name" top="Название мероприятия" placeholder={eventInfo ? eventInfo.nameEvent : null} />
                    <Textarea onChange={onChangeDescription} name="description" top="Краткое описание" placeholder={eventInfo ? eventInfo.description : null} />
                    <Input onChange={onChangeCallback} type="text" name="participants" top="Отзывы участников" placeholder={eventInfo ? eventInfo.participantsCallback : null} />
                    <Textarea onChange={onChangeLinks} name="links" top="Ссылки на посты" placeholder={eventInfo ? eventInfo.publicationLinks : null} />
                    <Textarea onChange={onChangeNotes} name="notes" top="Заметки" placeholder={eventInfo ? eventInfo.notes : null} />

                    <Button style={{ backgroundColor: '#fc2c38' }} type='submit' size='xl' onClick={onClickForm} onMouseUp={go} data-to="events">Обновить</Button>

                </FormLayout>
            </Group> :
                <Group>
                    <FormLayout>
                        <Input onChange={onChangeNameEvent} type="text" name="name" top="Название мероприятия" placeholder={eventInfo ? eventInfo.nameEvent : null} />
                        <Textarea onChange={onChangeDescription} name="description" top="Краткое описание" placeholder={eventInfo ? eventInfo.description : null} />
                        <Input onChange={onChangeCallback} type="text" name="participants" top="Отзывы участников" placeholder={eventInfo ? eventInfo.participantsCallback : null} />
                        <Textarea onChange={onChangeLinks} name="links" top="Ссылки на посты" placeholder={eventInfo ? eventInfo.publicationLinks : null} />
                        <Textarea onChange={onChangeNotes} name="notes" top="Заметки" placeholder={eventInfo ? eventInfo.notes : null} />

                        <Select onChange={onChangeParticipationForm} top="Формат участия" placeholder={eventInfo ? eventInfo.participationForm : null} >
                            <option value="Внешнее">Внешнее мероприятие</option>
                            <option value="Внутреннее">Внутреннее мероприятие</option>
                            <option value="Помощь и поддержка">Помощь и поддержка</option>
                        </Select>

                        <Select onChange={onChangeEventForm} top="Формат мероприятия" placeholder={eventInfo ? eventInfo.eventForm : null} >
                            <option value="Онлайн">Онлайн</option>
                            <option value="Офлайн">Офлайн</option>
                        </Select>

                        {eventInfo.participationForm === 'Внешнее' ? <Group>
                            {eventInfo.eventForm === 'Онлайн' ? <Select onChange={onChangeEventType} top="Тип мероприятия" placeholder={eventInfo ? eventInfo.eventType : null} >
                                <option value="Воркшоп/мастер-класс">Воркшоп/мастер-класс</option>
                                <option value="Выступление">Выступление</option>
                                <option value="Пост в соц.сетях">Пост в соц.сетях</option>
                                <option value="Конкурс">Конкурс</option>
                            </Select> : null}
                            {eventInfo.eventForm === 'Офлайн' ? <Select onChange={onChangeEventType} top="Тип мероприятия" placeholder={eventInfo ? eventInfo.eventType : null}>
                                <option value="Интерактивная площадка">Интерактивная площадка</option>
                                <option value="Воркшоп/мастер-класс">Воркшоп/мастер-класс</option>
                                <option value="Квиз/конкурс/викторина">Квиз/конкурс/викторина</option>
                                <option value="Стенд">Стенд</option>
                                <option value="Выступление">Выступление</option>
                                <option value="Активность для школьников">Активность для школьников</option>
                                <option value="Экскурсия в офис">Экскурсия в офис</option>
                            </Select> : null}
                        </Group> : null}

                        {eventInfo.participationForm === 'Внутреннее' ? <Group>
                            {eventInfo.eventForm === 'Онлайн' ? <Select onChange={onChangeEventType} top="Тип мероприятия" placeholder={eventInfo ? eventInfo.eventType : null}>
                                <option value="Пост для группы MRG для образования">Пост для группы MRG для образования</option>
                                <option value="Воркшоп/мастер-класс">Воркшоп/мастер-класс</option>
                                <option value="Квиз/конкурс/викторина">Квиз/конкурс/викторина</option>
                                <option value="Выступление сотрудника/приглашение сотрудника в жюри">Выступление сотрудника/приглашение сотрудника в жюри</option>
                                <option value="Вебинар/трансляция">Вебинар/трансляция</option>
                                <option value="Пост для университетских пабликов/студорганизаций">Пост для университетских пабликов/студорганизаций</option>
                                <option value="Размещение на сайте университета">Размещение на сайте университета</option>
                                <option value="Конкурс">Конкурс</option>
                                <option value="Интервью">Интервью</option>
                                <option value="Пост на своей странице">Пост на своей странице</option>
                            </Select> : null}
                            {eventInfo.eventForm === 'Офлайн' ? <Select onChange={onChangeEventType} top="Тип мероприятия" placeholder={eventInfo ? eventInfo.eventType : null}>
                                <option value="Интерактивная площадка">Интерактивная площадка</option>
                                <option value="Воркшоп/мастер-класс">Воркшоп/мастер-класс</option>
                                <option value="Квиз/конкурс/викторина">Квиз/конкурс/викторина</option>
                                <option value="Выступление сотрудника/приглашение сотрудника в жюри">Выступление сотрудника/приглашение сотрудника в жюри</option>
                                <option value="Вебинар/трансляция">Вебинар/трансляция</option>
                                <option value="Квест">Квест</option>
                                <option value="Игры (ЧГК, ИТ-мафия, Alias)">Игры (ЧГК, ИТ-мафия, Alias)</option>
                                <option value="Выступление">Выступление</option>
                                <option value="Стенд">Стенд</option>
                                <option value="Дебаты">Дебаты</option>
                            </Select> : null}
                        </Group> : null}

                        {eventInfo.participationForm === 'Помощь и поддержка' ? <Group>
                            {eventInfo.eventForm === 'Онлайн' ? <Select onChange={onChangeEventType} top="Тип мероприятия" placeholder={eventInfo ? eventInfo.eventType : null}>
                                <option value="Выступление на мероприятиях (День ИТ-знаний, Проектория, Цифровой прорыв, Урок цифры)">Выступление на мероприятиях (День ИТ-знаний, Проектория, Цифровой прорыв, Урок цифры)</option>
                                <option value="Размещение информации на странице вуза/студенческого сообщества в соцсетях">Размещение информации на странице вуза/студенческого сообщества в соцсетях</option>
                                <option value="Распространение анкеты/формы">Распространение анкеты/формы</option>
                                <option value="Размещение информации на своей странице">Размещение информации на своей странице</option>
                                <option value="Репост">Репост</option>
                            </Select> : null}
                            {eventInfo.eventForm === 'Офлайн' ? <Select onChange={onChangeEventType} top="Тип мероприятия" placeholder={eventInfo ? eventInfo.eventType : null}>
                                <option value="Выступление на мероприятиях (День ИТ-знаний, Проектория, Цифровой прорыв, Урок цифры)">Выступление на мероприятиях (День ИТ-знаний, Проектория, Цифровой прорыв, Урок цифры)</option>
                                <option value="Волонтерство">Волонтерство</option>
                                <option value="Организация мероприятия">Организация мероприятия</option>
                                <option value="Информирование">Информирование</option>
                            </Select> : null}
                        </Group> : null}

                        <Input onChange={onChangePlace} type="text" name="name" top="Место проведения" placeholder={eventInfo ? eventInfo.eventPlace : null} />
                        <Select onChange={onChangeParticipants} top="Количество участников" placeholder={eventInfo ? eventInfo.participants : null}>
                            <option value="1-29 человек">1-29 человек</option>
                            <option value="30-99 человек">30-99 человек</option>
                            <option value="100-299 человек">100-299 человек</option>
                            <option value="300-999 человек">300-999 человек</option>
                            <option value="1000 и более">1000 и более</option>
                        </Select>

                        <Button style={{ backgroundColor: '#fc2c38' }} type='submit' size='xl' onClick={onClickForm} onMouseUp={go} data-to="events">Обновить</Button>

                    </FormLayout>
                </Group>}

        </Panel>
    )
}


export default EditEvent;