import { getCategoryById } from "@/api/getCategoryById"
import { Typography } from "@material-tailwind/react"
import { useQuery } from "@tanstack/react-query"

const TableRowSubcategory = ({id} : {id : string}) => {
    const {data} = useQuery({
        queryKey : ['category' , id],
        queryFn : () => getCategoryById(id)
    })
    return (
        
            <Typography
                placeholder={''}
                variant="small"
                color="blue-gray"
                className="font-normal"
            >
                {data?.data.data.category.name}
            </Typography>
        
    )
}
export default TableRowSubcategory