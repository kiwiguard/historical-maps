import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

const Cards = () => {
    return (
        <div className='cards'>
            <div className='cards-container'>
                <div className='cards-wrapper'>
                    <ul className='cards-items'>
                        <CardItem 
                            src='images/mini1.jpg'
                            text='Map of Södermanland'
                            label='Europe'
                            path='mapView'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
