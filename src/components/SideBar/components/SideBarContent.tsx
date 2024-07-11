'use client'

import {useState} from "react";

interface Params {
    content:any
}

export default function SideBarExpand({content}:Params) {
    const [isExpand, setExpand] = useState(false)
    const handleExpand = (e:any) => {
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