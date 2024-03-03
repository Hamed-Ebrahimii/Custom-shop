import BtnRedOutline from "@/component/btn/btn-red-outlin";

const Banner = () =>{
    return(
        <div className={'w-full flex items-center justify-between gap-3 mt-6'}>
            <div className={'w-1/2 bg-pink-light flex items-center rounded-xl'}>
                <div className={'flex-1 w-1/2 p-6 flex flex-col'}>
                    <p className={'text-2xl font-bold w-11/12 justify-around'}>محصولات مناسب هدیه دادن به آقایان</p>
                    <div className={'w-1/2'}>
                        <BtnRedOutline className={'py-3 px-6 rounded-lg text-sm whitespace-nowrap'}>
                            دیدن محصولات
                        </BtnRedOutline>
                    </div>
                </div>
                <img src="/img/gift%20boy.jpg" alt="" className={'object-cover w-[288px] h-[180px] rounded-xl'}/>
            </div>
            <div className={'w-1/2 bg-pink-light flex items-center rounded-xl'}>
                <div className={'flex-1 w-1/2 p-6 flex flex-col'}>
                    <p className={'text-2xl font-bold w-11/12 justify-around'}>محصولات مناسب هدیه دادن به بانوان</p>
                    <div className={'w-1/2'}>
                        <BtnRedOutline className={'py-3 px-6 rounded-lg text-sm whitespace-nowrap'}>
                            دیدن محصولات
                        </BtnRedOutline>
                    </div>
                </div>
                <img src="/img/gift%20girl.jpg" alt="" className={'object-cover w-[288px] h-[180px] rounded-xl'}/>
            </div>
        </div>
    )
}
export default Banner