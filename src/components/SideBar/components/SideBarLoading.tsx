export default function SideBarLoading() {
    const defaultNum: number = 3;
    const loadingList: any[] = new Array(defaultNum).fill(0);
    return (
        <div>
            {loadingList.map((item, index) => (
                <div key={index} className={'my-2 h-32 cursor-pointer rounded-md bg-gray-200 p-4 text-left'}></div>
            ))}
        </div>
    );
}
