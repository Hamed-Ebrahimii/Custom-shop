"use client"
import Star from "@/component/categorization/icon/star";
import CategorizationItem from "@/component/categorization/component/categorizationItem";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import 'swiper/css';
import {Pagination} from "swiper/modules";
const Categorization = () =>{
    const swiper = useSwiper()
    return(
        <div className={'w-full mt-10'}>
            <div className={'w-full flex gap-1 items-center'}>
                <Star className={'size-10 hidden md:block'}/>
                <p className={'text-xl font-bold whitespace-nowrap flex-grow md:flex-grow-0'}>دسته بندی محصولات</p>
                <hr className={'w-10/12 h-3 self-end hidden md:block'}/>
                <div className={'flex items-center gap-1 md:hidden'}>
                    <button onClick={()=> swiper.slidePrev()}>
                        <IoIosArrowForward className={'text-red-custom text-lg'} />
                    </button>
                    <button onClick={()=> swiper.slideNext()}>
                        <IoIosArrowBack className={'text-red-custom text-lg'} />
                    </button>
                </div>
            </div>
            <div className={'w-full md:flex gap-6 mt-6 items-center justify-center mb-10 hidden'}>
                <CategorizationItem image={'../../img/cover mobile.png'} name={'قاب موبایل'}/>
                <CategorizationItem image={'../../img/cart.png'} name={'کارت تبریک'}/>
                <CategorizationItem image={'../../img/accessory.png'} name={'اکسسوری'}/>
                <CategorizationItem image={'../../img/stationery.png'} name={'لوازم تحریر'}/>
                <CategorizationItem image={'../../img/Dress.png'} name={'لباس'}/>
                <CategorizationItem image={'../../img/Home decor.png'} name={'دکور خانه'}/>
            </div>
           <div className={'md:hidden'}>
               <Swiper
                   modules={[Pagination]}
                   spaceBetween={50}
                   slidesPerView={3}
                   onSlideChange={() => console.log('slide change')}
                   onSwiper={(swiper) => console.log(swiper)}
               >
                   <SwiperSlide>
                       <CategorizationItem image={'../../img/cover mobile.png'} name={'قاب موبایل'}/></SwiperSlide>
                   <SwiperSlide>
                       <CategorizationItem image={'../../img/cart.png'} name={'کارت تبریک'}/>
                   </SwiperSlide>
                   <SwiperSlide>
                       <CategorizationItem image={'../../img/accessory.png'} name={'اکسسوری'}/>
                   </SwiperSlide>
                   <SwiperSlide>
                       <CategorizationItem image={'../../img/stationery.png'} name={'لوازم تحریر'}/>
                   </SwiperSlide>
                   <SwiperSlide>
                       <CategorizationItem image={'../../img/Dress.png'} name={'لباس'}/>
                   </SwiperSlide>
                   <SwiperSlide>
                       <CategorizationItem image={'../../img/Home decor.png'} name={'دکور خانه'}/>
                   </SwiperSlide>
               </Swiper>
           </div>
        </div>
    )
}
export default Categorization