import React, { useState, useMemo } from 'react'

export default function Counter() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setcounterTwo] = useState(0)

    const increnmentOne = ()=>{
        
        setCounterOne(counterOne+1);
    }

    const increnmentTwo = ()=>{
        setcounterTwo(counterTwo+1);
    }

    //The issue for both the counter
    // const isEven = ()=>{
    //     let i = 0;
    //    while(i<900000000)i++
    //     return counterOne % 2 == 0;
    // }

    
    //Memo solveed the peformacne issue for 2nd
    const isEven = useMemo(()=>{
        let i = 0;
       while(i<900000000)i++
        return counterOne % 2 == 0;
    },[counterOne]);

    return (
        <div>
            <button onClick={increnmentOne}>Increnment Even - {counterOne}</button>
            {isEven ? 'Even' : 'Odd'}
            <button onClick={increnmentTwo}>Increnment two - {counterTwo}</button>
        </div>
    )
}
