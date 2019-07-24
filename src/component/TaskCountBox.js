import React from 'react';

const taskCountBox = ({ count, className }) => {
  return (
      <div className={'task-box-count ' + className}>
        <span className="number-count">{count}</span>
        <p className="">TASKS</p>
      </div>
  );
};

export default taskCountBox

