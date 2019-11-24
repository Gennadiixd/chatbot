import React from 'react';

import FormControls from './components/form-controls';
import ChatStart from './components/chat-start';
import ChatWindow from './components/chat-window';
import ChatReset from './components/chat-reset';

export default function View({
	currentUserMessage,
	currentBotMessage,
	sendEventReady,
	isInitialized,
	sendMessage,
	resetChat,
	history,
}) {
	return (
		<div className="chat-container">
			<div className="chat">
				<ChatWindow
					currentUserMessage={currentUserMessage}
					currentBotMessage={currentBotMessage}
					history={history}
				/>
				<div className="chat-controls-container">
					<FormControls
						sendMessage={sendMessage}
						isDisabled={!currentBotMessage}
					/>
					<ChatStart
						isVisible={!currentBotMessage}
						isInitialized={isInitialized}
						getReady={sendEventReady}
					/>
					<ChatReset
						resetChat={resetChat}
						isVisible={!currentBotMessage}
					/>
				</div>
			</div>
		</div>
	)
}
