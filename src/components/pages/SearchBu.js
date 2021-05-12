import '../../App.css';
import mapModels from '../../models/mapModels.json';
import SearchBar from '../SearchBar';
import { useState } from 'react';

function DropDownMenuLocations () {
    let mapList = mapModels
    const handleChange = (e) => {
        mapList.filter(item => item.area.includes(e.target.value)).map((currentMap, i) => {
            console.log(currentMap.id);
            return currentMap
        })
    }

    return (
    <>
        <label htmlFor='filterAreas' className='filter-label'>Location</label><br/>
        <select name='filterAreas' id='filterAreas' onChange={handleChange}>
            {mapList.map((item, index) => {
            return (
                <option key={index} value={item.area}> {item.area} </option>
            )
            })}
        </select>
    </>
    )
}

function DropDownMenuMaker () {
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
                        <DropDownMenuLocations/>
                        <DropDownMenuMaker/>
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
                <div className='card-container'>

                </div>
            </div>
        </div>
    </>
    )
}

export default Search;