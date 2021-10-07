import React from 'react';
import {shallow } from 'enzyme';
import TodoInput from '../../../component/common/TodoInput';

describe("TodoInput" , () =>{
    it("should render my component", () => {
        const wrapper = shallow(<TodoInput />);
        expect(wrapper.find('input').exists()).toBe(true);
    })
})