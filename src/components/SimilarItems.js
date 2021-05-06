import './SimilarItems.css';
import mini1 from '../images/mini1.jpg';
import mini2 from '../images/mini2.jpg';
import mini3 from '../images/mini3.jpg';
import mini4 from '../images/mini4.jpg';
import mini5 from '../images/mini5.jpg';
import mini6 from '../images/mini6.jpg';

function SimilarItems() {
    return (
        <div className='similar-items-wrapper'>
            <div className='heading-wrapper'>
                <div className='heading-group'>
                    <h1 className='heading-group--h1'>Explore</h1>
                    <h2 className='heading-group--h2'>Similar <span className='yellow'>Items</span></h2>
                </div>        
            </div>
            <div className='similar-items cards-wrapper'>
                <div className='map-card'>
                <img src={mini1} alt={'map'} />
                    <p><span className='card-title'>Södermanland</span></p>
                </div>

                <div className='map-card'>
                <img src={mini2} alt={'map'} />
                    <p><span className='card-title'>Gotland</span></p>
                </div>

                <div className='map-card'>
                <img src={mini3} alt={'map'} />
                    <p><span className='card-title'>Gulf of Finland</span></p>
                </div>

                <div className='map-card'>
                <img src={mini4} alt={'map'} />
                    <p><span className='card-title'>South East Asia</span></p>
                </div>

                <div className='map-card'>
                <img src={mini5} alt={'map'} />
                    <p><span className='card-title'>Greece</span></p>
                </div>

                <div className='map-card'>
                <img src={mini6} alt={'map'} />
                    <p><span className='card-title'>Arabia</span></p>
                </div>
            </div>
        </div>


    )
}

export default SimilarItems
