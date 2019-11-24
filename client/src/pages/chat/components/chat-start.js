import React from 'react'

export default function ChatStart({
  isInitialized,
  getReady,
  isVisible
}) {
  return (
    <div className="start">
      {isInitialized && isVisible && (
        <button
          className="btn --start"
          onClick={getReady}
        >
          Начать чат
        </button>
      )}
    </div>
  )
}
