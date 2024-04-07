import {IoMdCloseCircleOutline} from "react-icons/io";
import {useState} from "react";
import BtnRedOutlin from "@/component/btn/btn-red-outlin";
import {useDispatch, useSelector} from "react-redux";
import {AddUser} from "@/utils/types/global";
import {addUser} from "@/redux/slice/userSlice";
import {useRouter} from "next/navigation";
import {RootState} from "@/redux/store";

const ModalRole = ({openModal} : {openModal : (value : boolean)=> void}) =>{
    const [role , setRole] = useState<"customer" | "seller" | "">("")
    const user = useSelector((data : RootState) => data.user )
    const dispatch = useDispatch()
    const router = useRouter()
    const handleRole = () =>{

        dispatch(addUser({...user , role : role.toUpperCase()}))
        router.push('/user-signup')
    }
    return(
        <div className={'w-8/12 z-20 px-10 py-8 bg-white rounded-lg'}>
                <div className={'w-full'}>
                    <button onClick={() => openModal(false)}>
                        <IoMdCloseCircleOutline className={'size-5'}/>
                    </button>
                    <div className={'flex items-center justify-center'}>
                        <p className={'text-lg font-medium'}>برای ثبت نام در کاستومی، نقش خود را در همکاری با ما مشخص کنید.</p>
                    </div>
                    <div className={'mt-5 flex justify-center items-center gap-6'}>
                        <div className={'w-1/2 flex flex-col items-center justify-center border p-6 rounded-xl'}>
                            <img src="/img/Customer.png" alt="" className={`object-cover ${ role === "customer" ? "" : "grayscale"}`}/>
                            <div className={'flex items-center justify-center gap-2'}>
                                <label htmlFor={'customer'}>مشتری هستم</label>
                                <input type="radio" checked={role === "customer"} onClick={()=> setRole("customer")} id={'customer'}/>
                            </div>
                        </div>
                        <div className={'w-1/2 flex flex-col items-center justify-center border p-6 rounded-xl'}>
                            <img src="/img/Designer.png" alt="" className={`object-cover ${ role === "seller" ? "" : "grayscale"}`}/>
                            <div className={'flex items-center justify-center gap-2'}>
                                <label htmlFor={'seller'}>فروشنده هستم</label>
                                <input type="radio" checked={role === "seller"} onClick={()=> setRole("seller")} id={'seller'}/>
                            </div>
                        </div>
                    </div>
                    <div className={'w-full flex items-center justify-center mt-4'}>
                        <BtnRedOutlin  className={'w-1/6 disabled:opacity-50'} disable={role === "" && true} onClick={handleRole}>
                            شروع ثبت نام
                        </BtnRedOutlin>
                    </div>
                </div>
        </div>
    )
}
export default ModalRole