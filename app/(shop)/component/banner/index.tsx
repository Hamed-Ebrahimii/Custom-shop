import BtnRedOutline from "@/component/btn/btn-red-outlin";

const Banner = () =>{
    return(
        <div className={'w-full flex flex-col md:flex-row items-center justify-between gap-3 mt-6'}>
            <div className={'w-full md:w-1/2 bg-pink-light flex items-center rounded-xl'}>
                <div className={'flex-1 w-1/2 p-6 flex flex-col'}>
                    <p className={'text-lg md:text-2xl font-bold w-11/12 justify-around'}>محصولات مناسب هدیه دادن به آقایان</p>
                    <div className={'w-2/3 md:w-1/2'}>
                        <BtnRedOutline className={'py-3 px-6 rounded-lg text-sm whitespace-nowrap'}>
                            دیدن محصولات
                        </BtnRedOutline>
                    </div>
                </div>
                <img src="/img/gift%20boy.jpg" alt="" className={'object-cover w-[135px] h-[161px] md:w-[288px] md:h-[180px] rounded-xl'}/>
            </div>
            <div className={'w-full md:w-1/2 bg-pink-light flex items-center rounded-xl'}>
                <div className={'flex-1 w-1/2 p-6 flex flex-col'}>
                    <p className={'text-lg md:text-2xl font-bold w-11/12 justify-around'}>محصولات مناسب هدیه دادن به بانوان</p>
                    <div className={'w-2/3 md:w-1/2'}>
                        <BtnRedOutline className={'py-3 px-6 rounded-lg text-sm whitespace-nowrap'}>
                            دیدن محصولات
                        </BtnRedOutline>
                    </div>
                </div>
                <img src="/img/gift%20girl.jpg" alt="" className={'object-cover w-[135px] h-[161px] md:w-[288px] md:h-[180px] rounded-xl'}/>
            </div>
        </div>
    )
}
export default Banner