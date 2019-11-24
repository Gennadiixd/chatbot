import React, { useState } from 'react';
import UserMessageContainer from './user-message-container';
import BotMessageContainer from './bot-message-container';

let id = 0;

export default function History({
  currentUserMessage,
  history,
}) {
  //TODO: implemet more adequate key generation
  const historyKeyGen = () => {
    return 'history' + id++;
  }

  return (
    <div className="history">
      {history.map((el) => {
        if (el.userMessage !== currentUserMessage) {
          return (
            <div
              className="history-item"
              key={historyKeyGen()}
            >
              <UserMessageContainer
                message={el.userMessage}
              />
              <BotMessageContainer
                message={el.botMessage}
              />
            </div>
          )
        }
      })}
    </div>
  )
}
