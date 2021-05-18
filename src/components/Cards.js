import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

export function Cards (mapList) {
    return (mapList.map((e) => {
        return (
            <>
                <CardItem
                    className='cards-items'
                    key={e.id} 
                    src='images/mini1.jpg'
                    text={`Map of ${e.name}`}
                    label={e.area}
                    path={`mapView/${e.id}`}
                />
            </>    
        )
    }))
}

export default Cards
