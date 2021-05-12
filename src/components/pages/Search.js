import '../../App.css';
import mapModels from '../../models/mapModels.json';
import SearchBar from '../SearchBar';
import { useState, useEffect } from 'react';
import { Cards } from '../Cards';
import RangeSlider from '../RangeSlider';
import { Checkbox , FormControlLabel } from '@material-ui/core';


function Search() {
    let mapList = mapModels;    
    let mapViewItemList;

    const DropDownMenu = () => {

        const [searchResults, setSearchResults] = useState([]);
        const [isDone, setIsDone] = useState(false);
        const [searchTerm, setSearchTerm] = useState("");

        useEffect(() => {
            const results = mapList.filter(item =>
                item.area.includes(searchTerm)
            );
            console.log(results);
            setSearchResults(results);
        }, [searchTerm]);

        const handleChange = event => {
            setSearchTerm(event.target.value);
        };

        const uniqueItems = [];
        // eslint-disable-next-line
        mapList.map(item => {
            var existingItem = uniqueItems.find(x => x.area === item.area)
            if (!existingItem)
                uniqueItems.push(item)
        });


        const showData = () => {            
            setIsDone(true);
        }

        if (isDone) {            
            mapViewItemList = Cards(searchResults)
        } else {            
            mapViewItemList = '';
        }

        return (
            <div>
                <h1>Area</h1>
                <select onChange={handleChange}>
                    {uniqueItems.map((item, index) => {
                        return (
                            <option key={index} value={item.area}> {item.area} </option>
                        )
                    })}
                </select>
                <button onClick={showData}>Show Map</button>

            </div>
        )
    }

    const CheckboxMenuMaker = () => {
        let mapList = mapModels
        const handleChange = (e) => {
            mapList.filter(item => item.maker.includes(e.target.value)).map((currentMap, i) => {
                console.log(currentMap.maker);
                return currentMap
            })
        }

        const uniqueItems = [];
        // eslint-disable-next-line
        mapList.map(item => {
            var existingItem = uniqueItems.find(x => x.maker === item.maker)
            if (!existingItem)
                uniqueItems.push(item)
        });

        return (
            <>
                <label htmlFor='filterMaker' className='filter-label'>Maker</label><br />
                {uniqueItems.map((item, index) => {
                    return (
                        <div className='checkbox-option' key={index}>
                            <FormControlLabel
                                className='filter-checkbox-label'
                                value={item.maker}
                                control={<Checkbox 
                                    value={item.maker}
                                    name={item.maker}
                                    onChange={handleChange}
                                />}
                                label={item.maker}
                                labelPlacement="start"
                            />
                        </div>
                    )
                })}
            </>
        )
    }


    const { search } = window.location;
    const query = new URLSearchParams(search).get('search-bar');
    const [searchQuery, setSearchQuery] = useState(query || '');

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
                            {DropDownMenu()}                            
                            {CheckboxMenuMaker()}
                            <RangeSlider />
                            <div className='filter-div--community-options'>
                                <div className='checkbox-option'>
                                    {/* <label htmlFor='community-annotations' className='filter-checkbox-community-label'>Community Annotations</label><br />
                                    <input type='checkbox' value='community-annotations' name='community-annotations' /> */}
                                    <FormControlLabel
                                        className='filter-checkbox-community-label'
                                        value='community-annotations'
                                        control={<Checkbox 
                                            value='community-annotations'
                                            name='community-annotations'
                                        />}
                                        label='Community Annotations'
                                        labelPlacement="start"
                                    />
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
                        {mapViewItemList}
                    </div>
                </div>
            </div>
        </>
    )

}

export default Search;