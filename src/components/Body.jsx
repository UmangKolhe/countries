import SearchSection from "./SearchSection"
import CardContainer from "./CardContainer"
import { useState } from "react"

const Body = ()=>{
     const[searchdata,setSearchData]=useState("")
    return (
        <>
        <SearchSection setSearchData={setSearchData} />
        <CardContainer searchdata={searchdata} />
        </>
    )
}
export default Body