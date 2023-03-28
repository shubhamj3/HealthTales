import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import env from 'dotenv'
import { Configuration, OpenAIApi } from 'openai'

const app = express()

env.config()

app.use(cors())
app.use(bodyParser.json())
const port = 3094

// Connect to OpenAI API
const configuration = new Configuration({
    organization: "org-mdiQmmwUfEmlMzJRr9c2ETUJ",
    apiKey: process.env.OPENAI_API_KEY, // for testing purposes
});
const openai = new OpenAIApi(configuration)

// listening
app.listen(port, () => console.log(`service listening at http://localhost:${port}`))

// dummy route to test
app.get('/', (req, res) => {
    res.send("Hello World!")
})

// post route for making request
app.post('/', async (req, res) => {
    let { message } = req.body
    console.log("here is the messege below!!!!!")
    console.log(message);
    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            // prompt: `${message}`,
            prompt: `${message}`,
            max_tokens: 256,
            top_p: 1.0,
            temperature: 0.6,
        })
        res.json({ message: response.data.choices[0].text })
        console.log(response.data.choices[0].text)
        // message = null;
        // console.log(response.data.choices[1].text)
        // message='';
        // console.log(message);

    } catch (error) {
        console.log(error)
        res.send(error).status(400)
    }
})
