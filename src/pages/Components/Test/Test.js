import styles from "@/styles/Test.module.css"
import { Cairo } from "next/font/google";
import { useState } from "react";
const cairo = Cairo({ subsets: ["latin"] });

export default function Test() {
    const [data, setData] = useState("");
    const [prompt, setPrompt] = useState("");
    var ws = new WebSocket("ws://localhost:8000/ws");
    ws.onmessage = function (event) {
        setData((prev) => prev + " " + event.data)
    };
    return <div className={`${styles.testMain} ${cairo.className}`}>
        <h1>Model Evaluation</h1>
        <input type="text" onChange={(e) => setPrompt(e.target.value)} />
        <p>{data}</p>
        <button onClick={() => ws.send(prompt)}>send</button>
    </div>
}