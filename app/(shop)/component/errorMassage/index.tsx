const ErrorMassage = ({errorMassage} : {errorMassage : string}) =>{
    return(
        <p className={'text-red-custom font-medium text-sm'}>
            *
            {
                errorMassage
            }
        </p>
    )
}
export default ErrorMassage