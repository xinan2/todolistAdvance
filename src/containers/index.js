import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchInitialData, addItem, dropItem, removeItem } from '../actions'
import '../css/bootstrap.min.css'
import TaskCountBox from '../component/TaskCountBox'
import Column from '../component/Column'
import { mapStatus } from '../utils/constant'

class Main extends Component {
  state = {
    inputValue: '',
    draggedTask: {}
  };

  componentDidMount() {
    this.props.fetchInitialData(() => {

    });
  }

  addItem = (e) => {
    e.preventDefault();
    this.props.addItem({
      id: this.props.todos.length,
      text: this.state.inputValue,
      status: 0,
      order: this.props.todos.length
    });
    this.setState({ inputValue: '' });
  };

  onChange = (e) => this.setState({ inputValue: e.target.value });

  onDrag = (e, items) => {
    e.preventDefault();
    this.setState({ draggedTask: items });
  };

  onDrop = (e, column) => {
    console.log('onDrop: ', this.state.draggedTask);
    this.props.removeItem(this.state.draggedTask);
    this.props.dropItem({
      id: this.state.draggedTask.id,
      text: this.state.draggedTask.text,
      status: parseInt(column)
    })
  };

  onDragOver = (e) => e.preventDefault();

  renderColumn = () => {
    //THIS NEED MORE OPTIMIZATION, NOT DYNAMIC ENOUGH
    return Object.keys(mapStatus).map((key) => {
      if (key === '0') return <Column items={this.props.todos} status={key} title={mapStatus[key]} onDrop={this.onDrop} onDragOver={this.onDragOver} onDrag={this.onDrag} />;
      if (key === '1') return <Column items={this.props.inProgress} status={key} title={mapStatus[key]} onDrop={this.onDrop} onDragOver={this.onDragOver} onDrag={this.onDrag} />;
      if (key === '2') return <Column items={this.props.done} status={key} title={mapStatus[key]} onDrop={this.onDrop} onDragOver={this.onDragOver} onDrag={this.onDrag} />;
    })
  };

  render() {
    return (
        <div className="container-fluid bg">
          <div className="row justify-content-between top-margin">
            <div className="col-4 search-box">
              <form onSubmit={this.addItem}>
                <h3>Add Task</h3>
                <input type="text" className="txtbox-margin" value={this.state.inputValue} onChange={this.onChange} />
              </form>
            </div>
            <div className="col-4 d-flex flex-row-reverse">
              <TaskCountBox count={this.props.todos.length + this.props.inProgress.length + this.props.done.length}/>
            </div>
          </div>
          <div className="row">
            {this.renderColumn()}
            {/*<Column items={this.props.inProgress} onDrop={this.onDrop} onDragOver={this.onDragOver} onDrag={this.onDrag} />*/}
            {/*<Column items={this.props.done} onDrop={this.onDrop} onDragOver={this.onDragOver} onDrag={this.onDrag} />*/}
          </div>
        </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInitialData: (callback) => dispatch(fetchInitialData(callback)),
    addItem: (data) => dispatch(addItem(data)),
    dropItem: (data) => dispatch(dropItem(data)),
    removeItem: (data) => dispatch(removeItem(data))
  }
};

const mapStateToProps = ({ todos }) => {
  return {
    todos: todos.get('todo').toJS(),
    inProgress: todos.get('inProgress').toJS(),
    done: todos.get('done').toJS(),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
