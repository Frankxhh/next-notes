export default function EditLoading() {
    const defaultNum: number = 3;
    const loadingList: any[] = new Array(defaultNum).fill(0);
    return (
        <div className={'flex h-full gap-4 w-full'}>
            <div className={'flex-1 flex flex-col gap-4'}>
                <div className={'bg-gray-200 h-[60px]'}></div>
                <div className={'bg-gray-200 flex-1'}></div>
            </div>
            <div className={'flex-1 flex flex-col gap-4'}>
                <div className={'h-[60px] flex gap-4'}>
                    <div className={'rounded ml-auto w-[100px] h-full bg-gray-200'}></div>
                    <div className={'rounded w-[100px] h-full bg-gray-200'}></div>
                </div>
                <div className={'flex-1 h-full'}>
                    {loadingList.map((item, index) => (
                        <div
                            key={index}
                            className={'h-10 p-4 my-2 bg-gray-200 rounded-md cursor-pointer text-left'}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
}
