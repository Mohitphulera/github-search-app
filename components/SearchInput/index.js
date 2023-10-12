import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { startSearch, clearSearch } from '../../store/actions/searchActions';
import { debounce } from 'lodash';

function SearchInput() {
    const [input, setInput] = useState('');
    const [entityType, setEntityType] = useState('users');
    const dispatch = useDispatch();

    const handleSearch = useCallback(
        debounce((term, type) => {
            if (term.length >= 3) {
                dispatch(startSearch(term, type));
            } else {
                dispatch(clearSearch());
            }
        }, 300),
        [dispatch]
    );

    const handleChange = (event) => {
        setInput(event.target.value);
        handleSearch(event.target.value, entityType);
    };

    const handleEntityTypeChange = (event) => {
        setEntityType(event.target.value);
        handleSearch(input, event.target.value);
    };

    return (
        <div className="search-section">
            <input className="search-input" value={input} onChange={handleChange} placeholder="Start typing to search..." />
            <select className="dropdown" value={entityType} onChange={handleEntityTypeChange}>
                <option value="users">Users</option>
                <option value="repositories">Repositories</option>
            </select>
        </div>
    );
}

export default SearchInput;
