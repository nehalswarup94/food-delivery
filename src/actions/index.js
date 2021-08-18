import types from './types';

export const getHotels = () => dispatch => {
    dispatch({
     type: types.GET_HOTELS,
     payload: [
        {
          name: 'Dominos',
          img: 'C:/Users/user/Desktop/System Design/food-delivery/public/dominos.png',
          id: 1,
          location: 'panchkula',
          rating: 4,
          tags: ['italian', 'Cheese', 'Pizza', 'Tacos'],
          ETA: 15,
        },
        {
          name: 'Pizza Hut',
          id: 2,
          location: 'Chandigarh',
          rating: 3.5,
          tags: ['italian', 'Cheese', 'Pizza', 'American'],
          ETA: 35,
        },
        {
          name: 'Sagar Ratna',
          id: 3,
          location: 'Zirakpur',
          rating: 4.5,
          tags: ['South Indian', 'North Indian', 'Dosa', 'Indian'],
          ETA: 17,
        },
        {
          name: 'Hot Millions',
          id: 4,
          location: 'panchkula',
          rating: 3.2,
          tags: ['italian', 'Cheese', 'Pizza', 'Tacos', 'Indian', 'Continental'],
          ETA: 10,
        }
      ]
    });
   }