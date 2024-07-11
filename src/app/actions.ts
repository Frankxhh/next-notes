'use server'

import {redirect} from 'next/navigation'
import {addNote, updateNote, delNote} from '@/lib/redis';

export async function saveNote(formData) {
    const {title, content, id: noteId} = formData

    const data = JSON.stringify({
        title,
        content,
        updateTime: new Date()
    })

    if (noteId) {
        await updateNote(noteId, data)
        redirect(`/note/${noteId}`)
    } else {
        const res = await addNote(data)
        redirect(`/note/${res}`)
    }

}

export async function deleteNote(noteId) {
    await delNote(noteId)
    redirect('/')
}
