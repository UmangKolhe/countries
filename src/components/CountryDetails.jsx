import { useEffect, useState } from "react";
import { useParams , Link } from "react-router-dom"


const CountryDetails = ()=>{
    const {name} = useParams()
     const[cdata,setCData]=useState(null)
    const[borders,setBorders]=useState([])
    useEffect(()=>{
        fetchdata()
    },[name])

    function fetchdata (){
      fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((data1)=>data1.json())
      .then((data2)=>  data2.filter(obj=>obj.name.common.toLowerCase()===name) )
      .then(data3=>{ 
       
        setCData(data3[0]);
        funborders(data3[0]?.borders)
    })}

   async function funborders(bArr){
         if(!bArr) return;
    //     let temp=[]
    //     for(let obj of bArr){
    //         const res = await fetch(`https://restcountries.com/v3.1/alpha/${obj}`);
    //   const data = await res.json();
    //    temp.push(data[0].name.common);
    //     }
    //     setBorders(temp)

   const promises =  bArr.map(obj=> fetch(`https://restcountries.com/v3.1/alpha/${obj}`).then(obj=>obj.json()))
   const results = await Promise.all(promises)
   const temp = results.map(obj => obj[0].name.common);
   setBorders(temp);
    }

    if(cdata===null){
        return <h1 className="text-center text-3xl ">Loading....</h1>
    }
    return(
        <div>
        
       <button onClick={()=>history.back()}  className=" cursor-pointer m-8 px-6 py-1  rounded shadow">Back</button>
        <div className="p-4 mx-auto w-[290px] md:flex md:gap-10 md:items-center  md:max-w-[1300px] md:w-full">
           <div className="md:w-[50%]">
             <img className="w-full md:max-w-[600px]" src={cdata?.flags?.svg} alt="" />
            </div>
            
           <div className="md:w-[50%]">
            <div>
                
            <div className="w-full  md:w=[50%] md:flex md:justify-between">

            <div className=" md:w-[50%] " >
            <h1 className=" font-Nunito my-4 text-2xl font-bold">{cdata?.name?.common}</h1>
            <h1 className="my-2"><span className="font-medium" >Native Name : </span> {Object.values(cdata?.name?.nativeName)[0].common} </h1>
            <h1 className="my-2"><span className="font-medium" >Population  : </span> {Number(cdata?.population).toLocaleString()} </h1>
            <h1 className="my-2"><span className="font-medium" >Region  : </span> {cdata?.region} </h1>
            <h1 className="my-2"><span className="font-medium" >Sub Region  : </span> {cdata?.subregion} </h1>
            <h1 className="my-2"><span className="font-medium" >Capital : </span> {cdata?.capital?.join(" , ")} </h1>
            </div>

            <div className="my-10 md:w-[50%]">
            <h1 className="my-2"><span className="font-medium" >Top Level Domain : </span> {cdata?.tld?.join("  ,  ")} </h1>
            <h1 className="my-2"><span className="font-medium" >Currencies : </span> {Object.values(cdata?.currencies)[0].name} </h1>
            <h1 className="my-2"><span className="font-medium" >Languages : </span> {Object.values(cdata?.languages).join("  ,  ")} </h1>
            </div>

           </div>
           </div>

          {cdata?.borders && <div>
            <h1>Borders:</h1>
            {
                borders.map(obj=> <Link key={obj} to={"/country/"+obj.toLowerCase()} ><button className="p-2 m-2 shadow cursor-pointer rounded " > {obj} </button></Link> )
            }
          </div>}

           

           </div>
           
        </div>

        </div>
    )
}

export default CountryDetails