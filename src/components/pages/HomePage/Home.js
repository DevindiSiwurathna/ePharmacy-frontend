import React from 'react';
import {homeObjOne, homeObjTwo} from './Data';
import  InfoSection  from '../../InfoSection/InfoSection';

export const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>

            
        </>
    )
}

export default Home;
