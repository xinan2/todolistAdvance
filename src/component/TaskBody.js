import React from 'react';

export default class taskBody extends React.Component {
  render() {
    const { content } = this.props;
    return (
        <div className="task-body" draggable key={content.id} onDrag={e => this.props.onDrag(e, content)}>
          <h6 className="">{content.text}</h6>
        </div>
    );
  }
};

