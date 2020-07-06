import React, { useState } from 'react'

import useInput from './useInput';

const UserForm =()=> {
    
    const [firstName, bindFirstName, rsetFirstName] = useInput('');
    const [lastName, bindLastName, resetLastname] = useInput('');

    const formSubmit = (e)=>{
        e.preventDefault();
        alert(`${firstName} ${lastName}`)
        rsetFirstName();
        resetLastname();
    }

    return (
        <div style={{margin:'100px'}}>
            <form action="" onSubmit={formSubmit}>
                <input  {...bindFirstName} type="text" placeholder="firstname" style={{margin:'10px'}}/>
                <input {...bindLastName} type="text"   placeholder="lastname"/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default UserForm
