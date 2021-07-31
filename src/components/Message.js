import React from 'react';
import FlashMessage from 'react-flash-message'

function Message (props) {
  <FlashMessage duration={5000}>
    <strong>{props.message}</strong>
  </FlashMessage>
}

export default Message;