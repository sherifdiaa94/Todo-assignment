import React from 'react';
import {shallow} from 'enzyme';

import Main from '../Main'
import { findByTestAttr,testStore } from "../../Utils/index";


describe('Testing JEST', () => {
    it('Should render without errors',()=>{
      expect(1).toBe(1);
   });
    
})


const setUp = (initialState={}) => {
   const store = testStore(initialState);
   const wrapper = shallow(<Main store={store} />).childAt(0).dive();
   return wrapper;
};

describe('App Component', () => {

   let wrapper;
   beforeEach(() => {
       const initialState = {
           list: [{
               id: 'Example id 1',
               "item": 'Some text',
               "completed":"false"
           },{
            id: 'Example id 2',
            "item": 'Some text2',
            "completed":"false"
        },
        {
         id: 'Example id 3',
         "item": 'Some text3',
         "completed":"false"
     }]
       }
       wrapper = setUp(initialState);
   });

   it('Should render without errors', () => {
       const component = findByTestAttr(wrapper, 'appComponent');
       expect(component.length).toBe(1);
   });
})