import React, { useState } from 'react';

export default function FormControls({
  sendMessage,
  isDisabled
}) {
  const [userInput, setUserInput] = useState('');

  const inputHandler = (e) => {
    setUserInput(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    sendMessage(userInput);
  }

  return (
    <div className="chat-controls">
      <form onSubmit={submitHandler}>
        <input
          onChange={inputHandler}
          disabled={isDisabled}
          value={userInput}
          type="text"
        />
        <div className="btn --submit">
          <button
            type='submit'
            disabled={isDisabled}
          >
            Отправить
          </button>
        </div>
      </form>
    </div>
  )
}
