// initialState
const initialState = {
    cartData :[],
    bookMarkedBooks:[]
}

//reducer

const cartReducer = (state,action) =>{
    switch(action.type){
        case "ADD_TO_CART":
            return {
                ...state,
                cartData :[...state.cartData,action.payload],
            }
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cartData :state.cartData.filter(x => x.id !== action.payload.id)
            }
        case "TOGGLE_BOOKMARK":{
            const bookIndex = state.bookMarkedBooks.findIndex(book => book.id === action.payload.id);
            if(bookIndex === -1){
                return{
                    ...state,
                    bookMarkedBooks: [...state.bookMarkedBooks,action.payload]
                }
            }else{
                const updatedBookMarkedBooks = [...state.bookMarkedBooks]
                updatedBookMarkedBooks.splice(bookIndex, 1);
                return{
                    ...state,
                    bookMarkedBooks: updatedBookMarkedBooks
                }
            }
        }
        default : 
            return state;
    }
}

// export 

export{
    initialState,
    cartReducer
}