import React from 'react';
import { shallow } from 'enzyme';

import TodoApp from '../component/TodoApp';


describe('App component', () => {
    let props = {
        MockData: {
          heading: "Todo App ",
          editTitle: "Edit",
          editButton: "Edit",
          delete: "Delete",
          add: "Submit",
          close: "Close",
          ok: "Save"
        },}
    it("renders App component" , ()=>{
        const wrapper = shallow(<TodoApp {...props}/>); 
    expect(wrapper.exists()).toBe(true);
  });
  
})
