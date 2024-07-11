export default function Loading() {
    const contentNum = 6;
    const contentArr = Array(contentNum).fill(0);
    return (
        <div>
            <div className={'rounded flex justify-between gap-4 h-12'}>
                <div className={'rounded flex-1 bg-gray-200 h-full'}></div>
                <div className={'rounded w-1/5 h-full bg-gray-200'}></div>
            </div>
            <div className={'rounded my-4 flex justify-between h-[100px] bg-gray-200'}>
                <div className={'flex-1'}></div>
                <div className={'w-1/5'}></div>
            </div>
            <div>
                {contentArr.map((item, index) => (
                    <div key={index} className={'rounded h-8 mb-4 bg-gray-200'}></div>
                ))}
            </div>
        </div>
    );
}
