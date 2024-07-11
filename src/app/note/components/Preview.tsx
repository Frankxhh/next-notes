import dayjs from 'dayjs';
import Link from 'next/link';
import { Note } from '@/lib/redis';

interface Params {
    noteId?: string;
    noteDetail: Note;
}

export default function Preview({ noteId, noteDetail }: Params) {
    const { title, content, updateTime } = noteDetail;
    const color = 'red';

    return (
        <div>
            {/*预览没有标题/edit按钮*/}
            {updateTime ? (
                <div className={'flex justify-between'}>
                    <span>Last updated on {dayjs(updateTime).format('YYYY-MM-DD hh:mm:ss')}</span>
                    <Link href={`/note/edit/${noteId}`}>
                        <button className={`rounded-2xl border-2 border-cyan-600 px-4 py-2 font-bold text-cyan-600`}>
                            Edit
                        </button>
                    </Link>
                </div>
            ) : (
                <button className={`mb-4 mt-8 rounded-2xl bg-primary-light px-2 py-1 text-sm font-bold text-cyan-600`}>
                    PREVIEW
                </button>
            )}

            <h1 className={'text-6xl font-bold'}>{title}</h1>
            <div className={'my-10 h-[1px] bg-[#f5f5f5]'}></div>
            <div>{content}</div>
        </div>
    );
}
