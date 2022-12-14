import React from 'react';

import { Elephant } from '../../interfaces/Elephant';
import { ItemListProps } from '../../interfaces/ItemListProps';
import Card from '../Card/Card';

import'./ItemList.scss';

const ItemList = (props: ItemListProps<Elephant>) => {
    const {items} = props;
    return (<div className='item-list-wrapper'>
        {items.length !== 0 && items.map((item: Elephant) => <Card key={item._id} item={item}/>)}
        {items.length === 0 && (<h1>No Records to display</h1>)}
    </div>);
};

export default ItemList;