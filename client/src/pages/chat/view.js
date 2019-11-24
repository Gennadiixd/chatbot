import React, { useState } from 'react';

import UserMessageContainer from './components/user-message-container';
import BotMessageContainer from './components/bot-message-container';
import FormControls from './components/form-controls';
import ChatStart from './components/chat-start';

export default function View({
	currentUserMessage,
	currentBotMessage,
	sendEventReady,
	isInitialized,
	sendMessage,
}) {
	return (
		<div className="chat-container">
			<div className="chat-window">
				<UserMessageContainer
					message={currentUserMessage}
				/>
				<BotMessageContainer
					message={currentBotMessage}
				/>
			</div>
			<FormControls
				sendMessage={sendMessage}
				isDisabled={!currentBotMessage}
			/>
			<ChatStart
				isDisabled={isInitialized}
				getReady={sendEventReady}
			/>
		</div>
	)
}
