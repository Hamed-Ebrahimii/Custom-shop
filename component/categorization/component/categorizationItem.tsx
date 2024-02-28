const CategorizationItem = (props : {image : string , name : string}) =>{
    return(
        <div className={'w-28 h-24 md:w-44 md:h-32 p-2 rounded-xl flex flex-col items-center justify-center gap-2 border '}>
            <img src={props.image} alt="" className={'w-full h-12 md:h-20 rounded-xl'}/>
            <p className={'text-sm md:text-lg font-bold'}>{props.name}</p>
        </div>
    )
}
export default CategorizationItem