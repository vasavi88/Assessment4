import Enzyme, { shallow } from "enzyme";
import CommonDropDown from "../../component/common/commonDropDown";
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
Enzyme.configure({ adapter: new Adapter() });

// describe("passing props", () => {
  
//   const handleOnChange=function(){}
//   let props = {
//     dropDownList:[{id:"dropDown"}],
//     name:"charmeleon",
      
//      Content: {
//       heading: "Select Ability based on Pokemon",
//     },
//     handleOnChange:fn=>fn,
//     handleDropdownChange: fn=>fn,
//   };

describe("passing props", () => {

  let props = {

    Content: {

      heading: "Name - Abilities Selector",

    },

    handleDropdownChange: (fn) => fn,

    handleOnChange: (fn) => fn,

  };

  it("should call handleDropdownChange method", () => {

    const wrapper = shallow(<CommonDropDown {...props} dropDownList={[]} />);

    expect(

      wrapper.find(`select`).simulate("change", {

        preventDefault: (fn) => fn,

        target: [{ name: "charmeleon" }, { name: "blaze" }],

      })

    );

    expect(wrapper.find("handleDropdownChange")).toEqual({});

  });


  // it("should call handleonChange method", () => {
  //  let countries=[{ "ability":
  //   {
  //   "name": "charmeleon",
  //   "url": "https://pokeapi.co/api/v2/pokemon/5/"
  //   }
  //   },
  //   {
  //   "ability": {
  //   "name": "bulbasaur", "url": "https://pokeapi.co/api/v2/pokemon/1/"
  //   }
   
  //   },
  //   {
  //   "ability": {
  //   "name": "squirtle",
  //   "url": "https://pokeapi.co/api/v2/pokemon/7/"
  //   }
  //   },
  //   {
  //   "ability": {
  //   "name": "weedle", "url": "https://pokeapi.co/api/v2/pokemon/13/"
  //   }
  //   }
  //   ]

  //   const wrapper = shallow(<CommonDropDown {...props} />);
  //    console.log(wrapper.instance())
  //   expect( wrapper.instance().handleDropdownChange()).toBeCalled;
  // });
  
// }); 

});