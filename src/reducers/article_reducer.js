  export default function(state={}, action){
    switch(action.type){
        case 'GET_LATEST_NEWS':
            return{...state, latest:action.payload}
        default:
            return state;
    }
}