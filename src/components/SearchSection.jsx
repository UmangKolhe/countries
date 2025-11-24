import search from "../assets/magnifying-glass.svg"
import MyDropdown from "./MyDropdown"
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const SearchSection = ({setSearchData})=>{
     const { theme } = useContext(ThemeContext);
    
    return (
        <div className={`p-4  md:flex justify-between items-center md:py-8 md:px-16 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"} `}>
                <div className="flex mx-auto items-center md:mx-0 shadow max-w-[350px]  mt-4 p-4  gap-x-6 rounded">
                    <img className={`w-8 ${theme === "dark" ? "invert brightness-200" : ""} `} src={search} alt="" />
                    <input type="text" onChange={e=>setSearchData(e.target.value)}  className={`
      bg-transparent outline-none 
      ${theme === "dark" ? "text-white placeholder-gray-400" : "text-black placeholder-gray-500"}
  `} placeholder="Search for a country..." />
                </div>
                <div className="  mt-5 md:mt-0  ">
               <MyDropdown  setSearchData={setSearchData} />
                </div>
        </div>
    )
}
export default SearchSection