const ModalDelete = ({openModal  , deleteFn} : {openModal : (value : boolean)=> void , deleteFn : ()=> void}) =>{
    return(
        <div className={'bg-white w-1/2 px-5 py-8 rounded-lg space-y-4'}>
            <p className={'text-center text-xl text-gray-400 font-medium '}>
                 آیا میخواهید این محصول رو از سبد خریدتان حذف کنید؟
            </p>
            <div className={'flex items-center justify-center gap-4'}>
                <button onClick={deleteFn} className={'bg-red-600 px-4 py-2 text-white rounded-lg'}>
                    حذف !
                </button>
                <button onClick={()=> openModal(false)} className={'bg-green-400 px-4 py-2 text-white rounded-lg'}>
                    بازگشت
                </button>
            </div>
        </div>
    )
}
export default ModalDelete