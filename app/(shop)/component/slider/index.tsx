"use client"
import {Swiper, SwiperSlide} from "swiper/react";
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
const Slider = ({img} : {img : string[]}) =>{

    return(
        <Swiper
            spaceBetween={50}
            pagination={{
                clickable : true,

            }}

            modules={[Pagination]}
            navigation={true}
        >
            {
                img.map(item => (
                    <SwiperSlide className={'!w-full !flex !justify-center'} key={item}>

                        <img src={'http://127.0.0.1:8000/images/products/images/' + item} alt=""
                             className={'size-80 object-cover rounded-lg'}/>

                    </SwiperSlide>
                ))
            }
            <div className={'w-full flex items-center justify-around'}>

            </div>
        </Swiper>
    )
}
export default Slider