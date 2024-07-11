import dayjs from "dayjs";
import Link from "next/link";
import {Note} from "@/lib/redis";

interface Params {
    noteId?: string,
    noteDetail: Note
}

export default function Preview({noteId, noteDetail}: Params) {
    const {title, content, updateTime} = noteDetail
    const color = 'red'

    return (
        <div>
            {/*预览没有标题/edit按钮*/}
            {updateTime ?
                <div className={'flex justify-between'}>
                    <span>Last updated on {dayjs(updateTime).format('YYYY-MM-DD hh:mm:ss')}</span>
                    <Link href={`/note/edit/${noteId}`}>
                        <button
                            className={`px-4 py-2 border-2 border-cyan-600 text-cyan-600 font-bold rounded-2xl`}>Edit
                        </button>
                    </Link>
                </div>
                :
                <button
                    className={`mt-8 mb-4 px-2 py-1 bg-primary-light text-sm text-cyan-600 font-bold rounded-2xl`}>PREVIEW
                </button>
            }


            <h1 className={'text-6xl font-bold'}>{title}</h1>
            <div className={'h-[1px] bg-[#f5f5f5] my-10'}></div>
            <div>{content}</div>
        </div>
    )
}