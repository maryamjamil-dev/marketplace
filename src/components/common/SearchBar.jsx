
import React from "react";
import { IoMdSearch } from "react-icons/io";

const SearchBar = () => {
    return (
        <div className="flex w-full justify-center items-center  h-[100px]">
            <div className="w-[50%] pl-6 flex border border-slate-200 rounded-md  items-center gap-2">
                <input
                    type="text"
                    placeholder="Search products..."
                    className=" rounded-md  h-[45px] w-[100%] text-gray-700    text-[14px] outline-none focus:border-[#4b50d8]"
                />
                <button className="bg-[#4b50d8] h-[45px] w-[70px] rounded-md cursor-pointer flex justify-center items-center">
                    <IoMdSearch className="text-gray-100  text-[22px]" />
                </button >
            </div>
        </div>
    );
};

export default SearchBar;

