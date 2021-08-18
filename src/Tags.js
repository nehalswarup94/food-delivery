import './App.css';
import React from 'react';


function Tags(props){
        return(
            <div className='tags'>
                {props.tags && props.tags.length>0 &&props.tags.map((el)=>{
                    return(
                        <button className='tag-btn' value={el} onClick={props.filterTag}>{el}</button>
                    )
                })}
            </div>
        )
}

export default Tags;

// import './App.css';
// import React from 'react';


// class Tags extends React.Component{
//     constructor(props){
//         super(props);
//     }

//     render(){
//         return(
//             <div className='tags'>
//                 {this.props.tags.map((el)=>{
//                     return(
//                         <button className='tag-btn' value={el} onClick={this.props.filterTag}>{el}</button>
//                     )
//                 })}
//             </div>
//         )
//     }
// }

// export default Tags;

