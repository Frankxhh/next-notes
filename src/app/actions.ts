'use server';

import { redirect } from 'next/navigation';
import { addNote, updateNote, delNote } from '@/lib/redis';

interface FormData {
    title: string;
    content?: string;
    id?: string;
}

export async function saveNote(formData: FormData) {
    const { title, content, id: noteId } = formData;

    const data = JSON.stringify({
        title,
        content,
        updateTime: new Date(),
    });

    if (noteId) {
        await updateNote(noteId, data);
        redirect(`/note/${noteId}`);
    } else {
        const res = await addNote(data);
        redirect(`/note/${res}`);
    }
}

export async function deleteNote(noteId?: string) {
    await delNote(noteId!);
    redirect('/');
}
