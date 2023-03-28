export const fetchResponse = async (chat) => {
    try {
        console.log("Im from api.js: ", chat)
        const response = await fetch('http://localhost:3094', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: chat.map((message) => message.message).join("\n")
            })
        })

        const data = await response.json()
        console.log("From API.js", data)
        return data
    } catch (error) {
        console.log(error)
    }
}