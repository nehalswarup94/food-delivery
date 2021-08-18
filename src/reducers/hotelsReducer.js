import types from '../actions/types';

export const initialState = {
    hotels:[],
}

const hotelsReducer = (state = initialState, action) => {
    switch(action.type){
        case types.GET_HOTELS:
            return{
                ...state,
                hotels: action.payload
            }
            break;
        default:
            return state;
    }
}

export default hotelsReducer;