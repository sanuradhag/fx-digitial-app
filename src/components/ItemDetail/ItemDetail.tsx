import React from 'react';

import { ItemDetailProps } from '../../interfaces/ItemDetailProps';

import'./ItemDetail.scss';

const ItemDetail = (props: ItemDetailProps) => {
    const {item} = props;
    const {name, image, sex, species, wikilink, note, dob} = item;
    return (<div className='item-detail-wrapper'>
        <img src={image} className='image' alt='image'/>
        <div className='details'>
            <a className='name' href={wikilink} target='_blank' rel='noreferrer'>{name}</a>
            <div className='note'>{note}</div>
            <div className='gender'>{sex}&nbsp;-&nbsp;{dob}</div>
            <div className='species'>{species}</div>
        </div>
    </div>);
};

export default ItemDetail;