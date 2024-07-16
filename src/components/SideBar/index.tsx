import Button from '@/components/SideBar/components/Button';
import { Suspense } from 'react';
import SideBarNoteList from '@/components/SideBar/components/SideBarNoteList';
import SideBarLoading from '@/components/SideBar/components/SideBarLoading';
import Link from 'next/link';
import { SideBarSearch } from '@/components/SideBar/components/SideBarSearch';

export default function SideBar() {
    return (
        <div className={'min-w-[300px] bg-white p-4 shadow-lg shadow-gray-300'}>
            <Link href={'/'}>
                <h1 className="cursor-pointer py-8 text-center text-4xl font-bold">hela notes</h1>
            </Link>

            <div className={'flex h-10'}>
                <SideBarSearch />
                <Button />
            </div>

            <Suspense fallback={<SideBarLoading />}>
                {/*noteItem列表*/}
                <SideBarNoteList />
            </Suspense>
        </div>
    );
}
