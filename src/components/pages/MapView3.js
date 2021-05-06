import '../../App.css';
import scandinavia from '../../images/scandinavia.jpg';
import SimilarItems from '../SimilarItems';
import { Link } from 'react-router-dom';

function MapView () {
    return (
    <>
        <div className='wrapper'>
            <section className='map-header'>
                <Link to='/search'>
                    <button className='primary-btn'>Back to Search</button>
                </Link>
                <h1 className='libre'>Map of Scandinavia</h1>
                <div className='map-header--info'>
                    <h4><b>Created by: </b>Unknown</h4>
                    <h4><b>Date (ca): </b>1651 - 1724</h4>
                </div>
            </section>
            <div className='map-div'>
                <img src={scandinavia} alt={'map'} className='map-div'/>
            </div> 
        </div>
        <SimilarItems />
    </>
    )
}

export default MapView;