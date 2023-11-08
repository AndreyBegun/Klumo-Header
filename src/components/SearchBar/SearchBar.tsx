import search from '../../assets/search.png'
import s from './Search.module.css';

function SearchBar() {
    return (
        <div className={s.search}>
            <img src={search} alt="search" width={16} height={16} />
            <input placeholder='search' />
        </div>
    )
}
export default SearchBar