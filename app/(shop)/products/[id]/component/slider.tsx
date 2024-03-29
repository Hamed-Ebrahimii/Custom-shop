"use client"
import {useQuery} from "@tanstack/react-query";
import {getAllProduct} from "@/api/getAllProduct";
import {Swiper, SwiperSlide} from "swiper/react";
import CartProduct from "@/app/(shop)/component/cart-product";

const SliderProduct = ({category} : {category : string}) =>{
    const {data} = useQuery({
        queryKey : ['product'],
        queryFn : () => getAllProduct('1' , '' , '8' , category)
    })
    return(
        <div className={'w-full mt-8 '}>
            <p className={'text-xl font-bold text-red-custom'}>
                محصولات مرتبط
            </p>
            <hr className={'my-6'}/>
            <Swiper slidesPerView={2}
                    breakpoints={
                        {
                            720 : {
                                slidesPerView : 4
                            }
                        }
                    }
            spaceBetween={10}
            >
                {
                    data?.data.data.products.map(item =>(
                        <SwiperSlide key={item._id}>
                            <CartProduct product={item}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}
export default SliderProduct