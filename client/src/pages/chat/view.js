import React, { useEffect, useState } from 'react';

import { useInitChat, sendEventReady } from '../../services/ChatService';

export default function View() {
	const [chatHistory, setChatHistory] = useState({});
	const { loading, cuid, infName } = useInitChat();

	const getReady = () => {
		sendEventReady().then(data => setChatHistory(data.message))
	}

	return (
		<div>
			<button
				onClick={getReady}
			>
				Погнали
			</button>

			<button
				onClick={() => console.log(chatHistory)}
			>
				Логи
			</button>
		</div>
	)
}
