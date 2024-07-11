'use client'
import {ChangeEvent, useState} from "react";
import {Note} from "@/lib/redis";
import Preview from "@/app/note/components/Preview";


export default function Edit() {

    const [formData, setFormData] = useState<Note>({
        title: '笔记',
        content: ''
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>, key: string) => {
        setFormData({
            ...formData,
            [key]: e.target.value
        })
    }

    return (
        <div className={'h-full flex'}>
            <form className={'h-full w-1/2 mr-4 flex flex-col gap-4'}>
                <input className={'border border-[#ccc] p-4 rounded outline-0'}
                       value={formData.title}
                       onChange={(e) => handleChange(e, 'title')}
                       type="text"
                       placeholder="Title"/>
                <textarea className={'flex-1 border border-[#ccc] p-4 rounded resize-none outline-0'}
                          onChange={(e) => handleChange(e, 'content')}
                          value={formData.content}
                          placeholder="Content"/>
            </form>

            {/*preview*/}
            <div className={'flex-1'}>
                <div className={'text-right'}>
                    <button
                        className={'ml-auto mr-4 px-4 py-2 border-2 bg-cyan-600 text-white font-bold rounded-2xl'}>DONE
                    </button>
                    <button
                        className={'px-4 py-2 border-2 border-error-disabled text-error-disabled font-bold rounded-2xl'}>DELETE
                    </button>
                </div>
                <Preview noteDetail={formData}/>
            </div>
        </div>
    )
}