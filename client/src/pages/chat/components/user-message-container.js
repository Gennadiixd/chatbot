import React from 'react';
import UserIcon from '../../../components/user-icon';

export default function UserMessageContainer({ message }) {
  return (
    <div className="message-container">
      {message && (
        <div>·</div>
      )}
      <div className="message --left">
        <div>{message}</div>
      </div>
      {message && (
        <div className="icon"><UserIcon /></div>
      )}
    </div>
  )
}
