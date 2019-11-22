import React, { useEffect } from 'react';

import { useInitChat } from '../../services/ChatService';

export default function View() {
	const { loading, initInfo } = useInitChat();
	console.log(initInfo);
	return (
		<div>
			{loading && <div>Loading</div>}
		</div>
	)
}
