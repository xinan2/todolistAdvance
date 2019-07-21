import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchInitialData } from '../actions';

class Main extends Component {
  componentDidMount() {
    this.props.fetchInitialData();
  }

  render() {
    console.log('props: ', this.props.todos);
    return (
        <div>Hello world!</div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInitialData: (data) => dispatch(fetchInitialData())
  }
};

const mapStateToProps = ({ todos }) => {
  return {
    todos: todos.todo,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
