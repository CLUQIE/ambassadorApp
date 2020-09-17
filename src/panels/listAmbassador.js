import React from 'react';
import { postRequest } from "./functions/fetch.js"
import { PanelHeader, CellButton, Search, Panel, Banner, Epic, Tabbar, TabbarItem, Group, ScreenSpinner, Placeholder, Div, Header, Button, Separator } from '@vkontakte/vkui';
import Icon28UserOutline from '@vkontakte/icons/dist/28/user_outline';
import Icon28Users3Outline from '@vkontakte/icons/dist/28/users_3_outline';
import Icon56UserAddOutline from '@vkontakte/icons/dist/56/user_add_outline';

const userRequestURL = 'https://ambassador-todo.herokuapp.com/access/find'

const ListAmbassador = ({ fetchedUser, id, go }) => {


    const [isLoading, setIsLoading] = React.useState(true);
    const [fetch, setFetch] = React.useState(true);
    const [search, setSearch] = React.useState('');
    const [ambassadors, setAmbassadors] = React.useState();
    const [mentors, setMentors] = React.useState();
    const [userRole, setUserRole] = React.useState();
    const [sortedAlphabet, setSortedAlphabet] = React.useState(true);
    const [searchAmbassadors, setSearchAmbassadors] = React.useState();


    const onChangeSearch = (event) => {
        setSearch(event.target.value)
        if (/[а-я]/i.test(search)) {
            if (search === '') {
                setAmbassadors(searchAmbassadors)
            } else {
                setAmbassadors(searchAmbassadors.filter(function (i, n) { return i.fullName.toLowerCase().indexOf(search.toLowerCase()) > -1 }))
            }
        } else {
            let replaceLangSearch = autoReplacerLang(search)
            setAmbassadors(searchAmbassadors.filter(function (i, n) { return i.fullName.toLowerCase().indexOf(replaceLangSearch.toLowerCase()) > -1 }))
        }
    }

    const autoReplacerLang = (str) => {
        let replacer = {
            "q": "й", "w": "ц", "e": "у", "r": "к", "t": "е", "y": "н", "u": "г",
            "i": "ш", "o": "щ", "p": "з", "[": "х", "]": "ъ", "a": "ф", "s": "ы",
            "d": "в", "f": "а", "g": "п", "h": "р", "j": "о", "k": "л", "l": "д",
            ";": "ж", "'": "э", "z": "я", "x": "ч", "c": "с", "v": "м", "b": "и",
            "n": "т", "m": "ь", ",": "б", ".": "ю", "/": ".",
        };
        let replace
        for (let i = 0; i < str.length; i++) {
            if (replacer[str[i].toLowerCase()] !== undefined) {
                if (str[i] === str[i].toLowerCase()) {
                    replace = replacer[str[i].toLowerCase()];
                } else if (str[i] === str[i].toUpperCase()) {
                    replace = replacer[str[i].toLowerCase()].toUpperCase();
                }
                str = str.replace(str[i], replace);
            }
        }
        return str;
    }

    const sortAlphabetically = () => {
        let sortData = ambassadors.sort(function (a, b) {
            let aname = a.fullName.toLowerCase(),
                bname = b.fullName.toLowerCase();
            if (aname < bname) return -1;
            if (aname > bname) return 1;
            return null
        });
        setSortedAlphabet(true)
        setAmbassadors(sortData)
    }
    const sortByMentor = () => {
        let sortData = []
        for (let i = 0; i < mentors.length; i++) {
            for (let j = 0; j < ambassadors.length; j++) {
                if (ambassadors[j].mentor === mentors[i].fullName) sortData.push(ambassadors[j])
            }

        }
        setSortedAlphabet(false)
        setAmbassadors(sortData)
    }

    if (fetch && fetchedUser != null) {
        const vkID = JSON.stringify({ "vkID": fetchedUser.id })
        postRequest('POST', userRequestURL, vkID)
            .then(data => {
                setUserRole(data[0].role)
                if (data[0].role === 'mentor') {
                    postRequest('POST', userRequestURL, JSON.stringify({ "mentor": data[0].fullName }))
                        .then(ambassadors => {
                            setAmbassadors(ambassadors)
                            setSearchAmbassadors(ambassadors)
                            setIsLoading(false)
                            setFetch(false)
                        })
                }
                if (data[0].role === 'staff') {
                    postRequest('POST', userRequestURL, JSON.stringify({ "role": 'ambassador' }))
                        .then(ambassadors => {
                            setAmbassadors(ambassadors.sort(function (a, b) {
                                let aname = a.fullName.toLowerCase(),
                                    bname = b.fullName.toLowerCase();
                                if (aname < bname) return -1;
                                if (aname > bname) return 1;
                                return null
                            }))
                            setSearchAmbassadors(ambassadors)
                            postRequest('POST', userRequestURL, JSON.stringify({ "role": 'mentor' }))
                                .then(mentors => {
                                    setMentors(mentors)
                                    setIsLoading(false)
                                    setFetch(false)
                                })
                        })
                }
            })
            .catch(err => console.log(err))
    }

    if (isLoading === true) {
        return (
            <Panel id={id}>
                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <ScreenSpinner style={{ marginTop: '50%' }} />
                </div>
            </Panel>
        )
    }


    if (searchAmbassadors.length > 0) {
        return (

            <Panel id={id}>

                <PanelHeader>
                    Амбассадоры
                </PanelHeader>
                {userRole === 'staff' ?
                    <Search value={search} onChange={onChangeSearch} after={null} /> : null}
                {userRole === 'staff' && !sortedAlphabet ?
                    <CellButton style={{ color: '#fc2c38' }} align='center' onClick={sortAlphabetically} >Сортировать по алфавиту</CellButton> : null}
                {userRole === 'staff' && sortedAlphabet ?
                    <CellButton style={{ color: '#fc2c38' }} align='center' onClick={sortByMentor} >Сортировать по наставнику</CellButton> : null}
                <Group style={{ marginBottom: 50 }}>
                    {ambassadors.map((user, id) => (
                        <React.Fragment key={user._id}>
                            {userRole === 'staff' && !sortedAlphabet && id === 0 ? <Group header={<Header aside='Наставник'>{user.mentor} </Header>}><Separator /></Group> : null}
                            {id !== 0 && userRole === 'staff' && !sortedAlphabet && ambassadors[id].mentor !== ambassadors[id - 1].mentor ? <Group header={<Header aside='Наставник'>{user.mentor} </Header>}><Separator /></Group> : null}
                            <Banner
                                header={<React.Fragment>
                                    <span>{user.fullName}</span> <br />
                                    <span style={{ fontWeight: '300', color: "grey", marginBottom: '10px' }}>{user.universityShortly}</span>
                                </React.Fragment>}
                                actions={
                                    <React.Fragment>
                                        <Button style={{ backgroundColor: '#fc2c38', color: 'white' }} onClick={go} data-to="profileforinfo" data-id={user.vkID}>Профиль</Button>
                                        <Button style={{ backgroundColor: '#fc2c38', color: 'white' }} onClick={go} data-to="eventsforinfo" data-id={user.vkID}>Мероприятия</Button>
                                    </React.Fragment>
                                }
                            />
                        </React.Fragment>
                    ))}
                </Group>

                <Epic>
                    <Tabbar style={{ marginTop: '100px' }}>
                        <TabbarItem onClick={go} style={{ color: "#fc2c38" }} data-to="listambassador" text="Амбассадоры">
                            <Icon28Users3Outline style={{ color: "#fc2c38" }} />
                        </TabbarItem>

                        <TabbarItem onClick={go} data-to="profilemrg" text="Профиль">
                            <Icon28UserOutline width={32} height={32} />
                        </TabbarItem>
                    </Tabbar>
                </Epic>

            </Panel>

        )
    }
    if (ambassadors.length === 0 && userRole === "staff") {
        return (
            <Panel id={id}>

                <PanelHeader>
                    Амбассадоры
                    </PanelHeader>
                <Search value={search} onChange={onChangeSearch} after={null} />
                <Group>
                    <Div>
                        <Placeholder
                            icon={<Icon56UserAddOutline style={{ color: 'rgb(176,182,192)' }} />}
                            stretched
                        >
                            Нет таких амбассадоров<br />
                        </Placeholder>
                    </Div>
                </Group>

                <Epic>
                    <Tabbar style={{ marginTop: '100px' }}>
                        <TabbarItem onClick={go} style={{ color: "#fc2c38" }} data-to="listambassador" text="Амбассадоры">
                            <Icon28Users3Outline style={{ color: "#fc2c38" }} />
                        </TabbarItem>

                        <TabbarItem onClick={go} data-to="profilemrg" text="Профиль">
                            <Icon28UserOutline width={32} height={32} />
                        </TabbarItem>
                    </Tabbar>
                </Epic>

            </Panel>
        )
    }
    if (searchAmbassadors.length === 0) {
        return (
            <Panel id={id}>
                <PanelHeader>
                    Амбассадоры
                </PanelHeader>
                <Group>
                    <Div>
                        <Placeholder
                            icon={<Icon56UserAddOutline style={{ color: 'rgb(176,182,192)' }} />}
                            stretched
                        >
                            Нет амбассадоров<br />
                        </Placeholder>
                    </Div>
                </Group>

                <Epic>
                    <Tabbar style={{ marginTop: '100px' }}>
                        <TabbarItem onClick={go} style={{ color: "#fc2c38" }} data-to="listambassador" text="Амбассадоры">
                            <Icon28Users3Outline style={{ color: "#fc2c38" }} />
                        </TabbarItem>

                        <TabbarItem onClick={go} data-to="profilemrg" text="Профиль">
                            <Icon28UserOutline width={32} height={32} />
                        </TabbarItem>
                    </Tabbar>
                </Epic>

            </Panel>
        )
    }

}


export default ListAmbassador;
