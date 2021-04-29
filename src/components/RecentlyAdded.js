import './RecentlyAdded.css';
import mini1 from '../images/mini1.jpg';
import mini2 from '../images/mini2.jpg';
import mini3 from '../images/mini3.jpg';

function RecentlyAdded() {
    return (
        <div className='recently-added-wrapper'>
            <div className='heading-wrapper'>
                <div className='heading-group'>
                    <h1 className='heading-group--h1'>History</h1>
                    <h2 className='heading-group--h2'>Recently <span className='yellow'>Added</span></h2>
                </div>        
            </div>
            <div className='cards-wrapper'>
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
            </div>
        </div>


    )
}

export default RecentlyAdded
