import Pen from "@/component/nav/icon/pen";
import Link from "next/link";

const Navigation = () =>{
    return(
        <div className={'container mx-auto hidden md:flex justify-between items-center py-8 '}>
            <button className={'py-3 px-5 flex gap-1 items-center bg-red-custom text-white font-medium rounded-lg'}>
                <Pen/>
                خودت طراحیش کن !
            </button>
            <Link href={''} className={'font-medium text-gray-800'}>پوشاک</Link>
            <Link href={''} className={'font-medium text-gray-800'}>لوازم خانه</Link>
            <Link href={''} className={'font-medium text-gray-800'}>قاب موبایل</Link>
            <Link href={''} className={'font-medium text-gray-800'}>اکسسوری</Link>
            <Link href={''} className={'font-medium text-gray-800'}>مدرسه و اداره</Link>
            <Link href={''} className={'font-medium text-gray-800'}>کارت و پوستر</Link>
            <Link href={''} className={'font-medium text-gray-800'}>جشن و مهمانی</Link>
        </div>
    )
}
export default Navigation