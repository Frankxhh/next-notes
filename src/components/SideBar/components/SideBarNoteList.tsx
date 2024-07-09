import {getAllNotes} from "@/lib/redis";
import dayjs from "dayjs";
import SideBarContent from "@/components/SideBar/components/SideBarContent";

export default async function SideBarNoteList() {
    const notes = await getAllNotes()
    const notesArr = Object.entries(notes)

    if(notesArr.length === 0) return <div className={'text-center'}>暂无笔记</div>

    return (
        <div>
            {notesArr.map(([noteId, note]) => {
                const {title, content, updateTime} = JSON.parse(note)
                return (
                    <div className={'p-4 my-2 bg-gray-200 rounded-md cursor-pointer text-left'} key={noteId}>
                        <div className={'relative'}>
                            <div className={'text-xl font-bold'}>{title}</div>
                            <div>{dayjs(updateTime).format('YYYY-MM-DD hh:mm:ss')}</div>

                            <SideBarContent content={
                                <div>{content}</div>
                            }/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}