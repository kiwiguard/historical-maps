import '../../App.css';
import StartPage from '../StartPage';
import SimilarItems from '../SimilarItems';


function About () {
    return (
    <div className='wrapper'>
        <div className='about'>
            <section className='sidebar-left'>
                <div className='map-placeholder'></div>
                <SimilarItems />
            </section>
            <section className='article-div'>
                <StartPage />
            </section>
        </div>
    </div>
    )
}

export default About;