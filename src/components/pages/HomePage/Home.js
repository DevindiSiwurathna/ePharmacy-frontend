import React from 'react';
import {homeObjOne, homeObjTwo} from './Data';
import  InfoSection  from '../../InfoSection/InfoSection';
import Chatbot from 'react-chatbot-kit';
import ActionProvider from '../../chatbot/ActionProvider';
import MessageParser from '../../chatbot/MessageParser';
import config from '../../chatbot/config';
import Draggable from 'react-draggable'; // The default


export const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Draggable>
        <div>
        <Chatbot 
        config={config} actionProvider={ActionProvider} messageParser={MessageParser}/>
        </div>
        </Draggable>
            
        </>
    )
}

export default Home;
