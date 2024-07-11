import dayjs from "dayjs";

export default function Preview({noteDetail}) {
    const {title, content, updateTime} = noteDetail
    const color = 'red'

    return (
        <div>
            {/*预览没有标题/edit按钮*/}
            {updateTime ?
                <div className={'flex justify-between'}>
                    <span>Last updated on {dayjs(updateTime).format('YYYY-MM-DD hh:mm:ss')}</span>
                    <button
                        className={`px-4 py-2 border-2 border-cyan-600 text-cyan-600 font-bold rounded-2xl`}>Edit
                    </button>
                </div>
                :
                <button
                    className={`mt-8 mb-4 px-2 py-1 bg-primary-light text-sm text-cyan-600 font-bold rounded-2xl`}>PREVIEW
                </button>
            }


            <h1 className={'text-6xl font-bold'}>{title}</h1>
            <div className={'h-[1px] bg-[#f5f5f5] my-10'}></div>
            <div>{content}</div>
        </div>
    )
}