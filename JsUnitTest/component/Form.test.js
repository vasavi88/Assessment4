import React from 'react';
import { shallow } from 'enzyme';
import Form from '../../component/Form';

describe('Form component', () => {
    test("renders" , ()=>{
        const wrapper = shallow(<Form />); 
    expect(wrapper.exists()).toBe(true);
  })
let props = {
    MockData: {
      heading: "Todo App ",
      editTitle: "Edit",
      editButton: "Edit",
      delete: "Delete",
      add: "Submit",
      close: "Close",
      ok: "Save"
    },
    formdata:fn=>fn
  }

  it('should call state content value', () => {
    const value = {
      preventDefault: fn => fn
    }
    const wrapper = shallow(<Form {...props} />);
    wrapper.instance().handleSubmit(value);
    expect(wrapper.state('content')).toEqual("");
  }); 


    it('should call intial count value', () => {
      const wrapper = shallow(<Form />);  
      expect(wrapper.state('count')).toEqual(0);
    });
 it('should call handleChange method', ()=>{
     const content = {  
         target:{
           value:"create item"
         }
       }
       const wrapper=shallow(<Form/>);
       wrapper.instance().handleChange(content);
       expect(wrapper.state('content')).toEqual("create item");
})
})