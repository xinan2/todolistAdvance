import React from 'react';

const taskBody = ({ content }) => {
  return (
      <div className="task-body" draggable key={content.id}>
        <h6 className="">{content.text}</h6>
      </div>
  );
};

export default taskBody

