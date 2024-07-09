export default function SideBarLoading() {
    const defaultNum: number = 3
    const loadingList: any[] = new Array(defaultNum).fill(0)
    return (
        <div>
            {
                loadingList.map((item, index) => (
                    <div key={index} className={'h-32 p-4 my-2 bg-gray-200 rounded-md cursor-pointer text-left'}></div>
                ))
            }
        </div>
    )
}