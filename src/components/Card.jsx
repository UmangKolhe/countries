
const Card = ({data})=>{
   
    return (
        <div className="rounded overflow-hidden   w-[270px] p-2 shadow">
           <div  className="h-[180px] w-full " > <img className="w-full h-full object-cover " src={data?.flags?.svg} alt="" /></div>
            <div className="mt-5 mb-5 min-h-[140px]">
            <h1 className="font-Nunito font-extrabold text-2xl" >{data?.name?.common}</h1>
            <h1 className="font-Nunito "> <span className="font-bold">Population:</span> {Number(data?.population).toLocaleString()} </h1>
            <h1 className="font-Nunito"> <span className="font-bold" > Region:</span> {data?.region}</h1>
            <h1 className="font-Nunito"> <span className="font-bold">Capital:</span>  {data?.capital?.join(" , ")}</h1>
            </div>
        </div>
    )
}
export default Card