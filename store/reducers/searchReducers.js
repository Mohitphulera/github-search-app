import { SEARCH_START, SEARCH_SUCCESS, SEARCH_FAIL, CLEAR_SEARCH } from '../actions/searchActions';
import { CLEAR_CACHE_START, CLEAR_CACHE_SUCCESS, CLEAR_CACHE_FAIL } from '../actions/searchActions';

const initialState = {
    loading: false,
    data: [],
    clearingCache: false,
    error: null,
};

export default function searchReducer(state = initialState, action) {
    switch (action.type) {

        case SEARCH_START:
            return { ...state,
                 loading: true,
                 error : null };

        case SEARCH_SUCCESS:
            return { ...state, 
                loading: false, 
                data: action.payload,
                error : null };

        case SEARCH_FAIL:
            return { ...state, 
                loading: false, 
                data : [],  
                error: action.payload };

        case CLEAR_SEARCH:
            return { ...state,
                 data: [],
                 error: null };
        
        case CLEAR_CACHE_START:
            return {
                ...state,
                clearingCache: true,
            };

        case CLEAR_CACHE_SUCCESS:
            return {
                ...state,
                clearingCache: false,
            };

        case CLEAR_CACHE_FAIL:
            return {
                ...state,
                error: action.payload,
            };

        default:
            return state;
    }
}
