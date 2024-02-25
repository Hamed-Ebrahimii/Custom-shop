import Logo from "@/component/layout/header/icon/logo";
import Search from "@/component/layout/header/icon/search";
import Login from "@/component/layout/header/icon/login";
import Cart from "@/component/layout/header/icon/cart";
import LogoMobile from "@/component/layout/header/icon/logo-mobile";
import {CiMenuBurger} from "react-icons/ci";

const Header = () => {
    return(
        <div className={'font-yekan'}>
            <div className={'w-full flex justify-center items-center py-2 bg-red-custom'}>
                <p className={'font-yekan text-lg text-white'}>
                    با عضویت در کاستومی، اولین سفارش خود را ” رایگان” تحویل بگیرید
                </p>
            </div>
            <header className={'w-full flex items-center justify-around py-6 border-b border-gray-200'}>
                <div className={'container mx-auto flex justify-around items-center'}>
                    <Logo className={'hidden md:block'}/>
                    <button className={'md:hidden'}>
                        <CiMenuBurger className={'text-lg'}/>
                    </button>
                    <form className={'w-3/4 md:w-4/12 border rounded-xl overflow-hidden px-6 flex items-center justify-between py-1'}>
                        <input type="text" className={'border-0 outline-none placeholder:text-red-custom placeholder:font-yekan text-black font-light font-estedad placeholder:font-light'} placeholder={'جستجو'}/>
                        <button>
                            <Search className={'size-5'}/>
                        </button>
                    </form>
                    <div className={'items-center hidden md:flex'}>
                        <button className={'w-36 flex items-center gap-2'}>
                            <Login/>
                            <p className={'font-yekan text-gray-700 text-lg font-bold'}>ورود | ثبت نام</p>
                        </button>
                        <button className={'w-32 flex items-start gap-2 justify-center'}>
                            <Cart/>
                            <p className={'font-yekan text-gray-700 text-lg font-bold'}>سبد خرید</p>
                        </button>
                    </div>
                    <LogoMobile className={'md:hidden'}/>
                </div>
            </header>
        </div>
    )
}
export default Header