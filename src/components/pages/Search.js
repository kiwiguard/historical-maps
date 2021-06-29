import '../../App.css';
import mapModels from '../../models/mapModels.json';
import SearchBar from '../SearchBar';
import { useState, useEffect } from 'react';
import { Cards } from '../Cards';
import RangeSlider from '../RangeSlider';
import { Checkbox , FormControlLabel } from '@material-ui/core';


function Search() {
    //let mapList = mapModels;
    
    useEffect(() => {
        fetch("mapModels.json")
          .then((res) => res.json())
          .then((data) => {
              console.log(data);
              setMapList(data);
          });
      }, []);
    

    let mapViewItemList;
    const [mapList, setMapList] = useState(null);
    const [searchResults, setSearchResults] = useState([]);
    const [areaResults, setAreaResults] = useState([]);
    const [isChecked, setIsChecked] = useState(false);
    const [rangeValue, setRangeValue] = useState("");

    const DropDownMenu = () => {
        const [isDone, setIsDone] = useState(false);
        const [searchTerm, setSearchTerm] = useState("");

        useEffect(() => {
            if (mapList) {
            const results = mapList.filter(item =>
                item.area.includes(searchTerm)
            );
            
            setSearchResults(results);
            setAreaResults(results);
            }
        }, [searchTerm]);

        const handleChange = event => {
            setSearchTerm(event.target.value);
        };

        const uniqueItems = [];
        if (mapList) { 
        mapList.map(item => {
            var existingItem = uniqueItems.find(x => x.area === item.area)
            if (!existingItem)
                uniqueItems.push(item)
        });

    }

        // eslint-disable-next-line
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
                <label htmlFor='area-picker' className='filter-label'>Area</label><br />
                <select onChange={handleChange} name='area-picker'>
                    <option value="" selected disabled hidden>Choose Area</option>
                    {uniqueItems.map((item, index) => {
                        return (
                            <option key={index} value={item.area}> {item.area} </option>
                        )
                    })}
                </select>
                {/* <button onClick={showData}>Show Map</button> */}

            </div>
        )
    }

    const CheckboxMenuMaker = () => {
        const [filterTerm, setFilterTerm] = useState("");
        const [isDone, setIsDone] = useState(false);

        useEffect(() => {
            const results = searchResults.filter(item =>
                item.maker.includes(filterTerm)
            );
            
            setSearchResults(results);
            setIsDone(true); 
        }, [filterTerm]);

        const handleChange = (e) => {
            if (e.target.checked) {
                setFilterTerm(e.target.value);
                setIsChecked(true);
               
            } else 
            {
                setFilterTerm('');
                setSearchResults(areaResults);                
                setIsChecked(false);
            }
        }

        if (isDone) {            
            mapViewItemList = Cards(searchResults)
        } else {            
            mapViewItemList = '';
        }

        const uniqueItems = [];
        // eslint-disable-next-line
        searchResults.map(item => {
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
                                    checked={isChecked}
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

    useEffect(() => {
        const sliderItems = [];
        areaResults.forEach((item) => {
            if(inRange(item.startDate,rangeValue[0],rangeValue[1])){
                sliderItems.push(item);
            }
        })
        
        setSearchResults(sliderItems);
        // eslint-disable-next-line
    }, [rangeValue]);

    function inRange(x, min, max) {
        return ((x-min)*(x-max) <= 0);
    }

    function handleRangeSliderChange(newValue){
        setRangeValue(newValue);        
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
                            <p class="clear-search" onClick={() => window.location.reload()}>CLEAR ALL</p>
                        </div>
                        <div className='filter-div--options'>                            
                            {DropDownMenu()}
                            <div className='buffer'>
                                {CheckboxMenuMaker()}
                            </div>                            
                            <RangeSlider onChange={handleRangeSliderChange} />
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