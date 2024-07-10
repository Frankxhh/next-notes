import dayjs from "dayjs";

export default function Preview({noteDetail: {title, content, updateTime}}) {
    const color = 'red'
    return (
        <div>
            <div className={'flex justify-between'}>
                <span>Last updated on {dayjs(updateTime).format('YYYY-MM-DD hh:mm:ss')}</span>
                <button className={`px-4 py-2 border-2 border-cyan-600 text-cyan-600 font-bold rounded-2xl`}>Edit</button>
            </div>
            <h1 className={'text-6xl font-bold'}>{title}</h1>
            <div className={'h-[1px] bg-[#f5f5f5] my-10'}></div>
            <div>{content}</div>
        </div>
    )
}