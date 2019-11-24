import React, { useState } from 'react';

const defaultPlaceholder = 'Введите ваше сообщение боту';

export default function FormControls({
  sendMessage,
  isDisabled
}) {
  const [userInput, setUserInput] = useState('');
  const [placeholder, setPlaceholder] = useState(defaultPlaceholder);

  const inputHandler = (e) => {
    setUserInput(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (userInput && typeof userInput === 'string') {
      sendMessage(userInput);
      setUserInput('');
      setPlaceholder(defaultPlaceholder)
    } else {
      setPlaceholder('Не отправляйте боту пустые сообщения')
    }
  }

  const enterPressHandler = (e) => {
    if (e.key === 'Enter') {
      submitHandler(e);
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <textarea
        className="chat-input"
        onChange={inputHandler}
        disabled={isDisabled}
        value={userInput}
        onKeyPress={enterPressHandler}
        placeholder={placeholder}
      />
      <div>
        <button
          type='submit'
          disabled={isDisabled}
          className="btn --submit"
        >
          Отправить
        </button>
      </div>
    </form>
  )
}
