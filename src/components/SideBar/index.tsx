import Button from "@/components/SideBar/components/Button";
import {Suspense} from "react";
import SideBarNoteList from "@/components/SideBar/components/SideBarNoteList";
import SideBarLoading from "@/components/SideBar/components/SideBarLoading";

export default function SideBar() {

    return (
        <div className={'p-4 bg-white shadow-lg shadow-gray-300 min-w-[300px] '}>
            <h1 className="text-4xl font-bold py-8 text-center">hela notes</h1>

            <Button/>

            <Suspense fallback={<SideBarLoading/>}>
                {/*noteItem列表*/}
                <SideBarNoteList/>
            </Suspense>
        </div>
    )
}