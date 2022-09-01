import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CardProps } from '../../interfaces/CardProps';

import './Card.scss';

const Card = (props: CardProps) => {
    const {item} = props;
    const {name, image, species, sex} = item;

    const navigate = useNavigate();

    return (
        <div className='card-wrapper' onClick={() => navigate(`/elephants/${item._id}`)}>
            <img src={image} className='card-image' alt='card-image'/>
            <div className='detail-wrapper'>
                <div className='card-title'>{name}</div>
                <div className='card-details'>{species} - {sex}</div>
            </div>
        </div>
    );
};

export default Card;