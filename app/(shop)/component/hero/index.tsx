import Link from "next/link";
import Brush from "@/app/(shop)/component/hero/icon/brush";


const Hero = () =>{
    return(
        <div className={'w-full rounded-xl  md:px-16 py-9 flex flex-col-reverse md:flex-row items-center bg-hero bg-cover bg-pink-light'}>
            <div className={'w-full md:w-5/12 flex items-center justify-center'}>
                <div className={'w-full flex flex-col gap-4 items-center md:items-start'}>
                    <h2 className={'text-3xl font-bold text-gray-700'}>آنلاین شاپ کاستومی</h2>
                    <p className={'text-gray-700 font-semibold  md:text-xl px-4 md:p-0 md:space-y-4 w-full md:w-9/12 leading-10'}>آنلاین شاپ کاستومی
                        محصولات متنوعی داره و این امکان رو بهتون میده خودتون رنگ و طرح و نوشته ی روی محصولات رو انتخاب
                        کنید </p>
                    <div className={'w-full flex items-center justify-between gap-2 md:gap-6 px-6 md:p-0 md:justify-center'}>
                        <button className={'bg-red-custom py-2 px-3 md:py-3 md:px-12 rounded-lg'}>
                            <Link href={''} className={'flex items-center gap-2 text-white font-medium'}>
                                <Brush/>
                                شروع طراحی
                            </Link>
                        </button>
                        <button className={'border border-red-custom py-2 px-3 md:py-3 md:px-12 rounded-lg'}>
                            <Link href={''} className={'flex items-center gap-2 text-red-custom font-medium'}>

                                دیدن محصولات
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className={'w-full md:w-1/2 flex items-center justify-start'}>
                <img src="/img/Frame%2026088029.png" alt=""/>
            </div>
        </div>
    )
}
export default Hero