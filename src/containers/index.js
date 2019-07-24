import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchInitialData } from '../actions'
import '../css/bootstrap.min.css'
import TaskCountBox from '../component/taskCountBox'
import TaskBody from '../component/taskBody'

class Main extends Component {
  componentDidMount() {
    this.props.fetchInitialData();
  }

  onDrop = (e, title) => {
    console.log('you drop it here: ', e.clientX, e.clientY, title);
  };

  onDragOver = (e) => {
    e.preventDefault();
  };

  onKlik = (e) => {
    console.log('position: ', e.getClientRects());
  };

  render() {
    console.log('props: ', this.props.todos);
    return (
        <div className="container-fluid bg">
          <div className="row justify-content-between top-margin">
            <div className="col-4 search-box">
              <h3>Add Task</h3>
              <input type="text" className="txtbox-margin" />
            </div>
            <div className="col-4 d-flex flex-row-reverse">
              <TaskCountBox count={1}/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-12 col-xs-12" onDrop={e => this.onDrop(e, 'To Do')} onDragOver={e => this.onDragOver(e)} >
              <div className="header">
                <div className="row h-100 justify-content-between align-items-center">
                  <div className="col">
                      <h4 className="header-title">To Do</h4>
                  </div>
                  <div className="col d-flex flex-row-reverse">
                    <TaskCountBox className="" count={this.props.todos.length}/>
                  </div>
                </div>
              </div>
              {this.props.todos && this.props.todos.map((item) => <TaskBody content={item} />)}
            </div>

            <div className="col-md-4 col-sm-12 col-xs-12" onDrop={e => this.onDrop(e, 'In Progress')} onDragOver={e => this.onDragOver(e)} >
              <div className="header">
                <div className="row h-100 justify-content-between align-items-center">
                  <div className="col">
                    <h4 className="header-title">To Do</h4>
                  </div>
                  <div className="col d-flex flex-row-reverse">
                    <TaskCountBox className="" count={1}/>
                  </div>
                </div>
              </div>
              <div className="task-body" draggable onClick={e => this.onKlik(e)}>
                <h6 className="">Write a cool JS Library</h6>
              </div>
              <div className="task-body" draggable>
                <h6 className="">Write a cool JS Library</h6>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12">
              Hi
            </div>
          </div>
        </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInitialData: () => dispatch(fetchInitialData())
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
