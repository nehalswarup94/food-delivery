import './App.css';
import React, { useState } from 'react';


function Search(props) {
    const [searchText, setSearchText] = useState('');

    const handleChange = (e) => {
        setSearchText(e.target.value);
    }

    const handleSearch = () => {
        props.handleSearch(searchText)
    }

    return (
        <div className='search'>
            <input className='searchbox' type='text' name='searchText' value={searchText} onChange={handleChange}></input>
            <button className='search-btn' name='search' onClick={handleSearch}>Search</button>
        </div>
    )
}

export default Search;

// import './App.css';
// import React from 'react';


// class Search extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             searchText:''
//         }
//     }

//     handleChange = (e) => {
// this.setState({
//     searchText : e.target.value
// })
//     }

//     handleSearch = () => {
//         this.props.handleSearch(this.state.searchText)
//     }

//     render(){
//         return(
//             <div className='search'>
//                 <input className='searchbox' type='text' name='searchText' value={this.state.searchText} onChange={this.handleChange}></input>
//                 <button className='search-btn' name='search' onClick={this.handleSearch}>Search</button>
//             </div>
//         )
//     }
// }

// export default Search;