import React from 'react';
import { mount } from 'enzyme'; //test hooks using mount
import toJson from 'enzyme-to-json';
import { act } from 'react-dom/test-utils'; //handles state changes
import configureStore from 'redux-mock-store'; //to use redux store
import * as reactRedux from 'react-redux'; //To use useSelector and useDispatch

describe('My Main component', () => {
    const initialState = { hotels: [] };
    const mockStore = configureStore();
    let store, container;

    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

    jest.mock('./actions/index', () => {
        return {
            __esModule: true,
            default: async () => [
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
        }
    })


    beforeEach(() => {
        useSelectorMock.mockClear()
        useDispatchMock.mockClear()
        store = mockStore(initialState)

    });



    it('Mounts App components', async () => {
        const App = require('./App').default;
        const handleSort=jest.fn();
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
        let wrapper;
        await act(async () => {
            wrapper = mount(<App />)
        });

        // wrapper.find('button[value="rating"]').simulate('click');
        // expect(handleSort).toHaveBeenCalled();
        wrapper.update();
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})
