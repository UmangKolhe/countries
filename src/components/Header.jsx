import { Link } from "react-router-dom"
import moon from  "../assets/moon-regular.svg"
import { ThemeContext } from "../context/ThemeContext"
import sun from "../assets/sun-regular-full.svg"
import { useContext } from "react";

const Header = ()=>{
   const { theme, toggleTheme } = useContext(ThemeContext);
    return(
       <div className={`flex items-center justify-between p-4 shadow-md md:py-8 md:px-16 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"}} `} >
         <Link className="block" to={"/"}><h1 className="font-bold text-sm md:text-2xl " > Where in the world? </h1></Link>
          <div onClick={toggleTheme} className="flex items-center cursor-pointer">
            <img className={`w-4 mr-1 md:w-6 ${theme === "dark" ? "invert brightness-200" : ""} `} src={theme==="light"?moon:sun} alt="" />
            <h1 className="text-sm md:text-2xl">{theme === "light" ? "Dark Mode" : "Light Mode"}</h1>
          </div>
       
       </div>
    )
}
export default Header