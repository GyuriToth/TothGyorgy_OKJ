export const initialState = {
    basket: [],
    loggedinuser: null
};

const reducer = (state, action) => {
    switch(action.type){
        default:
            return {
                ...state
            }
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'SET_LOGIN':
            return {
                ...state,
                loggedinuser: action.user
            }
        case 'REMOVE_FROM_CART':
            let newcart = [...state.basket]
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
            if (index >= 0 ){
                newcart.splice(index,1)
            }
            else {
                console.log("There were errors... :/")
            }
            return {...state, basket: newcart}

        case 'INCREASE_QUANTITY':
            let plusCart=[...state.basket]
            const plusIndex=state.basket.findIndex(item=>item.id===action.id)
            plusCart.splice(plusIndex,1)
            plusCart.push(action.item)
            return{...state, basket:plusCart }

        case 'DECREASE_QUANTITY':
            let minusCart=[...state.basket]
            const minusIndex=state.basket.findIndex(item=>item.id===action.id)
            if(action.item.quantity>0){
                 minusCart.splice(minusIndex,1)
                 minusCart.push(action.item)
            }
            return{...state, basket:minusCart }

        case 'MODIFY_QUANTITY':
            let mCart=[...state.basket]
            mCart.forEach(e=>{
                if(e.id===action.id)
                    e.quantity=action.qty+1
            })
            return{...state, basket: mCart }
    }
}

export default reducer;