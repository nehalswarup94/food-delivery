import './App.css';
import React from 'react';
import HotelCard from './HotelCard';


function Hotels(props) {
    return (
        <div className='hotel-card-div'>
            {props.filtered && props.filtered.length > 0 ? props.filtered.map((el) => {
                return <HotelCard el={el} />
            }) :
            props.hotels && props.hotels.length>0 && props.hotels.map((el) => {
                    return <HotelCard el={el} />
                })}
        </div>
    )

}

export default Hotels;

// import './App.css';
// import React from 'react';
// import HotelCard from './HotelCard';


// class Hotels extends React.Component{
//     constructor(props){
//         super(props);
//     }

//     render(){
//         return(
//             <div className='hotel-card-div'>
//                 {this.props.filtered && this.props.filtered.length > 0 ? this.props.filtered.map((el)=>{
//                     return <HotelCard el={el}/>
//                 }) : 
//                 this.props.hotels.map((el)=>{
//                     return <HotelCard el={el}/>
//                 })}
//             </div>
//         )
//     }
// }

// export default Hotels;