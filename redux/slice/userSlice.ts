import {AddUser} from "@/utils/types/global";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState : AddUser = {
    address : '',
    firstname : '',
    role : '',
    lastname : '',
    phoneNumber : '',
    username : '',
    password : ''
}
const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        addUser : (state , action : PayloadAction<AddUser>) =>{
                state.username = action.payload.username
                state.address = action.payload.address
                state.firstname = action.payload.firstname
                state.lastname = action.payload.lastname
                state.phoneNumber = action.payload.phoneNumber
                state.role = action.payload.role
                state.password = action.payload.password
        }
    }
})
export const {addUser} = userSlice.actions
export default userSlice.reducer