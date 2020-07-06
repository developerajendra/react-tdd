import React from 'react';
import ComponentB from './ComponentB';

const ComponentA = ()=>{
    return <div style={{'border':'solid 1px green', margin:'10px', padding:'10px'}}>
        <h1>Using Context - This is component A</h1>
        <ComponentB/>
    </div>
}

export default ComponentA;