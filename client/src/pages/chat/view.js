import React, { useEffect, useState } from 'react';

import { useInitChat, useEventReady } from '../../services/ChatService';

export default function View() {
	const [chatHistory, setChatHistory] = useState({});
	const { loading, cuid, infName } = useInitChat();

	return (
		<div>
			<button
				onClick={() => setChatHistory(
					// ...chatHistory,
					useEventReady()
				)}
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
