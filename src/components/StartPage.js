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
            <div>
                <h1>{item.title}</h1>
                <p>{item.shortdesc}</p>
            </div>
        )
    }

    //Original
    const fetchTasks = async(query) => {
        const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/${query}/summary`)
        const data = await res.json()
        
        console.log(data);

        setItem ({
            ...item,
            title: data.displaytitle,
            shortdesc: data.extract
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
