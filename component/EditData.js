import { map } from 'jquery';
import React, { Component } from 'react';
import Modal from './Modal';
// import MockData from '../mock/AppMock';
import MockData from '../mock/countryRegionMock';
import TodoButton from './common/TodoButton';
 
class EditData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      requiredItem: 0,
      elements: [],
      key:0,
    }
  }
 
  deleteItem(item) {
    const newdata = [];
    const data=this.state.data;
    map(this.state.data, (obj) => {
      if (item.key !== obj.key) {
        newdata.push(obj);
      }
    });
    this.setState({ data: newdata });
  }
 
  editItem=item=>{
  //editItem(item) {
    this.setState({
      requiredItem: item, key: item.key
    });
  }
  saveData=item=>{
  //saveData(item) {
    const newdata = [];
    const data=this.state.data;
    map(this.state.data, (obj) => {
      if (this.state.key === obj.key) {
        newdata.push(item);
      }
       else {
      newdata.push(obj);
      } 
    });
    this.setState({ data: newdata });
 
  }
 
  render() {
    const elements = this.state.data.map((item, index)  => {
 
      return (
        
        <tr key={index}>
          <td>{item.name}</td>
          <td>
            <div data-toggle="modal"
              data-target="#exampleModal">
 
              <TodoButton id="edit"
                name={this.props.Content.editButton}
                onClick={() => this.editItem(item)} /></div>
 
            <TodoButton id="delete"
              name={this.props.Content.delete}
              onClick={() => this.deleteItem(item)} />
          </td>
        </tr>
         
      )
    });
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <br /><br />
        </div>
        <table className="table table-striped">
          <tbody>
            {elements}
          </tbody>
        </table>
 
        <Modal
          title={this.state.requiredItem.name}
          key={this.state.requiredItem.key}
          saveData={this.saveData}
          id="exampleModal"
        />
 
      </div>
    );
  }
}
/* return (
  <div>
     <table className="table table-striped">
         <tbody>                 
              </tbody>
          </table>
      </div> */
EditData.defaultProps = { Content: MockData }
 
export default EditData;
