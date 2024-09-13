import { getNote } from '@/lib/redis';
import Preview from '@/app/[lng]/note/components/Preview';

interface Params {
    id?: string;
}

export default async function NoteDetail({ params }: { params: Params }) {
    const { id } = params;
    const note = await getNote(id!);

    if (!note) return <div>暂无数据</div>;

    return <Preview noteId={id} noteDetail={note} />;
}
