
import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const MyDropdown = ({setSearchData}) => {
   const { theme } = useContext(ThemeContext);
  return (
    <div className={`w-full mx-auto md:mx-0 max-w-[260px]  `}>
      <select
        className={`
          w-full 
          p-4 
          rounded-xl 
          border 
         
          shadow-sm 
         
          focus:outline-none 
          focus:ring-2 
          focus:ring-blue-500 
          cursor-pointer
          ${theme === "dark" ? "bg-gray-800 text-white border-gray-600" : "bg-white text-black border-gray-300"}
        `}
      onChange={(e)=>setSearchData(e.target.value)}
      >
        <option hidden value="">Filter By Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
};

export default MyDropdown;
