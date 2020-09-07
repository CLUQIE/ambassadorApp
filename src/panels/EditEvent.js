import React from 'react';
import { postRequest } from "./functions/fetch.js"
import { FormLayout, ScreenSpinner, Input, Group, Button, PanelHeader, Panel, Textarea, PanelHeaderBack } from '@vkontakte/vkui';


const requestUpdateURL = 'https://ambassador-todo.herokuapp.com/event/update'
const requestFindURL = 'https://ambassador-todo.herokuapp.com/event/ambassador'

const EditEvent = ({ info, id, go }) => {

    const [nameEvent, setNameEvent] = React.useState();
    const [links, setLinks] = React.useState();
    const [description, SetDescription] = React.useState();
    const [notes, SetNotes] = React.useState();
    const [callback, setCallback] = React.useState();
    const [fetch, setFetch] = React.useState(true);
    const [eventInfo, setEventInfo] = React.useState();

    if (fetch) {
        const eventID = JSON.stringify({ "_id": info })
        postRequest('POST', requestFindURL, eventID)
            .then(data => {
                setEventInfo(data[0])
                setFetch(false)
            })
            .catch(err => console.log(err))
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
        SetDescription(event.target.value)
    }

    const onChangeNotes = (event) => {
        SetNotes(event.target.value)
    }

    const onClickForm = () => {
        let body = JSON.stringify({
            nameEvent: nameEvent,
            _id: eventInfo._id,
            description: description,
            participantsCallback: callback,
            publicationLinks: links,
            notes: notes,
        })
        postRequest('POST', requestUpdateURL, body)
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
                left={<PanelHeaderBack style={{ color: "#fc2c38" }} onClick={go} data-to="events" />}>
                Редактирование мероприятия</PanelHeader>
            <Group>
                <FormLayout>
                    <Input onChange={onChangeNameEvent} type="text" name="name" top="Название мероприятия" placeholder={eventInfo ? eventInfo.nameEvent : null} />
                    <Textarea onChange={onChangeDescription} name="description" top="Краткое описание" placeholder={eventInfo ? eventInfo.description : null} />
                    <Input onChange={onChangeCallback} type="text" name="participants" top="Отзывы участников" placeholder={eventInfo ? eventInfo.participantsCallback : null} />
                    <Textarea onChange={onChangeLinks} name="links" top="Ссылки на посты" placeholder={eventInfo ? eventInfo.publicationLinks : null} />
                    <Textarea onChange={onChangeNotes} name="notes" top="Заметки" placeholder={eventInfo ? eventInfo.notes : null} />

                    <Button style={{ backgroundColor: '#fc2c38' }} type='submit' size='xl' onClick={onClickForm} onMouseUp={go} data-to="events">Обновить</Button>

                </FormLayout>
            </Group>

        </Panel>
    )
}


export default EditEvent;