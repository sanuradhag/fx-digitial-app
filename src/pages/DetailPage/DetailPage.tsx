import React, { useCallback, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { api } from '../../api';
import { Elephant } from '../../interfaces/Elephant';
import { useState } from 'react';
import { BASE_URL } from '../../constants';

import './DetailPage.scss';

const DetailPage = () => {
    const { name } = useParams();

    const [elephant, setElephant] = useState<Elephant>();

    const getElephantList = useCallback(async () => {
        try {
            const response = await api.get<Elephant>(`${BASE_URL}/name/${name}`);
            setElephant(response);
        } catch (e) {
            console.log('An error occurred while fetching the data', e);
        }
    }, []);

    useEffect(() => {
        getElephantList();
        return () => {
            setElephant(undefined);
        };
    }, []);

    return (<div className='detail-page-wrapper'>
        {elephant && <ItemDetail item={elephant}/>}
        {!elephant && <h1>Item not found</h1>}
    </div>);
};

export default DetailPage;