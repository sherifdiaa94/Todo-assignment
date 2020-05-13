import React from 'react';
import {shallow} from 'enzyme';
import Button from '../todo';
import reducer from '../redux/reducer'

describe('Default reducer', () => {
    it('Default state',()=>{
        expect(reducer(undefined,{type:'Undefined'})).toEqual({"empty": [], "list": []});
    })
});
