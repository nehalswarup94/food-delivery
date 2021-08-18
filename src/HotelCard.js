import './App.css';
import React from 'react';


function HotelCard(props) {
    return (
        <div className='hotel-card'>
            <div className='hotel-name'>{props.el.name}</div>
            <div className='hotel-location'>{props.el.location}</div>
            <div className='hotel-rating'>{props.el.rating}{' Star'}</div>
            <div className='hotel-eta'>{props.el.ETA}{' Minutes'}</div>
        </div>
    )

}

export default HotelCard;

// import './App.css';
// import React from 'react';


// class HotelCard extends React.Component{
//     constructor(props){
//         super(props);
//     }

//     render(){
//         return(
//             <div className='hotel-card'>
//               <div className='hotel-name'>{this.props.el.name}</div>
//               <div className='hotel-location'>{this.props.el.location}</div>
//               <div className='hotel-rating'>{this.props.el.rating}{' Star'}</div>
//               <div className='hotel-eta'>{this.props.el.ETA}{' Minutes'}</div>
//             </div>
//         )
//     }
// }

// export default HotelCard;