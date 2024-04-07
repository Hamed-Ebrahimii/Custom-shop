import Image from "next/image";
import FormLogin from "@/app/(shop)/login/component/formLogin";

const  CustomDesign = async () =>{
    return(
        <div className={'w-full min-h-screen flex gap-36'}>
            <div className={'w-1/2 flex items-center flex-col justify-center gap-20 '}>
                <h2 className={'text-2xl font-bold'}>
                    به کاستومی خوش آمدید
                </h2>
                <FormLogin/>
            </div>
            <div className={'w-1/2 flex items-center justify-start'}>
                    <img src={'/img/login-photo.png'} width={500} height={489}  alt={''}/>
            </div>
        </div>
    )
}
export default CustomDesign