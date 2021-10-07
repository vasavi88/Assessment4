import React, { Component } from 'react';
import Data from '../../mock/countryRegionMock';
// import Header from '../Header';
class CommonDropDown extends Component {
    handleDropdownChange(e) {
        // e.preventDefault();
        this.props.handleOnChange(e);
    }
    render() {
        const dropDownList = this.props.dropDownList
        return (
            <select onChange= {this.handleDropdownChange}>
                {
                    dropDownList.map(x => {
                        return <option value= {x.ability.name}> 
                            {x.ability.name}</option>
                    })
                }
            </select>
        )
    }
}
CommonDropDown.defaultProps = { Content: Data }
export default CommonDropDown;
