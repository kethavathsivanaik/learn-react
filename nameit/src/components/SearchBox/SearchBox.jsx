import './SearchBox.css'

const SearchBox = ({ onInputChange }) => {
    return(
       <div className="search-container">
           <input onChange={(event) => onInputChange()} placeholder="Type Keywords" className="search-input"></input>
       </div>
    )
}

export default SearchBox;