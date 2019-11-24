import React, { useRef, useEffect } from 'react';

import History from './history';
import UserMessageContainer from './user-message-container';
import BotMessageContainer from './bot-message-container';

export default function ChatWindow({
  currentUserMessage,
  currentBotMessage,
  history,
}) {
  useEffect(() => {
    //TODO:scroll to bottom of window
  }, []);

  const mainRef = useRef(null);

  return (
    <div
      className="chat-window"
    >
      <History
        messageObject={currentUserMessage}
        history={history}
      />
      {currentUserMessage && (
        <UserMessageContainer
          messageObject={currentUserMessage}
        />
      )}
      {currentBotMessage && (
        <BotMessageContainer
          messageObject={currentBotMessage}
        />
      )}
    </div>
  )
}
