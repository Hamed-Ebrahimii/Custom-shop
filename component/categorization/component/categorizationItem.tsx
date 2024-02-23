const CategorizationItem = (props : {image : string , name : string}) =>{
    return(
        <div className={'w-44 h-32 p-2 rounded-xl flex flex-col items-center justify-center gap-2 border '}>
            <img src={props.image} alt="" className={'w-full h-20 rounded-xl'}/>
            <p className={'text-lg font-bold'}>{props.name}</p>
        </div>
    )
}
export default CategorizationItem