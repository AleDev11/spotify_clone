"use client";

import { VscLibrary } from "react-icons/vsc";
import { AiOutlinePlus } from "react-icons/ai";

const Library = () => {
    const onClick = () => {
        console.log("clicked");
    };

    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-between px-5 py-4">
                <div className="inline-flex items-centergap-x-2">
                    <VscLibrary className="text-neutral-400" size={26} />
                    <p className="text-md font-medium text-neutral-400 pl-2">Your Library</p>
                </div>
                <AiOutlinePlus onClick={onClick} size={20} className="text-neutral-400 cursor-pointer hover:text-white transition" />
            </div>
            <div className="flex flex-col gap-y-2 mt-4 px-3">
                List of Songs!
            </div>
        </div>
    )
}

export default Library