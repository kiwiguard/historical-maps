import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import './SearchBar.css';



const SearchBar = ({ searchQuery, setSearchQuery }) => {
    return (
        <div className='search-div'>
            <form action='/' method='get' className='search-form'>
                <label htmlFor='search-bar'>
                    <span className='visually-hidden'>Search Maps</span>
                </label>
                <input 
                    value={searchQuery}
                    onInput={e => setSearchQuery(e.target.value)}
                    type='text' 
                    placeholder='Search maps' 
                    id='search-bar' 
                    className='search-bar'
                    name='search-bar' 
                />
                <Link to='/search'>
                    <button type='submit' className='search-btn'>
                        <SearchIcon style={{ fontSize: 40 }} className='search-icon'/>
                    </button>
                </Link>
            </form>
        </div>
    )
}

export default SearchBar
