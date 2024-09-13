export default function Loading() {
    const contentNum = 6;
    const contentArr = Array(contentNum).fill(0);
    return (
        <div>
            <div className={'flex h-12 justify-between gap-4 rounded'}>
                <div className={'h-full flex-1 rounded bg-gray-200'}></div>
                <div className={'h-full w-1/5 rounded bg-gray-200'}></div>
            </div>
            <div className={'my-4 flex h-[100px] justify-between rounded bg-gray-200'}>
                <div className={'flex-1'}></div>
                <div className={'w-1/5'}></div>
            </div>
            <div>
                {contentArr.map((item, index) => (
                    <div key={index} className={'mb-4 h-8 rounded bg-gray-200'}></div>
                ))}
            </div>
        </div>
    );
}
