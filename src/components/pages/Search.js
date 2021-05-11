import '../../App.css';
import mapModels from '../../models/mapModels.json';

function DropDownMenu () {
    let mapList = mapModels
    const handleChange = (e) => {
        mapList.filter(item => item.area.contains(e.target.value).map(filteredArea => (
            console.log(filteredArea.id, e.target.value)
        )))
    }

    return (
    <select onChange={handleChange}>
         {mapList.map((item, index) => {
           return (
             <option key={index} value={item.area}> {item.area} </option>
           )
         })}
    </select>
    )

}

function Search () {
    
    // let areaList = mapList.map((e,i) => { return e.area })
    // console.log(areaList)
    return (
    <>
        <h1 className='search'>Search Page</h1>
        <DropDownMenu/>
    </>
    )
}

export default Search;