import {useState, useEffect} from 'react'

function useFetch(query) {
    const initialDataState = { title: '', shortdesc: ''};
    const [data, setData] = useState(initialDataState);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${query}`);
            const json = await res.json();
            setData(data, {
                title: json.displaytitle,
                shortdesc: json.extract
            });
            setLoading(false)
        }
        fetchData();
    }, [query, data]);
    return [data, loading];
}
export { useFetch };

function StartPage() {

    const [query, setQuery] = useState('');
    const [data, loading] = useFetch(query);

    
    return (
        <div>
            <button onClick={setQuery('Stockholm')}>Test</button>

            {loading ? ('Laddar....') : (<div><h1>{data.title}</h1><p>{data.shortdesc}</p></div>)}
        </div>
    );
};

export default StartPage

