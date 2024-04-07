"use client"
import Logo from "@/component/layout/header/icon/logo";
import Search from "@/component/layout/header/icon/search";
import Login from "@/component/layout/header/icon/login";
import Cart from "@/component/layout/header/icon/cart";
import LogoMobile from "@/component/layout/header/icon/logo-mobile";
import {CiMenuBurger} from "react-icons/ci";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "@/api/getAllCategories";
import {useEffect, useState} from "react";
import NavMobile from "./component/navMobile";
import Link from "next/link";
import {Badge} from "@material-tailwind/react";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {getItemCookie} from "@/utils/tools/getItemCookie";
import {FaRegUserCircle} from "react-icons/fa";

const Header = () => {
    const router = useRouter()
    const {data} = useQuery({
        queryKey : ['categoris'],
        queryFn : () => getAllCategories()
    })
    const order = useSelector((data : RootState)=> data.order)
    const [navMobile , setNaveMobile] = useState(false)
    const [token , setToken] = useState('')
    const handleCookie = async () =>{
        const getToken  = await getItemCookie('token')
        setToken(getToken?.value || '')
    }
    useEffect(()=>{
        handleCookie()
    } , [])
    return(
        <div className={'font-yekan'}>
            <div className={'w-full flex justify-center items-center py-2 bg-red-custom'}>
                <p className={'font-yekan text-sm md:text-lg text-white'}>
                    با عضویت در کاستومی، اولین سفارش خود را ” رایگان” تحویل بگیرید
                </p>
            </div>
            <header className={'w-full flex items-center justify-around py-6 border-b border-gray-200'}>
                <div className={'container mx-auto flex justify-around items-center'}>
                    <Logo onClick={()=> router.push('/')} className={'hidden md:block cursor-pointer'}/>
                    <button className={'md:hidden'} onClick={()=> setNaveMobile(true)}>
                        <CiMenuBurger className={'text-lg'}/>
                    </button>
                    <form className={'w-3/4 md:w-4/12 border rounded-xl overflow-hidden px-6 flex items-center justify-between py-1'}>
                        <input type="text" className={'border-0 outline-none placeholder:text-red-custom placeholder:font-yekan text-black font-light font-estedad placeholder:font-light'} placeholder={'جستجو'}/>
                        <button>
                            <Search className={'size-5'}/>
                        </button>
                    </form>
                    <div className={'items-center hidden md:flex'}>
                        <Link href={token ? '/users-profile' : '/login'} className={'w-36 flex justify-center items-center gap-2'}>
                            {
                                token ? <FaRegUserCircle className={'size-8 text-gray-700'} /> : <>
                                    <Login/>
                                    <p className={'font-yekan text-gray-700 text-lg font-bold'}>ورود |‌ثبت نام</p>
                                </>
                            }
                        </Link>
                        <Badge content={String(order.products.length)}>
                            <Link href={'/order'} className={'w-32 flex items-start gap-2 justify-center'}>
                                <Cart/>
                                <p className={'font-yekan text-gray-700 text-lg font-bold'}>سبد خرید</p>
                            </Link>
                        </Badge>
                    </div>
                    <LogoMobile className={'md:hidden'}/>
                </div>
            </header>
            {
                navMobile && <NavMobile setNaveMobile={setNaveMobile} category={data?.data.data || {categories : []}}/>
            }
        </div>
    )
}
export default Header