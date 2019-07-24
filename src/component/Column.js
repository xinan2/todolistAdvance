import React from 'react';
import TaskCountBox from "./TaskCountBox";
import TaskBody from './TaskBody';


export default class Column extends React.Component {
  render() {
    return (
        <div className="col-md-4 col-sm-12 col-xs-12" onDrop={e => this.props.onDrop(e, this.props.status)} onDragOver={e => this.props.onDragOver(e)} >
          <div className="header">
            <div className="row h-100 justify-content-between align-items-center">
              <div className="col">
                <h4 className="header-title">{this.props.title}</h4>
              </div>
              <div className="col d-flex flex-row-reverse">
                <TaskCountBox count={this.props.items.length} />
              </div>
            </div>
          </div>
          {this.props.items && this.props.items.map((item) => <TaskBody content={item} key={item.id} onDrag={this.props.onDrag}/>)}
        </div>
    )
  }
}
