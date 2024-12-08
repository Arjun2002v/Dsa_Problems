//creating the slice for the Application


import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({  
    name: "cart", 
    intialItems :{
        items:[]
        
    }
    reducer :{  //reducer() which contains all the function for the app to run 
        addItems:(state,action)=>{
            state.push(action.payload)

        },
        removeItem:(state,action)=>{
            state.pop(action.payload)
        }

    }


})
export const  {addItems,removeItem} = cartSlice.action
export default cartSlice.reducer;


//useSelector() from the redux which is used to subscribe(read the data) from the Slice

const cartItem = useSelector((store)=>store.cart.items)


//Dispatch an action when clicked

const dispatch = useDispatch(); 
const handleAdd = () =>{
    dispatch(addItems());
}

<button onClick={handleAdd}>Add</button>