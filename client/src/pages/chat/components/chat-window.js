import React, { useRef, useEffect } from 'react';

import History from './history';

export default function ChatWindow({
  history,
}) {
  useEffect(() => {
    //TODO: looks like hack, research more about
    mainRef.current.scrollTop = mainRef.current.scrollHeight;
  });

  const mainRef = useRef(null);

  return (
    <div
      className="chat-window"
      ref={mainRef}
    >
      <History
        history={history}
      />
    </div>
  )
}
