import React, { useCallback, useEffect, useState } from 'react';

import { api } from '../api';
import ItemList from '../components/ItemList/ItemList';
import Search from '../components/Search/Search';
import { BASE_URL } from '../constants';
import { Elephant } from '../interfaces/Elephant';


export const Home = () => {

    const [elephantList, setElephantList] = useState<Elephant[]>([]);

    const getBookList = useCallback(async () => {
        try {
            const response = await api.get<Elephant[]>(`${BASE_URL}`);
            setElephantList(response.slice(20, 30));

        } catch (e) {
            console.log('An error occurred while fetching the book list', e);
        }
    }, []);
    
    useEffect(() => {
        getBookList();
    
        return () => {
            setElephantList([]);
        };
    }, []);
      
    return (
        <>
            <h1>The Elephants</h1>
            <div>
                <Search/>
                <ItemList items={elephantList}/>
            </div>
        </>
    );
};

export default Home;