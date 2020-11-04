import React from 'react';
import { PanelHeader, CellButton, Search, Panel, Banner, Epic, Tabbar, TabbarItem, Group, Placeholder, Div, Header, Button, Separator } from '@vkontakte/vkui';
import Icon28UserOutline from '@vkontakte/icons/dist/28/user_outline';
import Icon28Users3Outline from '@vkontakte/icons/dist/28/users_3_outline';
import Icon56UserAddOutline from '@vkontakte/icons/dist/56/user_add_outline';
import Icon28GhostOutline from '@vkontakte/icons/dist/28/ghost_outline';

const ListAmbassador = ({ id, go, profileInfo, allAmbs, setAllAmbs, searchAmbassadors, mentors }) => {

    const [search, setSearch] = React.useState('');
    const [sortedAlphabet, setSortedAlphabet] = React.useState(true);


    const onChangeSearch = (event) => {
        setSearch(event.target.value)
        if (/[а-я]/i.test(search)) {
            if (search === '') {
                setAllAmbs(searchAmbassadors)
            } else {
                setAllAmbs(searchAmbassadors.filter(function (i, n) { return i.fullName.toLowerCase().indexOf(search.toLowerCase()) > -1 }))
            }
        } else {
            let replaceLangSearch = autoReplacerLang(search)
            setAllAmbs(searchAmbassadors.filter(function (i, n) { return i.fullName.toLowerCase().indexOf(replaceLangSearch.toLowerCase()) > -1 }))
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
        let sortData = allAmbs.sort(function (a, b) {
            let aname = a.fullName.toLowerCase(),
                bname = b.fullName.toLowerCase();
            if (aname < bname) return -1;
            if (aname > bname) return 1;
            return null
        });
        setSortedAlphabet(true)
        setAllAmbs(sortData)
    }
    const sortByMentor = () => {
        let sortData = []
        for (let i = 0; i < mentors.length; i++) {
            for (let j = 0; j < allAmbs.length; j++) {
                if (allAmbs[j].mentor === mentors[i].fullName) sortData.push(allAmbs[j])
            }

        }
        setSortedAlphabet(false)
        setAllAmbs(sortData)
    }

    if (searchAmbassadors.length > 0) {
        return (

            <Panel id={id}>

                <PanelHeader>
                    Амбассадоры
                </PanelHeader>
                {profileInfo.role === 'staff' ?
                    <Search autoFocus value={search} onChange={onChangeSearch} after={null} /> : null}
                {profileInfo.role === 'staff' && !sortedAlphabet ?
                    <CellButton style={{ color: '#fc2c38' }} align='center' onClick={sortAlphabetically} >Сортировать по алфавиту</CellButton> : null}
                {profileInfo.role === 'staff' && sortedAlphabet ?
                    <CellButton style={{ color: '#fc2c38' }} align='center' onClick={sortByMentor} >Сортировать по наставнику</CellButton> : null}
                <Group style={{ marginBottom: 50 }}>
                    {allAmbs.map((user, id) => (
                        <React.Fragment key={user._id}>
                            {profileInfo.role === 'staff' && !sortedAlphabet && id === 0 ? <Group header={<Header aside='Наставник'>{user.mentor} </Header>}><Separator /></Group> : null}
                            {id !== 0 && profileInfo.role === 'staff' && !sortedAlphabet && allAmbs[id].mentor !== allAmbs[id - 1].mentor ? <Group header={<Header aside='Наставник'>{user.mentor} </Header>}><Separator /></Group> : null}
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
                        {profileInfo.role === 'staff' ? <TabbarItem onClick={go} data-to="listmentors" text="Наставники">
                            <Icon28GhostOutline width={32} height={32} />
                        </TabbarItem> : null}

                        <TabbarItem onClick={go} data-to="profilemrg" text="Профиль">
                            <Icon28UserOutline width={32} height={32} />
                        </TabbarItem>
                    </Tabbar>
                </Epic>

            </Panel>

        )
    }
    if (allAmbs.length === 0 && profileInfo.role === "staff") {
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

                        {profileInfo.role === 'staff' ? <TabbarItem onClick={go} data-to="listmentors" text="Наставники">
                            <Icon28GhostOutline width={32} height={32} />
                        </TabbarItem> : null}

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

                        {profileInfo.role === 'staff' ? <TabbarItem onClick={go} data-to="listmentors" text="Наставники">
                            <Icon28GhostOutline  />
                        </TabbarItem> : null}

                        <TabbarItem onClick={go} data-to="profilemrg" text="Профиль">
                            <Icon28UserOutline  />
                        </TabbarItem>
                    </Tabbar>
                </Epic>

            </Panel>
        )
    }

}

export default ListAmbassador;
