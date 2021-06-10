import './MiniSimilarItems.css';
import mini7 from '../images/mini7.jpg';
import mini2 from '../images/mini2.jpg';
import { Link } from 'react-router-dom';


function MiniSimilarItems() {
    return (
        <div className='mini-similar-items-wrapper'>
            <h2 className='yellow mini-similar-items--heading'>Similar Items</h2>     
            <div className='mini-similar-items mini-cards-wrapper'>
                <div className='mini-map-card'>
                <Link to='/mapView/2'>
                   <img src={mini7} alt={'map'} /> 
                </Link>
                
                    <div className='mini-similar-items--info'>
                        <h3>Greece</h3>
                        <br />
                        <p>Created by: Unknown</p>
                        <br />
                        <p>Date (ca): 1651 - 1724</p>
                    </div>
                </div>

                <div className='mini-map-card'>
                <Link to='/mapView/4'>
                   <img src={mini2} alt={'map'} /> 
                </Link>
                
                    <div className='mini-similar-items--info'>
                        <h3>Gotland</h3>
                        <br />
                        <p>Created by: Gustaf af Klint</p>
                        <br />
                        <p>Date (ca): 1812</p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default MiniSimilarItems
