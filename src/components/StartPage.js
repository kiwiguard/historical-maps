// import { useState, useEffect } from 'react'
import { useState } from 'react'


function StartPage() {
    // const initialItemState = { title: '', shortdesc  : '' };
    const [item, setItem] = useState({ 
        title: '', 
        shortdesc  : '' 
        });
    const [loading, setLoading] = useState(true);


    const renderWiki = (item) => {

        return (
            <div className=''>
                <h1 className='libre'>{item.title}</h1>
                <p>{item.shortdesc}</p>
                <br />
                <p>{item.page}</p>
            </div>
            
        )
    }

    //Original
    const fetchTasks = async(query) => {
        const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/${query}/summary`)
        // const res = await fetch(`http://en.wikipedia.org/w/api.php?action=parse&prop=text&page=${query}&format=json`)
        const data = await res.json()
        
        console.log(data);

        setItem ({
            ...item,
            title: data.displaytitle,
            shortdesc: data.extract,
            page: data.content_urls.desktop.page
        })

        setLoading(false);

        return item
    }
    
    
    return (
        <div>
            <button onClick={() => fetchTasks('random')}>Slumpa Wiki</button><br />

            {loading ? ('Laddar....') : renderWiki(item)}
        </div>
    )
}

export default StartPage
