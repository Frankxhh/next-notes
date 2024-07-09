'use client'
import {useState} from "react";

export default function Button(){
    const [isNew, setIsNew] = useState(true)

    const handleClick = () => {

    }

    return (
        <button onClick={handleClick} className={'bg-cyan-200 px-4 py-2 rounded mb-4'}>{isNew?'new':'edit'}</button>
    )
}