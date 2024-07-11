import {getNote} from "@/lib/redis";
import Preview from "@/app/note/components/Preview";

export default async function NoteDetail({params}) {
    const {id} = params;
    const note = await getNote(id);

    if (!note) return <div>暂无数据</div>

    return <Preview noteId={id} noteDetail={note}/>

}