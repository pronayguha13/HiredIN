import React from "react";
import {AiOutlineCloseCircle} from "react-icons/ai";

const SearchSection = ({placeholder}) => {
    return <>
        <input type="text" className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
               placeholder={placeholder}/>
        <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon"/>
    </>;
}

export default SearchSection;