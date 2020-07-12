import React from 'react';
import {postRequest} from "./functions/fetch.js"
import {excelReport} from "./functions/excelReport"
import { Avatar, Div, Banner, Group, Button, PanelHeader, Panel, PanelHeaderButton, Epic, Tabbar, TabbarItem, ScreenSpinner, PanelHeaderBack} from '@vkontakte/vkui';
import Icon28ServicesOutline from '@vkontakte/icons/dist/28/services_outline';
import Icon28AddOutline from '@vkontakte/icons/dist/28/add_outline';
import Icon28UserOutline from '@vkontakte/icons/dist/28/user_outline';
import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline';
import Icon28BrainOutline from '@vkontakte/icons/dist/28/brain_outline';

const requestURL = "https://ambassador-todo.herokuapp.com/event/ambassador"



const Events = ({fetchedUser, id, go }) => {

    const [isLoading, setIsLoading] = React.useState(true);
    const [request, setrequest] = React.useState(true);
    const [eventsData, setEventsData] = React.useState();

    const onClickReport = () => {
		excelReport(eventsData)
	}

  
        if(request){
            postRequest('POST', requestURL, JSON.stringify({ambassador: 'Мирон Пузанов' }))
            .then(data => {
              setEventsData(data)
              setIsLoading(false)
            setrequest(false)
            })
            .catch(err => console.log(err))
        }

      if (isLoading==true){
          return (
            <Panel id={id}>
                <ScreenSpinner />
                <Div style={{textAlign: 'center'}}></Div>
            </Panel>
            )
      }
      
        return (
            <Panel id={id}>
    
                <PanelHeader 
                    left={<Icon28AddOutline onClick={onClickReport}/>}
                    right={<PanelHeaderButton><Icon28AddOutline style={{color: "#fc2c38"}} onClick={go} data-to="home" /></PanelHeaderButton>}>
                    Мероприятия
                </PanelHeader>
                <Group>
                    <Div>
                    {eventsData.map((event) => (
                    <Banner key={event._id}
                        before={<Avatar size={120} mode="image" style={{objectFit: 'cover'}} 
                        src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />}
                        header={event.nameEvent}
                        subheader={event.date}
                        actions={<Button style={{background: "#fc2c38"}}>Подробнее</Button>}
                        />
                     ))}
                    </Div>
                </Group>
    
                <Epic>
                    <Tabbar>
                    <TabbarItem style={{color:"#fc2c38"}} onClick={go} data-to="events" text="Мероприятия">
                        <Icon28NewsfeedOutline style={{color:"#fc2c38"}}/>
                    </TabbarItem>
    
                    <TabbarItem onClick={go} data-to="achivements" text="Достижения">
                        <Icon28ServicesOutline/>
                    </TabbarItem>
    
                    <TabbarItem onClick={go} data-to="info" text="Информация">
                        <Icon28BrainOutline/>
                    </TabbarItem>
    
                    <TabbarItem onClick={go} data-to="profile" text="Профиль">
                        <Icon28UserOutline width={32} height={32}/>
                    </TabbarItem>
                    </Tabbar>  
                </Epic>
    
            </Panel>
        )
      
 
}


export default Events;
