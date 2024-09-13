export default function EditLoading() {
    const defaultNum: number = 3;
    const loadingList: any[] = new Array(defaultNum).fill(0);
    return (
        <div className={'flex h-full w-full gap-4'}>
            <div className={'flex flex-1 flex-col gap-4'}>
                <div className={'h-[60px] bg-gray-200'}></div>
                <div className={'flex-1 bg-gray-200'}></div>
            </div>
            <div className={'flex flex-1 flex-col gap-4'}>
                <div className={'flex h-[60px] gap-4'}>
                    <div className={'ml-auto h-full w-[100px] rounded bg-gray-200'}></div>
                    <div className={'h-full w-[100px] rounded bg-gray-200'}></div>
                </div>
                <div className={'h-full flex-1'}>
                    {loadingList.map((item, index) => (
                        <div
                            key={index}
                            className={'my-2 h-10 cursor-pointer rounded-md bg-gray-200 p-4 text-left'}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
}
