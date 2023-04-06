import React, {FC} from 'react';



const ErrorText = ({errorMessage, noPadding}) => {
  if (!errorMessage) {
    return null
  }
  return (
    <a href="#">
      <p
        fontFamily="normal"
        color="#D2232A"
        style={{
            marginTop: noPadding ? 0 : 10,
            marginLeft: noPadding ? 0 : 10,
        }}
        >
        {errorMessage}
      </p>
    </a>
  );
};

export default ErrorText
