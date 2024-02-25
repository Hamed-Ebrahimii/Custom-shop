import {TbDiscount2} from "react-icons/tb";
import Image from "next/image";
const SpecialSale = () =>{
    return(
        <div className={'w-full mt-10'}>
            <div className={'w-full flex items-end  gap-6 h-10'}>
                <div className={'flex gap-2 items-center'}>
                    <TbDiscount2 className={'size-10'}/>
                    <p className={'text-xl font-bold whitespace-nowrap'}>فروش ویژه</p>
                </div>
                <hr className={'w-10/12 h-3 my-auto mt-6'}/>
            </div>
            <div className={'mt-6 w-full flex items-center gap-6'}>
                <div className={'w-[600px] h-[576px] overflow-hidden rounded-xl'}>
                    <img src={'/img/spacejoy-IH7wPsjwomc-unsplash.jpg'} alt={''}  className={'w-full h-full object-cover'}/>
                </div>
                <div className={'w-1/2 flex flex-wrap gap-6 items-center'}>

                </div>
            </div>
        </div>
    )
}
export default SpecialSale