import React, { useEffect, useRef } from 'react'

import HoockTimer from './HoockTimer';

export default function Ref() {
    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus();
        // inputRef.current.value = "this is from ref"
        inputRef.current.placeholder = "I am from useRef"
    }, [])

    return (
        <div>
            <HoockTimer />
            <input ref={inputRef} type="text"/>
        </div>
    )
}
