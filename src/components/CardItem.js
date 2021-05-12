import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

const CardItem = props => {
    return (
        <>
            <div className='cards--item'>
                <Link className='cards--item-link' to={props.path}>
                    <figure className='cards--item--pic-wrap'>
                        <img src={props.src} alt='Map' className='cards--item-img'/>
                    </figure>
                    <div className='cards--item-info'>
                        <h5 className='cards--item-text'>{props.text}</h5>
                    </div>
                </Link>
            </div>
        </>
    )
}

CardItem.propTypes = {

}

export default CardItem
