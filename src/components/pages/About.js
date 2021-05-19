import '../../App.css';
import DataFetcher from '../DataFetcher';
import MiniMap from '../MiniMap';
import MiniSimilarItems from '../MiniSimilarItems';


function About () {
    return (
    <div className='wrapper'>
        <div className='about'>
            <section className='sidebar-left'>
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