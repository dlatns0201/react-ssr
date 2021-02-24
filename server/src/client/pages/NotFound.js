import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.status = 404;

  return (
    <div>
      404 Not Found
    </div>
  )
}

export default NotFoundPage;