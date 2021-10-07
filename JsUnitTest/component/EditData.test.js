import React from 'react';
import {shallow } from 'enzyme';
import EditData from '../../component/EditData';
 
describe("EditData Component" , () =>{
    let props= {
        data:[{key: undefined, name: "red12"}],
        MockData : {
            heading: "Todo App ",
            editTitle: "Edit",
            editButton: "Edit",
            delete: "Delete",
            add: "Submit",
            close: "Close",
            ok: "Save"
        }
    }
 it('should call deleteItem method', () =>
 {
     const value = {
         target:{value:[]}
     }
     const wrapper = shallow(<EditData {...props}/>);
     wrapper.setState({key:"red",data:[{key:"blue"}]
    })
    wrapper.instance().deleteItem(value);
    expect(wrapper.state('data')).toEqual([{key:"blue"}]);
 });
  it('should call saveData method', () =>
 {
     const value = {
         
         target:{value:[]}
     }
     const wrapper = shallow(<EditData {...props}/>);
     wrapper.instance().saveData(value);
     expect(wrapper.state('data')).toEqual([{key: undefined, name: "red12"}]);
     wrapper.setState({data:[{key:0}]
    })
     wrapper.instance().saveData(value);
   expect(wrapper.state('key')).toBe(0);
});
  it('should call editItem method', () =>
 {
     const value = {
         target:{
             value:"item"
         }
     }
     const wrapper = shallow(<EditData {...props}/>);
     wrapper.instance().editItem(value);
     expect(wrapper.state('requiredItem')).toEqual(value);
 });
 it('renders edit button for handleSave', () => {
    const wrapper = shallow(<EditData {...props} />);
    expect(wrapper.find(`[id="edit"]`).simulate('click', {target: {requiredItem: "Hello Added"}}));
    expect(wrapper.exists()).toBe(true) 
  });
  it('renders delete button for handleSave', () => {
    const wrapper = shallow(<EditData {...props} />);
    wrapper.find(`[id="delete"]`).simulate('click', {target: {requiredItem: "Hello Added"}});  
    expect(wrapper.exists()).toBe(true)
  });
});


    



