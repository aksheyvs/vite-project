import { useRef, useState } from "react";
import "./App.css";
import { GoogleGenerativeAI } from "@google/generative-ai";

function App() {
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_APP_API_KEY);

    console.log(import.meta.env.VITE_APP_API_KEY);

    const [text, setText] = useState("");

    async function run() {
        try {
            const model = genAI.getGenerativeModel({ model: "gemini-pro" });

            const prompt = "Write a story about a magic backpack.";

            const result = await model.generateContent(prompt);

            const response = result.response;

            const text = response.text();

            console.log(text);

            setText(text);
        } catch (error) {
            console.error("Error occurred:", error.message);
        }
    }

    return (
        <>
            <h1>hello</h1>

            <button onClick={run}>make text</button>
            <pre>{text}</pre>
        </>
    );
}

export default App;
