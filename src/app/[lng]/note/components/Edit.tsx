'use client';
import { ChangeEvent, useState } from 'react';
import { Note } from '@/lib/redis';
import Preview from '@/app/[lng]/note/components/Preview';
import { deleteNote, saveNote } from '@/app/[lng]/actions';

interface Params {
    noteId?: string;
    noteDetail?: Note;
}

export default function Edit({ noteId = '', noteDetail }: Params) {
    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        title: noteDetail ? noteDetail.title : '笔记',
        content: noteDetail ? noteDetail.content : '',
        id: noteId,
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>, key: string) => {
        setFormData({
            ...formData,
            [key]: e.target.value,
        });
    };

    return (
        <div className={'flex h-full'}>
            <form className={'mr-4 flex h-full w-1/2 flex-col gap-4'}>
                <input
                    className={'rounded border border-[#ccc] p-4 outline-0'}
                    value={formData.title}
                    onChange={(e) => handleChange(e, 'title')}
                    type="text"
                    placeholder="Title"
                />
                <textarea
                    className={'flex-1 resize-none rounded border border-[#ccc] p-4 outline-0'}
                    onChange={(e) => handleChange(e, 'content')}
                    value={formData.content}
                    placeholder="Content"
                />
            </form>

            {/*preview*/}
            <div className={'flex-1'}>
                <div className={'text-right'}>
                    <button
                        onClick={() => saveNote(formData)}
                        className={'ml-auto mr-4 rounded-2xl border-2 bg-cyan-600 px-4 py-2 font-bold text-white'}
                    >
                        DONE
                    </button>
                    <button
                        onClick={() => deleteNote(formData.id)}
                        className={'rounded-2xl border-2 border-error-disabled px-4 py-2 font-bold text-error-disabled'}
                    >
                        DELETE
                    </button>
                </div>
                <Preview noteId={''} noteDetail={formData} />
            </div>
        </div>
    );
}
