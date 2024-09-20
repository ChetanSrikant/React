import React from 'react'

const ErrorMessage = ({ items }) => {
  // Use strict equality (===) for comparison
  let emptyMessage = items.length === 0 ? <h3>I am still hungry</h3> : null;

  return (
    <div>
      {emptyMessage}
    </div>
  );
}

export default ErrorMessage;
