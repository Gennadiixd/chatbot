export const initRequest = async ({ API, API_EXTERNAL, UUID }) => (
    fetch(`${API}/chat/init`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            api: API_EXTERNAL,
            uuid: UUID
        })
    })
)

export const eventRequestReady = async ({ API, API_EXTERNAL, CUID }) => (
    fetch(`${API}/chat/event-ready`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            api: API_EXTERNAL,
            cuid: CUID
        })
    })
)