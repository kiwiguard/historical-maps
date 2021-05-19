import '../../App.css';
import StartPage from '../StartPage';
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
                <StartPage />
            </section>
        </div>
    </div>
    )
}

export default About;