import '../../App.css';
import mapModels from '../../models/mapModels.json';
import SearchBar from '../SearchBar';
import { useState, useEffect } from 'react';
import { RenderMapItem } from './MapView';
import RangeSlider from '../RangeSlider';
import Cards from '../Cards';

function DropDownMenu({propertyName}){   
    let mapList = mapModels;    
    let mapViewItem;
    const [searchResults, setSearchResults] = useState([]);
    const [isDone,setIsDone] = useState(false);
    const [selectedMap, setSelectedMap] = useState({});
    const [searchTerm, setSearchTerm] = useState("");    
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };
    
     useEffect(() => {
        const results = mapList.filter(item =>
            item[propertyName].includes(searchTerm)
        );
        console.log(results);
        setSearchResults(results);
      }, [searchTerm]);

    const showData = () => {
        setSelectedMap(searchResults[0]);
        setIsDone(true);
    }
    if (isDone) {
        mapViewItem = RenderMapItem(selectedMap)
      } else {
        mapViewItem = '';
    }
    return (
        <div>
            <h1>{propertyName}</h1>
        <select onChange={handleChange}>
            {mapList.map((item, index) => {
                return (
                    <option key={index} value={item[propertyName]}> {item[propertyName]} </option>
                )
            })}
        </select>
        <button onClick={showData} >Show Map</button>                    
            {mapViewItem}
        </div>
    )
}

function CheckboxMenuMaker () {
    let mapList = mapModels
    const handleChange = (e) => {
        mapList.filter(item => item.maker.includes(e.target.value)).map((currentMap, i) => {
            console.log(currentMap.maker);
            return currentMap
        })
    }

    return (
    <>
        <label htmlFor='filterMaker' className='filter-label'>Maker</label><br/>
            {mapList.map((item, index) => {
            return (
                <div className='checkbox-option' key={index}>
                    <label htmlFor={item.maker} className='filter-checkbox-label'>{item.maker}</label><br/>
                    <input type='checkbox' value={item.maker} name={item.maker} onChange={handleChange}/>
                </div>
            )
            })}
    </>
    )
}

function Search () {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('search-bar');
    const [searchQuery, setSearchQuery] = useState(query || '');
    
    // let areaList = mapList.map((e,i) => { return e.area })
    // console.log(areaList)
    return (
    <>
        <div className='wrapper'>
            <div className='search-container'>
                <div className='filter-div'>
                    <div className='filter-div--header'>
                        <h3>Advanced Search</h3>
                        <p>CLEAR ALL</p>
                    </div>
                    <div className='filter-div--options'>
                        <DropDownMenu propertyName='area'/>
                        <CheckboxMenuMaker/>
                        <RangeSlider />
                        <div className='filter-div--community-options'>
                            <div className='checkbox-option'>
                                <label htmlFor='community-annotations' className='filter-checkbox-community-label'>Community Annotations</label><br/>
                                <input type='checkbox' value='community-annotations' name='community-annotations' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='searchpage-div'>
                    <SearchBar
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                    />
                </div>
                <div className='result-container'>
                    <Cards />
                </div>
            </div>
        </div>
    </>
    )
}

export default Search;