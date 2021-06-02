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
                    src={e.minimap}
                    text={`Map of ${e.name}`}
                    maker={e.maker}
                    date={`${e.startDate} - ${e.endDate}`}
                    label={e.area}
                    path={`mapView/${e.id}`}
                />
            </>    
        )
    }))
}

export default Cards
