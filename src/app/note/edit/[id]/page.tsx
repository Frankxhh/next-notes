import Edit from "@/app/note/components/Edit";
import {getNote} from "@/lib/redis";

export default async function EditPage({params}) {

    const {id} = params
    const note = await getNote(id)

    return (
        <Edit noteId={id} noteDetail={note}/>
    )
}