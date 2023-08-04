import { useEffect, useState } from "react";
import styles from "../../../styles/Search.module.css";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

export default function Search({ prompt, setPrompt, setGpt3, setGpt4, setClicked, setGpt4Time, setGpt3Time }) {
  const [button, setButton] = useState(false);

  let ws = new WebSocket("ws://localhost:8000/ws");

  ws.onmessage = function (event) {
    let data = JSON.parse(event.data);

    if (data["ErrorGpt"]) {
      setGpt3(prev => prev + data["ErrorGpt"].message);
      setGpt4(prev => prev + data["ErrorGpt"].message);

    } else if (data["ErrorLlama"]) {

    } else if (data["ErrorFalcon"]) {

    } else if (data["Error"]) {

    } else if (data["FormatError"]) {

    } else if (data["gpt-3.5-turbo"]) {

      setGpt3(prev => prev + data["gpt-3.5-turbo"].message);

    } else if (data["gpt-4"]) {

      setGpt4(prev => prev + data["gpt-4"].message);

    } else if (data["llama"]) {

    } else if (data["falcon"]) {

    } else if (data["resTime"]) {
      let time = data["resTime"]
      if (time["modelName"] === "gpt-3.5-turbo") {
        setGpt3Time(time["time"]);
        setButton(false);
      } else if (time["modelName"] === "gpt-4") {
        setGpt4Time(time["time"]);
        setButton(false);
      } else if (data["resTime"]["modelName"] === "llama") {

        setButton(false);
      } else if (data["resTime"]["modelName"] === "falcon") {

        setButton(false);
      }
    }

  };

  async function onClickHandler() {
    if (ws.OPEN) {
      setClicked(true);
      setButton(true)
      ws.send(prompt);
      setGpt3((prev) => prev + "\n• ")
    }

  }
  return (
    <div className={styles.mainSearch}>
      <input
        type="text"
        name="prompt"
        className={styles.searchBar}
        placeholder="Prompt"
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button className={styles.searchButton} disabled={prompt === "" || button} onClick={() => onClickHandler()}></button>
    </div>
  );
}
