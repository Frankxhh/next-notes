import Edit from "@/app/note/components/Edit";
import {getNote} from "@/lib/redis";

interface Params {
    params: {
        id: string
    }
}

export default async function EditPage({params}: Params) {

    const {id} = params
    const note = await getNote(id)

    return (
        <Edit noteId={id} noteDetail={note}/>
    )
}