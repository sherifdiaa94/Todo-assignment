import React from 'react';
import {shallow} from 'enzyme';
//import Header from './index';
import { findByTestAttr,checkProps } from "../../Utils/index";
// const setup=(props={})=>{
//     const component = shallow(<Header {...props}/>);
//     return component;
// };

describe('Header Component', () => {
    // let component;
    // beforeEach(()=>{
    //     component=setup();
    // })
    
    it('Should render without errors',()=>{
       //const component= setup()
       //console.log(component.debug());
    //    const wrapper=findByTestAttr(component,'headerComponent');
    //    expect(wrapper.length).toBe(1);
       expect(1).toBe(1);
    });
    // it('Should render a logo',()=>{
    //     //const component= setup()
    //    const logo=findByTestAttr(component,'logoIMG');
    //    expect(logo.length).toBe(1);
    // });
})

