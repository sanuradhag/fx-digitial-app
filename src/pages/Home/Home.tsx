import React, { useCallback, useEffect, useState } from 'react';

import { api } from '../../api';
import ItemList from '../../components/ItemList/ItemList';
import Search from '../../components/Search/Search';
import { BASE_URL } from '../../constants';
import { Elephant } from '../../interfaces/Elephant';

import './Home.scss';

export const Home = () => {
    const [elephantList, setElephantList] = useState<Elephant[]>([]);
    const [displayElephantList, setDisplayElephantList] = useState<Elephant[]>([]);
    const [queryText, setQueryText] = useState<string>('');

    const getElephantList = useCallback(async () => {
        try {
            const response = await api.get<Elephant[]>(`${BASE_URL}`);
            const data = response.slice(20, 30);
            setElephantList(data);
            setDisplayElephantList(data);
        } catch (e) {
            console.log('An error occurred while fetching the book list', e);
        }
    }, [queryText]);

    const filterData = (): void => {
        if (!queryText) {
            setDisplayElephantList(elephantList);
        } else {
            setDisplayElephantList(
                elephantList.filter((item) =>
                    item.name.toLocaleLowerCase().includes(queryText)
                )
            );
        }
    };

    useEffect(() => {
        getElephantList();
        return () => {
            setElephantList([]);
        };
    }, []);

    useEffect(() => {
        filterData();
    }, [queryText]);

    return (
        <div className="home-page-wrapper">
            <div className="home-header-wrapper">
                <h1>The Elephants</h1>
                <Search onSearch={(searchQuery) => setQueryText(searchQuery)} />
            </div>

            <div>
                <ItemList items={displayElephantList} />
            </div>
        </div>
    );
};

export default Home;
