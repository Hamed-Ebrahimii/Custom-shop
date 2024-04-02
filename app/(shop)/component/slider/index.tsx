"use client"
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import {IoIosArrowBack} from "react-icons/io";
const Slider = ({img} : {img : string[]}) =>{
    return(
        <div className={'w-full flex flex-col md:flex-row-reverse gap-4 '}>

            <Swiper
                className={'relative'}
                spaceBetween={50}
                pagination={{
                    clickable: true,
                    el: '.pagination',
                    renderBullet: (index: number, className) => {
                        return `
                            <div class="size-10 rounded-lg overflow-hidden my-5 cursor-pointer ${className}">
                                <img src="${'http://127.0.0.1:8000/images/products/images/' + img[index]}" class="w-full h-full object-cover"/>
                            </div>
                        `
                    },
                }}
                modules={[Pagination , Navigation]}
                navigation={{
                    enabled : true,
                    nextEl : '.next',
                    prevEl : '.prev'

                }}
            >
                {
                    img.map(item => (
                        <SwiperSlide className={'!w-full !flex !justify-center'} key={item}>

                            <img src={'http://127.0.0.1:8000/images/products/images/' + item} alt=""
                                 className={'size-80 object-cover rounded-lg'}/>

                        </SwiperSlide>

                    ))

                }
                <button

                    className={'absolute left-20 z-50 top-1/2 bg-blue-gray-400/40 size-8 flex items-center justify-center rounded-full cursor-pointer next'}>
                    <IoIosArrowBack className={'text-3xl'}/>
                </button>
                <button

                    className={'absolute right-20 z-50 rotate-180 top-1/2 bg-blue-gray-400/40 size-8 flex items-center justify-center rounded-full cursor-pointer prev'}>
                    <IoIosArrowBack className={'text-3xl'}/>
                </button>
            </Swiper>
            <div className={'pagination '}>

            </div>
        </div>
    )
}
export default Slider