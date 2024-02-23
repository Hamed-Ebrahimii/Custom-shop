import Instagram from "@/component/layout/footer/icon/instagram";
import Facebook from "@/component/layout/footer/icon/facebook";
import Pinterest from "@/component/layout/footer/icon/pinterest";
import YouTube from "@/component/layout/footer/icon/youtube";
import Link from "next/link";


const Footer = () =>{
    return(
        <div className={'w-full '}>
            <div className={'w-full bg-red-dark py-10 '}>
                <div className={'container mx-auto flex items-center justify-around'}>
                    <div className={'flex flex-col gap-1'}>
                        <p className={'text-white font-yekan font-normal'}>برای دریافت آخرین اخبار و تخفیف های جدید،ایمیل خود را وارد نمایید</p>
                        <div className={'flex items-center gap-3'}>
                            <input type="text" className={'py-2 px-2 border border-white rounded-xl placeholder:text-gray-300 bg-inherit w-full'} placeholder={'ایمیل شما'}/>
                            <button className={'text-white bg-red-custom px-7 py-2 rounded-lg'}>
                                ثبت
                            </button>
                        </div>
                    </div>
                    <div className={'flex flex-col justify-center items-center gap-6'}>
                        <p className={'text-white font-normal font-yekan'}>ما را در شبکه های اجتماعی دنبال کنید</p>
                        <div className={'flex gap-6 items-center'}>
                            <Instagram/>
                            <Facebook/>
                            <Pinterest/>
                            <YouTube/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'w-full bg-red-custom py-12'}>
                <div className={'container mx-auto flex items-center justify-around'}>
                    <div className={'flex items-center gap-40'}>
                        <div className={'flex flex-col gap-8'}>
                            <p className={'py-1 text-white font-bold border-b-2 border-white'}>همراه با کاستومی</p>
                            <p><Link href={''} className={'text-white'}>فروش محصولات</Link></p>
                            <p><Link href={''} className={'text-white'}>فرصت همکاری</Link></p>
                            <p><Link href={''} className={'text-white'}>تماس با ما </Link></p>
                            <p><Link href={''} className={'text-white'}>نقشه سایت</Link></p>
                        </div>
                        <div className={'flex flex-col gap-8'}>
                            <p className={'py-1 text-white font-bold border-b-2 border-white'}>خدمات مشتریان</p>
                            <p><Link href={''} className={'text-white'}>سوالات متداول</Link></p>
                            <p><Link href={''} className={'text-white'}>حریم خصوصی</Link></p>
                            <p><Link href={''} className={'text-white'}>ثبت شکایت</Link></p>
                            <p><Link href={''} className={'text-white'}>ضمانت نامه  محصولات</Link></p>
                        </div>
                        <div className={'flex flex-col gap-8'}>
                            <p className={'py-1 text-white font-bold border-b-2 border-white'}>راهنمای خرید</p>
                            <p><Link href={''} className={'text-white'}>راهنمای ثبت سفارش</Link></p>
                            <p><Link href={''} className={'text-white'}>شیوه های پرداخت</Link></p>
                            <p><Link href={''} className={'text-white'}>نحوه ارسال سفارش ها</Link></p>
                            <p><Link href={''} className={'text-white'}>شرایط بازگرداندن محصول</Link></p>
                        </div>
                    </div>
                    <div className={'flex flex-col items-center justify-center gap-10'}>
                        <p className={'text-white text-lg font-bold'}>فروشگاه اینترنتی کاستومی</p>
                        <div className={'flex items-center gap-8'}>
                            <p className={'text-white'}>تماس با پشتیبانی : ۳۴۵۶۰۰۰</p>
                            <p className={'text-white'}>پاسخگویی ۲۴ ساعته ، ۷ روز هفته </p>
                        </div>
                        <div className={'flex items-center gap-8'}>
                        <img src="../../../public/img/01.png" alt=""/>
                            <img src="/img/02.png" alt=""/>
                            <img src="/img/03 1.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Footer