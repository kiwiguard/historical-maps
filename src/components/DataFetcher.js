// import { useState, useEffect } from 'react'
import { useState } from 'react';
import './DataFetcher.css';


function DataFetcher() {
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
                <a href={`http://en.wikipedia.org/wiki/${item.url}`}>Read more on Wikipedia</a>
            </div>
            
        )
    }

    //Original
    const fetchData = async(query) => {
        // const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/${query}`)
        const res = await fetch(`https://en.wikipedia.org//w/api.php?action=query&origin=*&format=json&prop=extracts&exintro&titles=${query}&redirects=true&formatversion=2&rvprop=content&rvslots=*&rvsection=0
        `)
        const data = await res.json()
        console.log(data)

        setItem ({
            ...item,
            title: data.query.pages[0].title,
            content: data.query.pages[0].extract,
            url: query
        })

        setLoading(false);
        

        return item
    }
    // window.onload = () => fetchData('Sweden')
    
    return (
        <div>
        <button className='primary-btn' onClick={() => fetchData('Sweden')}>Load Wiki</button><br />
            {loading ? ('Laddar....') : renderWiki(item)}
        </div>
    )
}

export default DataFetcher
