import {getAllNotes} from "@/lib/redis";
import dayjs from "dayjs";
import SideBarContent from "@/components/SideBar/components/SideBarContent";
import Button from "@/components/SideBar/components/Button";

export default async function SideBar() {
    const notes = await getAllNotes()
    const notesArr = Object.entries(notes)

    return (
        <div className={'p-4 bg-white shadow-lg shadow-gray-300 min-w-[300px] '}>
            <h1 className="text-4xl font-bold py-8 text-center">hela notes</h1>

            <Button/>

            <div>
                {/*noteItem列表*/}
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
        </div>
    )
}