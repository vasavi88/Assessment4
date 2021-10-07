import React from 'react';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import TodoButton from '../../../component/common/TodoButton';


describe('Todo Button', () => {
  it('Test click event', () => {
    
    const wrapper = shallow((<TodoButton/>));
    expect(wrapper.find('button').exists()).toBe(true);
  });
});
