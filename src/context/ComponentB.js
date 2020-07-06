import React, {useContext} from 'react';
import ComponentC from './ComponentC';
import {UserContext, ChannelContext} from '../App';

const ComponentB = ()=>{
    const firstName = useContext(UserContext);
    const lastName = useContext(ChannelContext);
    return <div style={{'border':'solid 1px blue', margin:'10px', padding:'10px'}}>
        <h1>This is component B</h1>
        <div>user context value is: firstname: <b>{firstName}</b>  lastname: <b>{lastName}</b></div> 
        <ComponentC/>
    </div>
}

export default ComponentB;