import React from 'react';

export default function ChatReset({
  isVisible,
  resetChat,
}) {
  if (isVisible) return null;

  return (
    <div className="chat-reset">
      <button
        onClick={resetChat}
        className="btn"
      >
        Reset
      </button>
    </div>
  )
}
