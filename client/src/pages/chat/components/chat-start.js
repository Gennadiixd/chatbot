import React from 'react'

export default function ChatStart({
  isInitialized,
  getReady,
  isVisible
}) {
  return (
    <div className="start">
      {isInitialized && isVisible &&  (
        <div className="btn --start">
          <button onClick={getReady}>
            Начать чат
					</button>
        </div>
      )}
    </div>
  )
}
