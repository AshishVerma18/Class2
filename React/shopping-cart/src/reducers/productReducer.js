import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCT_BY_PRICE } from "../actions/action";

const productReducer=(state={},action)=>{
    switch(action.type){
        case FETCH_PRODUCTS:
            return{
            
                items:action.payload,
                filteredItems:action.payload,
            };
        case FILTER_PRODUCTS_BY_SIZE:
            return{
                ...state,
                size:action.payload.size,
                filteredItems:action.payload.items,
            }
            case ORDER_PRODUCT_BY_PRICE:
                return{
                    ...state,
                    sort:action.payload.size.sort,
                    filteredItems:action.payload.items,
                }
            default:
                return state;
    }
}
export default productReducer;