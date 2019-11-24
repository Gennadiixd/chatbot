import React, { useState } from 'react';

import UserMessageContainer from './components/user-message-container';
import BotMessageContainer from './components/bot-message-container';
import FormControls from './components/form-controls';
import ChatStart from './components/chat-start';
import History from './components/history';

export default function View({
	currentUserMessage,
	currentBotMessage,
	sendEventReady,
	isInitialized,
	sendMessage,
	history
}) {
	return (
		<div className="chat-container">
			<div className="chat-window">
				<div className="history">
					<History
						currentUserMessage={currentUserMessage}
						history={history}
					/>
				</div>
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
				isVisible={!currentBotMessage}
				isInitialized={isInitialized}
				getReady={sendEventReady}
			/>
		</div>
	)
}
