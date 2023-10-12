import { call, put, takeLatest, select } from 'redux-saga/effects';
import { SEARCH_START, searchSuccess, searchFail } from '../actions/searchActions';
import githubApi from '../../api/githubApi';
import { CLEAR_CACHE_START, clearCacheSuccess, clearCacheFail } from '../actions/searchActions';


// Storing previously fetched data for caching
const cache = {};

function* fetchSearchResults(action) {
    const { term, entityType } = action.payload;

    if (term.length >= 3) {
        const cacheKey = `${term}-${entityType}`;
        if (cache[cacheKey]) {
            yield put(searchSuccess(cache[cacheKey]));
        } else {
            try {
                const data = yield call(githubApi.search, term, entityType);
                cache[cacheKey] = data;
                yield put(searchSuccess(data));
            } catch (error) {
                yield put(searchFail(error.message));
            }
        }
    }
}

function* clearCacheSaga() {
    try {
        yield call(githubApi.clearCache);
        yield put(clearCacheSuccess());
    } catch (error) {
        yield put(clearCacheFail(error.message));
    }
}

export default function* watchSearch() {
    yield takeLatest(SEARCH_START, fetchSearchResults);
    yield takeLatest(CLEAR_CACHE_START, clearCacheSaga); 
}





