export const SEARCH_START = "SEARCH_START";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAIL = "SEARCH_FAIL";
export const CLEAR_SEARCH = "CLEAR_SEARCH";

export const CLEAR_CACHE_START = 'CLEAR_CACHE_START';
export const CLEAR_CACHE_SUCCESS = 'CLEAR_CACHE_SUCCESS';
export const CLEAR_CACHE_FAIL = 'CLEAR_CACHE_FAIL';


export const startSearch = (term, entityType) => ({
    type: SEARCH_START,
    payload: { term, entityType }
});

export const searchSuccess = results => ({
    type: SEARCH_SUCCESS,
    payload: results
});

export const searchFail = error => ({
    type: SEARCH_FAIL,
    payload: error
});

export const clearSearch = () => ({
    type: CLEAR_SEARCH
});



export const clearCacheStart = () => ({
    type: CLEAR_CACHE_START
});

export const clearCacheSuccess = () => ({
    type: CLEAR_CACHE_SUCCESS
});

export const clearCacheFail = (error) => ({
    type: CLEAR_CACHE_FAIL,
    payload: error
});
