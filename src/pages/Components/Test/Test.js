import styles from "@/styles/Test.module.css"
import { Cairo } from "next/font/google";
import { useState } from "react";
const cairo = Cairo({ subsets: ["latin"] });

export default function Test() {
    const [data, setData] = useState("");
    var ws = new WebSocket("ws://localhost:8000/ws");
    ws.onmessage = function (event) {
        setData((prev) => prev + " " + event.data)
    };
    return <div className={`${styles.testMain} ${cairo.className}`}>
        <h1>Model Evaluation</h1>
        <p>{data}</p>
        <button onClick={() => ws.send("this is test for the websocket api testing message")}>send</button>
    </div>
}