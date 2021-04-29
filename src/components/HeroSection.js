import './HeroSection.css';
import '../App.css';
import heroBackground from '../images/hero-img.jpg';
import Search from './Search';
import { useState } from 'react';

// const maps = [
//     {id: '1', name: 'Sweden' },
//     {id: '2', name: 'Norway' },
//     {id: '3', name: 'Finland' },
//     {id: '4', name: 'Switzerland' }
// ];

// const filterMaps = (maps, query) => {
//     if(!query) {
//         return maps;
//     }

//     return maps.filter((map) => {
//         const mapName = map.name.toLowerCase();
//         return mapName.includes(query);
//     });
// };

function HeroSection() {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('search-bar');
    const [searchQuery, setSearchQuery] = useState(query || '');
    // const filteredMaps = filterMaps(maps, searchQuery);

    return (
        <div className='hero-container'
        style={{backgroundImage: `url(${heroBackground})`}}>
            <Search
                className='hero-search-bar' 
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            {/* <ul className='search-result'>
                {filteredMaps.map((maps) => (
                    <li key={maps.id}>{maps.name}</li>
                ))}
            </ul> */}
        </div>
    )
}

export default HeroSection
