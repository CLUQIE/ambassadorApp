import React from 'react';
import {  Card, CardGrid, Group, PanelHeader, Panel,  PanelHeaderBack} from '@vkontakte/vkui';


const avatars = {
    bestclub: 'http://pngimg.com/uploads/bitcoin/bitcoin_PNG31.png',
};


const Badge = ({ id, go }) => {

	return (

		<Panel id={id}>

			<PanelHeader
            left={<PanelHeaderBack style={{color: "#2787F5"}} onClick={go} data-to="profile"/>}>Достижения</PanelHeader>
            <Group separator="hide">
                
			    <CardGrid>
                    <Card size="s">
                        <div style={{ 
                         height: 96,  
                         borderRadius: 10,
                         }} >
                        <img alt="badge" style={{ width: '100%', height: 96, borderRadius: 10, objectFit: 'cover', objectPosition: 'center', zIndex: 0}} src={avatars['bestclub']} />
                        </div>
                    </Card>
                    <Card size="s">
                        <div style={{ 
                         height: 96,  
                         borderRadius: 10,
                         }} >
                        <img alt="badge" style={{ width: '100%', height: 96, borderRadius: 10, objectFit: 'cover', objectPosition: 'center', zIndex: 0}} src={avatars['bestclub']} />
                        </div>
                    </Card>
                    <Card size="s">
                        <div style={{ 
                         height: 96,  
                         borderRadius: 10,
                         }} >
                        <img alt="badge" style={{ width: '100%', height: 96, borderRadius: 10, objectFit: 'cover', objectPosition: 'center', zIndex: 0}} src={avatars['bestclub']} />
                        </div>
                    </Card>
                </CardGrid>
                <CardGrid>
                <Card size="s">
                        <div style={{ 
                         height: 96,  
                         borderRadius: 10,
                         }} >
                        <img alt="badge" style={{ width: '100%', height: 96, borderRadius: 10, objectFit: 'cover', objectPosition: 'center', zIndex: 0}} src={avatars['bestclub']} />
                        </div>
                    </Card>
                    <Card size="s">
                        <div style={{ 
                         height: 96,  
                         borderRadius: 10,
                         }} >
                        <img alt="badge" style={{ width: '100%', height: 96, borderRadius: 10, objectFit: 'cover', objectPosition: 'center', zIndex: 0}} src={avatars['bestclub']} />
                        </div>
                    </Card>
                    <Card size="s">
                        <div style={{ 
                         height: 96,  
                         borderRadius: 10,
                         }} >
                        <img alt="badge" style={{ width: '100%', height: 96, borderRadius: 10, objectFit: 'cover', objectPosition: 'center', zIndex: 0}} src={avatars['bestclub']} />
                        </div>
                    </Card>
                </CardGrid>
                <CardGrid>
                <Card size="s">
                        <div style={{ 
                         height: 96,  
                         borderRadius: 10,
                         }} >
                        <img alt="badge" style={{ width: '100%', height: 96, borderRadius: 10, objectFit: 'cover', objectPosition: 'center', zIndex: 0}} src={avatars['bestclub']} />
                        </div>
                    </Card>
                    <Card size="s">
                        <div style={{ 
                         height: 96,  
                         borderRadius: 10,
                         }} >
                        <img alt="badge" style={{ width: '100%', height: 96, borderRadius: 10, objectFit: 'cover', objectPosition: 'center', zIndex: 0}} src={avatars['bestclub']} />
                        </div>
                    </Card>
                    <Card size="s">
                        <div style={{ 
                         height: 96,  
                         borderRadius: 10,
                         }} >
                        <img alt="badge" style={{ width: '100%', height: 96, borderRadius: 10, objectFit: 'cover', objectPosition: 'center', zIndex: 0}} src={avatars['bestclub']} />
                        </div>
                    </Card>
                </CardGrid>
            </Group>

		</Panel>
	)
}


export default Badge;
