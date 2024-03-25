const Product = ({ params }: { params: { id: string } }) =>{
    
    return(
        <div className="w-full min-h-screen">
            {params.id}
        </div>
    )
}
export default Product