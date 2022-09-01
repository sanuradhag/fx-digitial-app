import React, { useEffect, useState } from 'react';

import { useDebounce } from '../../hooks/useDebounce';
import { SearchProps } from '../../interfaces/SearchProps';

import './Search.scss';

const Search = (props: SearchProps) => {
    const {onSearch} = props;
    const [searchText, setSearchText] = useState<string>('');
    const debouncedSearchTerm: string = useDebounce<string>(searchText, 1200); // add a debounce to wait for 1220 milliseconds

    useEffect(() => {
        onSearch(searchText);
    }, [debouncedSearchTerm]);

    return (<div className='search-wrapper'>
        <input
            className="search-input"
            value={searchText}
            placeholder="Filter by name"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value.toLowerCase())}
        />
    </div>);
};

export default Search;