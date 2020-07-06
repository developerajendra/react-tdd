import React, { useState, useEffect, useRef } from 'react'

const HoockTimer =()=> {
    const [timer, settimer] = useState(0);
    const intervalRef = useRef();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            settimer(timer=>timer+1);
         }, 1000);
        return () => {
            clearInterval(intervalRef.current);
        }
    }, [])
    return (
        <div>
            The timer is: {timer}
            <button onClick={()=>clearInterval(intervalRef.current)}>Clear Interval</button>
        </div>
    )
}

export default  HoockTimer;