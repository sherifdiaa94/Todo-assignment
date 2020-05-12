//For defining a global function to be used by all the test classes
import { checkPropTypes } from 'prop-types';

export const findByTestAttr=(component,attr)=>{
    const wrapper=component.find(`[data-test='${attr}']`);
    return wrapper;
};


export const checkProps=(component,expectedProps)=>{
    const propErr= checkPropTypes(component.propTypes, expectedProps,'props',component.name);
    return propErr
};