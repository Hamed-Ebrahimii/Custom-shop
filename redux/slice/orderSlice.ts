import {AddOrder} from "@/utils/types/global";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState : AddOrder = {
    user : '',
    products : [],

    deliveryStatus : false
}
const orderSlice = createSlice({
    name : 'order',
    initialState,
    reducers : {
        addOrder : (state , action : PayloadAction<AddOrder>) =>{
            state.user = action.payload.user
            state.deliveryStatus = action.payload.deliveryStatus
            state.products = action.payload.products
        }
    }

})
export const addOrder =  orderSlice.actions.addOrder
export default orderSlice.reducer