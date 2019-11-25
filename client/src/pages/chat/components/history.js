import React from 'react';
import UserMessageContainer from './user-message-container';
import BotMessageContainer from './bot-message-container';

let id = 0;

export default function History({ history }) {
  //TODO: implemet more adequate key generation

  const historyKeyGen = () => {
    return 'history' + id++;
  }

  return (
    <div className="history">
      {history.map((el) => {
        return (
          <div
            className="history-item"
            key={historyKeyGen()}
          >
            <UserMessageContainer
              messageObject={el.userMessage}
            />
            <BotMessageContainer
              messageObject={el.botMessage}
            />
          </div>
        )
      })}
    </div>
  )
}
