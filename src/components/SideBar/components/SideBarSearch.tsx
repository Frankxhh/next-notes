'use client';
import { useTransition } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export const SideBarSearch = () => {
    const { replace } = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();
    const handleChange = (e) => {
        const params = new URLSearchParams(window.location.search);
        if (e.target.value) {
            params.set('search', e.target.value);
        } else {
            params.delete('search');
        }

        startTransition(() => {
            replace(`${pathname}?${params.toString()}`);
        });
    };
    return (
        <input
            onChange={handleChange}
            placeholder={'search note'}
            className={'mr-4 flex-1 border px-2'}
            type={'text'}
        />
    );
};
