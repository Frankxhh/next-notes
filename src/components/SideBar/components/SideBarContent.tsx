'use client'

import {useState} from "react";

export default function SideBarExpand({content}) {
    const [isExpand, setExpand] = useState(false)
    const handleExpand = (e) => {
        e.preventDefault()
        setExpand(!isExpand)
    }

    return (
        <>
            <div className={'absolute top-0 right-0 text-cyan-500'} onClick={handleExpand}>{isExpand ? '收起' : '展开'}</div>

            {isExpand && content}
        </>
    )
}