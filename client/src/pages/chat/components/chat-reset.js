import React from 'react';

export default function ChatReset({ resetChat }) {
  return (
    <div className="chat-reset">
      <button onClick={resetChat}>
        reset
      </button>
    </div>
  )
}
