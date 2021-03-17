export const initialState = {
    basket: [],
    loggedinuser: null
};

const reducer = (state, action) => {
    switch(action.type){
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
            let increasedBasket = [...state.basket]
            increasedBasket.forEach(e => {
                if (e.id == action.id){
                    e.quantity=action.qty+1
                }
            });

            return {
                ...state, basket: increasedBasket
            }

        case 'DECREASE_QUANTITY':
            let decreasedBasket = [...state.basket]
            decreasedBasket.forEach(e => {
                if (e.id == action.id){
                    e.quantity=action.qty-1
                }
            });

            return {
                ...state, basket: decreasedBasket
            }
    }
}

export default reducer;