import React, { Component } from 'react';
import MockData from '../mock/countryRegionMock';
import TodoButton from './common/TodoButton';
import TodoInput from './common/TodoInput';
class Modal extends Component {
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.state = {
            title: props.title,
            key: props.key,
            id: props.id
        }
    }
 
    titleHandler(e) {
        this.setState({ title: e.target.value });
    }
    handleSave() {
        
        const item = {
            "key": this.state.key,
            "name": this.state.title
        };
        this.props.saveData(item)
    }
    render() {
 
        return (
            <div className="modal fade" id={this.state.id} >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{this.props.editTitle}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                            <div className="modal-body">
                            <p><span  className="modal-lable"></span><input id="editeditem" value={this.state.title} onChange={(e) => this.titleHandler(e)} /></p>
                            </div>
                        
                        <div className="modal-footer" data-dismiss="modal" type="button">
                            <TodoButton id="ok" onClick={() => this.handleSave()} name={this.props.Content.ok} />
                            <TodoButton name={this.props.Content.close} />
 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
Modal.defaultProps = { Content: MockData }
export default Modal;
