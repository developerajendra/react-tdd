import React from 'react';
import {UserContext, ChannelContext} from '../App';

const ComponentC = ()=>{
    return <div style={{'border':'solid 1px red', margin:'10px', padding:'10px'}}>
        <h1>This is component c</h1>
        <UserContext.Consumer>
            {
                firstName => { 
                    return (
                        <ChannelContext.Consumer>
                            {
                                lastName => {
                                    return <div>user context value is: firstname: <b>{firstName}</b>  lastname: <b>{lastName}</b></div> 
                                }
                            }
                        </ChannelContext.Consumer>
                    )
                    
                }
            }
        </UserContext.Consumer>
    </div>
}

export default ComponentC;