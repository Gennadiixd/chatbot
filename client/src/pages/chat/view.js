import React, { useEffect, useState } from 'react';

import { useInitChat, sendEventReady, sendMessage } from '../../services/ChatService';

export default function View() {
	const [chatHistory, setChatHistory] = useState({});
	const { loading, cuid, infName } = useInitChat();

	const [userInput, setUserInput] = useState('');
	const [botMessage, setBotMessage] = useState('');


	const getReady = () => {
		sendEventReady().then(data => setChatHistory(data.botMessage));
	}

	const inputHandler = (e) => {
		setUserInput(e.target.value);
	}

	const submitHandler = (e) => {
		e.preventDefault();
		sendMessage(userInput).then(data => setBotMessage(data.botMessage));
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

			<form
				onSubmit={submitHandler}
			>
				<div>{botMessage}</div>
				<input
					onChange={inputHandler}
					value={userInput}
					type="text"
				/>
				<button
					type='submit'
				>
					Отправить
				</button>
			</form>
		</div>
	)
}
