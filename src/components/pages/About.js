import '../../App.css';
import DataFetcher from '../DataFetcher';
import MiniMap from '../MiniMap';
import MiniSimilarItems from '../MiniSimilarItems';
import { Link } from 'react-router-dom';

function About () {
    return (
    <div className='wrapper'>
        <div className='about'>
            <section className='sidebar-left'>
                <Link to='/mapView/1'>
                    <button className='primary-btn float-left'>Back to Map</button>
                </Link>
                <MiniMap />
                <MiniSimilarItems />
            </section>
            <section className='article-div'>
                <DataFetcher />
            </section>
        </div>
    </div>
    )
}

export default About;