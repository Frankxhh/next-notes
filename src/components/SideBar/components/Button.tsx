'use client';
import Link from 'next/link';

export default function Button() {
    return (
        <Link href={'/note/edit'}>
            <button className={'bg-cyan-200 px-4 py-2 rounded mb-4'}>new</button>
        </Link>
    );
}
