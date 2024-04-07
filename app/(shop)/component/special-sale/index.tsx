import {TbDiscount2} from "react-icons/tb";
import Offer from "@/app/(shop)/component/special-sale/icon/offer";
const SpecialSale = () =>{
    return(
        <div className={'w-full mt-10'}>
            <div className={'w-full flex items-end  gap-6 h-10'}>
                <div className={'flex gap-2 items-center'}>
                    <TbDiscount2 className={'size-10 hidden md:block'}/>
                    <p className={'text-xl font-bold whitespace-nowrap'}>فروش ویژه</p>
                </div>
                <hr className={'w-10/12 h-3 my-auto mt-6 hidden md:block'}/>
            </div>
            <div className={'mt-6 w-full flex flex-col md:flex-row items-center justify-center gap-6 '}>
                <div className={'w-full h-[120px] md:w-[600px] md:h-[576px] overflow-hidden rounded-xl relative'}>
                    <img src={'/img/spacejoy-IH7wPsjwomc-unsplash.jpg'} alt={''}  className={'w-full h-full object-cover'}/>
                    <div className={'w-full h-full absolute top-0 bg-gradient-to-t from-black '}>
                        <p className={'text-pink-200 absolute bottom-2 right-2 text-lg md:text-2xl'}>
                            لوازم خانه
                        </p>
                        <Offer className={'absolute top-0 left-2 md:w-14 md:h-24'}/>
                    </div>
                </div>
                <div className={'w-full md:w-1/2 grid grid-cols-2 grid-rows-2 gap-3 md:gap-6 md:gap-y-6 justify-center  items-start '}>
                    <div
                        className={'w-full h-[84px] md:w-full md:h-[278px] overflow-hidden rounded-xl relative'}>
                        <img src={'/img/school.jpg'} alt={''}
                             className={'w-full h-full object-cover'}/>
                        <div className={'w-full h-full absolute top-0 bg-gradient-to-t from-black '}>
                            <p className={'text-pink-200 absolute bottom-2 text-center right-3 text-sm md:text-2xl'}>
                                لوازم مدرسه
                            </p>
                            <Offer className={'absolute top-0 left-2 w-5 h-8  md:w-14 md:h-24'}/>
                        </div>
                    </div>
                    <div
                        className={'w-full h-[84px] md:w-full md:h-[278px] overflow-hidden rounded-xl relative'}>
                        <img src={'/img/shoes.jpg'} alt={''}
                             className={'w-full h-full object-cover'}/>
                        <div className={'w-full h-full absolute top-0 bg-gradient-to-t from-black '}>
                            <p className={'text-pink-200 absolute bottom-2 text-center right-3 text-sm md:text-2xl'}>
                               پوشاک
                            </p>
                            <Offer className={'absolute top-0 left-2 w-5 h-8  md:w-14 md:h-24'}/>
                        </div>
                    </div>
                    <div
                        className={'w-full h-[84px] md:w-full md:h-[278px] overflow-hidden rounded-xl relative'}>
                        <img src={'/img/digital.jpg'} alt={''}
                             className={'w-full h-full object-cover'}/>
                        <div className={'w-full h-full absolute top-0 bg-gradient-to-t from-black '}>
                            <p className={'text-pink-200 absolute bottom-2 text-center right-3 text-sm md:text-2xl'}>
                               دیجیتال
                            </p>
                            <Offer className={'absolute top-0 left-2 w-5 h-8  md:w-14 md:h-24'}/>
                        </div>
                    </div>
                    <div
                        className={'w-full h-[84px] md:w-full md:h-[278px] overflow-hidden rounded-xl relative'}>
                        <img src={'/img/stiker.jpg'} alt={''}
                             className={'w-full h-full object-cover'}/>
                        <div className={'w-full h-full absolute top-0 bg-gradient-to-t from-black '}>
                            <p className={'text-pink-200 absolute bottom-2 text-center right-3 text-sm md:text-2xl'}>
                                استیکر
                            </p>
                            <Offer className={'absolute top-0 left-2 w-5 h-8 md:w-14 md:h-24'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SpecialSale