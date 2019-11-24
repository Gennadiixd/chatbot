import React, { Fragment } from 'react'

export default function ChatStart({
  isDisabled,
  getReady
}) {
  return (
    <Fragment>
      {isDisabled && (
        <div className="btn">
          <button onClick={getReady}>
            Начать чат
					</button>
        </div>
      )}
    </Fragment>
  )
}
