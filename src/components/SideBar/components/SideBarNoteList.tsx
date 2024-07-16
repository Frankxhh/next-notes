import { getAllNotes } from '@/lib/redis';
import SideBarNoteListRender from '@/components/SideBar/components/SideBarNoteListRender';

export default async function SideBarNoteList() {
    const notes = await getAllNotes();
    const notesArr = Object.entries(notes);

    if (notesArr.length === 0) return <div className={'text-center'}>暂无笔记</div>;

    return <SideBarNoteListRender notesArr={notesArr} />;
}
