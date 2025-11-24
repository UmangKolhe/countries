import { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const CardContainer = ({searchdata})=>{
     const { theme } = useContext(ThemeContext);

    const[cdata,setCdata]=useState([])

    useEffect(()=>{
        fetchdata()
    },[])

 function fetchdata(){
       const data1 = fetch("https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population")
       data1.then((data)=>data.json())
       .then((data2)=> setCdata(data2))
}

    return (
        <div className={`p-4 flex gap-4 justify-center flex-wrap ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"} `}>
          {cdata.filter(obj=>obj.name.common.toLowerCase().includes(searchdata.toLowerCase()) || obj.region.toLowerCase().includes(searchdata.toLowerCase()) ).map((obj,index)=>(
             <Link key={index} className="inline-block" to={"/country/"+obj.name.common.toLowerCase()} > <Card   data={obj} /> </Link> 
          ))}  
        </div>
    )
}

export default CardContainer;