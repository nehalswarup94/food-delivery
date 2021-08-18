// import { render, screen } from '@testing-library/react';
import React from 'react';
import { shallow, mount } from 'enzyme'; //test hooks using mount
import App from './App';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'; //to use redux store
import * as reactRedux from 'react-redux'; //To use useSelector and useDispatch

describe('My Main component', () => {
  const initialState = { hotels: [] };
  const mockStore = configureStore();
  let store, container;

  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

  beforeEach(() => {
    useSelectorMock.mockClear()
    useDispatchMock.mockClear()
    store = mockStore(initialState)

  });

  it('render App component with store', () => {
    let hotelsArray = [
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
    ]
    useSelectorMock.mockReturnValue({ hotels: hotelsArray });
    container = shallow(<Provider store={store}><App /></Provider>);
    expect(container.length).toEqual(1)
  });
})