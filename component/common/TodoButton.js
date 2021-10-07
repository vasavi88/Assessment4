import React, { Component } from 'react';
import MockData from '../../mock/countryRegionMock';
class TodoButton extends Component {
        render() {
                return (
                        <button onClick={this.props.onClick}>{this.props.name}</button>
                )
        }
}
TodoButton.defaultProps = { Content: MockData }
export default TodoButton;