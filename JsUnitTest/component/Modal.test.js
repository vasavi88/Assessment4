import React from 'react';
import { shallow } from 'enzyme';
import Modal from '../../component/Modal';
import sinon from 'sinon';

describe('Modal component', () => {
    test("renders", () => {
        const wrapper = shallow(<Modal />);
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
            ok: "Save",
        } ,
        saveData:fn=>fn      
    }
    it('should call titleHandler method', () => {
        const value = {
            target: {
                value: "item"
            }
        }
        const wrapper = shallow(<Modal />);
        wrapper.instance().titleHandler(value);
        expect(wrapper.state('title')).toEqual("item");
    });
      it('should call handleSave method', () => {
        
        const item = {
            target: { key: "id", name: "value" }
        }
        const saveData=sinon.spy();

        const wrapper = shallow(<Modal {...props} saveData={saveData}/>);
        wrapper.instance().handleSave(item);
        expect(saveData).toHaveProperty('callCount',1);

    }); 
    it('renders inputfield for titleHandler method', () => {
        const wrapper = shallow(<Modal {...props} />);
        wrapper.find(`[id="ok"]`).simulate('click', {
            target: {
                key: "id",name: "value"
            }
        });
        expect(wrapper.exists()).toBe(true)
    });
    it('renders button for handleSave method', () => {
        const wrapper = shallow(<Modal {...props} />);
        wrapper.find(`[id="editeditem"]`).simulate('change', { target: { title: "colour" } });
        expect(wrapper.exists()).toBe(true)
    });
})


