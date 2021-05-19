import './MiniSimilarItems.css';
import mini1 from '../images/mini1.jpg';
import mini2 from '../images/mini2.jpg';


function MiniSimilarItems() {
    return (
        <div className='mini-similar-items-wrapper'>
            <h2 className='yellow mini-similar-items--heading'>Similar Items</h2>     
            <div className='mini-similar-items mini-cards-wrapper'>
                <div className='mini-map-card'>
                <img src={mini1} alt={'map'} />
                    <div className='mini-similar-items--info'>
                        <p>Södermanland</p>
                        <br />
                        <p>Created by: </p>
                        <br />
                        <p>Date (ca): </p>
                    </div>
                </div>

                <div className='mini-map-card'>
                <img src={mini2} alt={'map'} />
                    <div className='mini-similar-items--info'>
                        <p>Gotland</p>
                        <br />
                        <p>Created by: </p>
                        <br />
                        <p>Date (ca): </p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default MiniSimilarItems
