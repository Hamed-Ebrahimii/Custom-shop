import Box from "@/app/(admin)/admin/component/box";
import {FaUserGroup} from "react-icons/fa6";
import LineChart from "@/app/(admin)/admin/component/chart";
import {FcSalesPerformance} from "react-icons/fc";
import {FaEuroSign} from "react-icons/fa";
import {LuBox} from "react-icons/lu";
import {BiSolidHappyHeartEyes} from "react-icons/bi";

const admin = () => {
    return(
        <div className={'w-10/12 mx-auto bg-white border rounded-lg p-8'}>
            <div className={'w-full space-y-2'}>
                <p className={'text-xl text-red-custom font-medium'}>
                    آمار سایت
                </p>
                <div className={'w-full flex justify-around'}>
                    <Box icon={<FaUserGroup className={'text-white'}/>} title={"تعداد کاربران"} value={'1K'} progressValue={20}/>
                    <Box icon={<FaEuroSign className={'text-white'} />} title={"میزان فروش"} value={'1K'} progressValue={20}/>
                    <Box icon={<LuBox className={'text-white'}/>} title={"تعداد محصولات"} value={'1K'} progressValue={20}/>
                    <Box icon={<BiSolidHappyHeartEyes className={'text-white'}/>} title={"میزان رضایت مشتری"} value={'90%'} progressValue={90}/>
                </div>
            </div>
            <LineChart/>
        </div>
    )
}
export default admin