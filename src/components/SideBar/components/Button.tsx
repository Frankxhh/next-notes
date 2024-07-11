'use client';
import Link from 'next/link';

export default function Button() {
    return (
        <Link href={'/note/edit'}>
            <button className={'mb-4 rounded bg-cyan-200 px-4 py-2'}>new</button>
        </Link>
    );
}
