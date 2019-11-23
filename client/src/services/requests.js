const fetchSettings = {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        "Content-Type": 'application/json'
    },
}

export const initRequest = async ({ API, API_EXTERNAL, uuid }) => (
    fetch(`${API}/chat/init`, {
        ...fetchSettings,
        body: JSON.stringify({
            api: API_EXTERNAL,
            uuid: uuid
        })
    })
)

export const eventRequestReady = async ({ API, API_EXTERNAL, cuid }) => (
    fetch(`${API}/chat/event-ready`, {
        ...fetchSettings,
        body: JSON.stringify({
            api: API_EXTERNAL,
            cuid: cuid
        })
    })
)

export const requestMessage = async ({ API, API_EXTERNAL, cuid, userMessage }) => (
    fetch(`${API}/chat/message`, {
        ...fetchSettings,
        body: JSON.stringify({
            api: API_EXTERNAL,
            cuid: cuid,
            userMessage: userMessage,
        })
    })
)