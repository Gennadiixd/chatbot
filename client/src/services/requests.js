export const initRequest = async ({ API, API_EXTERNAL, uuid }) => (
    fetch(`${API}/chat/init`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            api: API_EXTERNAL,
            uuid: uuid
        })
    })
)

export const eventRequestReady = async ({ API, API_EXTERNAL, cuid }) => (
    fetch(`${API}/chat/event-ready`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            api: API_EXTERNAL,
            cuid: cuid
        })
    })
)