import React, { useEffect, useState } from 'react';

const API = process.env.API;
const UUID = process.env.UUID;

export function useInitChat() {
	const [loading, setLoading] = useState(false);
	const [initInfo, setInitInfo] = useState(null);

	useEffect(() => {
		async function init() {
			setLoading(true);
			const rawResponse = await fetch(`${API}/chat/init`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					"Content-Type": 'application/json'
				},
				body: JSON.stringify({
					'uuid': UUID
				})
			})

			const parsedResponse = await rawResponse.json();

			setLoading(false);
			setInitInfo(parsedResponse);
		}

		init();
	}, [])

	return { loading, initInfo }
}