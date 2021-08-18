import './App.css';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getHotels} from './actions/index';
import Tags from './Tags';
import Hotels from './Hotels';
import Search from './Search';

function App(props) {
  const dispatch = useDispatch();
 
  const hotels = useSelector(state => state.hotelsReducer.hotels);
  console.log(hotels,'hotels props')
  // const [hotels, setHotels] = useState([
  //   {
  //     name: 'Dominos',
  //     img: 'C:/Users/user/Desktop/System Design/food-delivery/public/dominos.png',
  //     id: 1,
  //     location: 'panchkula',
  //     rating: 4,
  //     tags: ['italian', 'Cheese', 'Pizza', 'Tacos'],
  //     ETA: 15,
  //   },
  //   {
  //     name: 'Pizza Hut',
  //     id: 2,
  //     location: 'Chandigarh',
  //     rating: 3.5,
  //     tags: ['italian', 'Cheese', 'Pizza', 'American'],
  //     ETA: 35,
  //   },
  //   {
  //     name: 'Sagar Ratna',
  //     id: 3,
  //     location: 'Zirakpur',
  //     rating: 4.5,
  //     tags: ['South Indian', 'North Indian', 'Dosa', 'Indian'],
  //     ETA: 17,
  //   },
  //   {
  //     name: 'Hot Millions',
  //     id: 4,
  //     location: 'panchkula',
  //     rating: 3.2,
  //     tags: ['italian', 'Cheese', 'Pizza', 'Tacos', 'Indian', 'Continental'],
  //     ETA: 10,
  //   }
  // ]);

  const [tags, setTags] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
     hotels.length === 0 && dispatch(getHotels());
  }, [hotels, dispatch]);

  useEffect(() => {
    let tags1 = hotels.length>0 && hotels.reduce((tag, el) => {
      tag.push(...el.tags);
      return tag;
    }, []);
    let tagSet = tags1.length>0 && new Set(tags1);

    tagSet && setTags([...tagSet]);
    console.log(tags)
  }, [hotels]);

  const filterTag = (e) => {
    let filtered = hotels.filter((el) => el.tags.includes(e.target.value));
    setFiltered(filtered);
  }

  const filterRating = (e) => {

  }

  const handleSort = (e) => {
    let hotels1 = [...hotels];

    if (e.target.value === 'rating') {
      hotels1.sort((a, b) => b.rating - a.rating)
    }
    if (e.target.value === 'ETA') {
      hotels1.sort((a, b) => a.ETA - b.ETA)
    }
    if (e.target.value === 'name') {
      hotels1.sort((a, b) => {
        let name1 = a.name.toUpperCase();
        let name2 = b.name.toUpperCase();
        if (name1 < name2) {
          return -1;
        }
        else if (name1 > name2) {
          return 1
        }
        return 0;
      })
    }
    setFiltered(hotels1);
  }

  const handleSearch = (e) => {
    let filtered = hotels.filter((el) => el.name.toLowerCase().includes(e));
    setFiltered(filtered);
  }

  return (
    <div className='main-div'>
      <Search handleSearch={handleSearch} />
      <Tags tags={tags} filterTag={filterTag} />
      <div className='sort'>
        <p>Sort accoring to : </p>
        <button className='sort-btn' value={'rating'} onClick={handleSort}>Rating</button>
        <button className='sort-btn' value={'ETA'} onClick={handleSort}>ETA</button>
        <button className='sort-btn' value={'name'} onClick={handleSort}>Hotel Name</button>
      </div>
      <div className='hotel-list'>
        <Hotels hotels={hotels} filtered={filtered} />
      </div>
    </div>
  )

}

export default App;


// import './App.css';
// import React from 'react';
// import Tags from './Tags';
// import Hotels from './Hotels';
// import Search from './Search';

// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       hotels: [
//         {
//           name:'Dominos',
//           img: 'C:/Users/user/Desktop/System Design/food-delivery/public/dominos.png',
//           id: 1,
//           location: 'panchkula',
//           rating: 4,
//           tags: ['italian','Cheese', 'Pizza', 'Tacos'],
//           ETA: 15,
//         },
//         {
//           name:'Pizza Hut',
//           id: 2,
//           location: 'Chandigarh',
//           rating: 3.5,
//           tags: ['italian','Cheese', 'Pizza', 'American'],
//           ETA: 35,
//         },
//         {
//           name:'Sagar Ratna',
//           id: 3,
//           location: 'Zirakpur',
//           rating:4.5,
//           tags: ['South Indian','North Indian', 'Dosa', 'Indian'],
//           ETA: 17,
//         },
//         {
//           name:'Hot Millions',
//           id: 4,
//           location: 'panchkula',
//           rating: 3.2,
//           tags: ['italian','Cheese', 'Pizza', 'Tacos','Indian','Continental'],
//           ETA: 10,
//         }
//       ],
//       filtered:[],
//       tags: [],
//     }
//   }

//   componentWillMount(){
//     let tags=this.state.hotels.reduce((tag,el)=>{
//       tag.push(...el.tags);
//       return tag;
//     },[]);
//     let tagSet=new Set(tags);

//     this.setState({
//       tags: [...tagSet]
//     });
//     console.log(this.state.tags)
    
//   }

//   filterTag=(e) =>{
//     let filtered = this.state.hotels.filter((el) => el.tags.includes(e.target.value));
//     this.setState({filtered: filtered})
//   }

//   filterRating = (e) => {

//   }

//   handleSort = (e) => {
//     let hotels=this.state.hotels;

//     if(e.target.value === 'rating'){
//       hotels.sort((a,b)=>b.rating-a.rating)
//   }
//     if(e.target.value === 'ETA'){
//       hotels.sort((a,b)=>a.ETA-b.ETA)
//   }
//   if(e.target.value === 'name'){
//     hotels.sort((a,b)=>{
//       let name1=a.name.toUpperCase();
//       let name2=b.name.toUpperCase();
//       if(name1 < name2){
//         return -1;
//       }
//       else if(name1>name2){
//         return 1
//       }
//       return 0;
//     })
// }
//   this.setState({filtered: hotels})
// }

// handleSearch=(e)=>{
//   console.log(e)
//   let filtered = this.state.hotels.filter((el) => el.name.toLowerCase().includes(e));
//   this.setState({filtered:filtered})
// }


//   render(){
//     return(
//       <div className='main-div'>
//         <Search handleSearch={this.handleSearch}/>
//         <Tags tags={this.state.tags} filterTag={this.filterTag}/> 
//         <div className='sort'>
//           <p>Sort accoring to : </p>
//           <button className='sort-btn' value={'rating'} onClick={this.handleSort}>Rating</button>
//           <button className='sort-btn' value={'ETA'} onClick={this.handleSort}>ETA</button>
//           <button className='sort-btn' value={'name'} onClick={this.handleSort}>Hotel Name</button>
//         </div>
//         <div className='hotel-list'>
//           <Hotels hotels={this.state.hotels} filtered={this.state.filtered}/>
//         </div>
//       </div>
//     )
//   }
// }

// export default App;
