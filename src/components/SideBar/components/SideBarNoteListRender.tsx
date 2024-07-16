'use client';
import Link from 'next/link';
import dayjs from 'dayjs';
import SideBarContent from '@/components/SideBar/components/SideBarContent';
import { useSearchParams } from 'next/navigation';

interface Params {
    notesArr?: [string, string][];
}

export default function SideBarNoteListRender({ notesArr }: Params) {
    const searchParams = useSearchParams();
    const searchContent = searchParams.get('search');
    return (
        <div>
            {notesArr?.map(([noteId, note]) => {
                const { title, content, updateTime } = JSON.parse(note);
                if (!searchContent || title.includes(searchContent)) {
                    return (
                        <Link href={`/note/${noteId}`} key={noteId}>
                            <div className={'my-2 cursor-pointer rounded-md bg-gray-200 p-4 text-left'}>
                                <div className={'relative'}>
                                    <div className={'text-xl font-bold'}>{title}</div>
                                    <div>{dayjs(updateTime).format('YYYY-MM-DD hh:mm:ss')}</div>

                                    <SideBarContent content={<div>{content}</div>} />
                                </div>
                            </div>
                        </Link>
                    );
                }
                return null;
            })}
        </div>
    );
}
