import React from "react";

import Enzyme, { shallow } from "enzyme";

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Container from "../component/Container";

import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
 
describe("App Container",() => {
    
    // eslint-disable-next-line jest/valid-title
    it("mapstatetoprops", () => {

        const initialState = {
    
          event: {
    
            res: {},
    
            error: {},
    
          },
    
        };
    
        const store = mockStore(initialState);
    
        const wrapper = shallow(<Container store={store} />);
    
        expect(wrapper.props().res).toBe;
    
      });
})