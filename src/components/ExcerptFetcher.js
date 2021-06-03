import { useState } from 'react';
import './DataFetcher.css';


function ExcerptFetcher(query) {
    // const initialItemState = { title: '', shortdesc  : '' };
    const [item, setItem] = useState({ 
        title: '', 
        content  : '' 
        });
    const [loading, setLoading] = useState(true);


    const renderWiki = (item) => {
        return (
            <div className='wiki-data-div'>
                <h1 className='libre'>{item.title}</h1>
                <div dangerouslySetInnerHTML= {{__html:[item.content]}}>
                </div>
            </div>
        )
    }

    //Original
    const fetchData = async(query) => {
        const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${query}`)
        const data = await res.json()
        console.log(data)

        setItem ({
            ...item,
            title: data.displaytitle,
            content: data.extract_html,
            url: query
        })

        setLoading(false);
        return item
    }
    window.onload = () => fetchData('Sweden')

    return (
        <div>
        {loading ? ('Laddar....') : renderWiki(item)}
        </div>
    )     
}

export default ExcerptFetcher
