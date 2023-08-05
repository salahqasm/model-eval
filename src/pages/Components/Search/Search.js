import { useEffect, useState } from "react";
import styles from "../../../styles/Search.module.css";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

export default function Search({ prompt, setPrompt, setResponse, responseTime, setResponseTime }) {
  const [button, setButton] = useState(true);
  const [inputDis, setInputDis] = useState(true);
  let ws = new WebSocket("ws://localhost:8000/ws");

  // To make the input disabled untill the connection is successfuly made
  useEffect(() => {
    console.log(ws.readyState);
    if (ws.OPEN) {
      setInputDis(false);
      setButton(false);
    }
  }, [ws.OPEN])

  // To make the button disabled untill all 4 llms ends the response && responseTime.llama && responseTime.falcon
  useEffect(() => {
    if (responseTime.gpt3 && responseTime.gpt4)
      setButton(false)
  }, [responseTime])

  ws.onmessage = function (event) {
    let data = JSON.parse(event.data);

    if (data["ErrorGpt"]) {

      setResponse(prevResponse => ({
        ...prevResponse,
        gpt4: prevResponse.gpt4 + data["ErrorGpt"].message,
        gpt3: prevResponse.gpt3 + data["ErrorGpt"].message
      }));

    } else if (data["ErrorLlama"]) {

      setResponse(prevResponse => ({
        ...prevResponse,
        llama: prevResponse.llama + data["ErrorLlama"].message,

      }));

    } else if (data["ErrorFalcon"]) {

      setResponse(prevResponse => ({
        ...prevResponse,
        falcon: prevResponse.falcon + data["ErrorFalcon"].message,
      }));

    } else if (data["Error"]) {

    } else if (data["FormatError"]) {

    } else if (data["gpt-3.5-turbo"]) {

      setResponse(prevResponse => ({
        ...prevResponse,
        gpt3: prevResponse.gpt3 + data["gpt-3.5-turbo"].message,

      }));

    } else if (data["gpt-4"]) {

      setResponse(prevResponse => ({
        ...prevResponse,
        gpt4: prevResponse.gpt4 + data["gpt-4"].message,

      }));

    } else if (data["llama"]) {

      setResponse(prevResponse => ({
        ...prevResponse,
        llama: prevResponse.llama + data["llama"].message,

      }));

    } else if (data["falcon"]) {

      setResponse(prevResponse => ({
        ...prevResponse,
        falcon: prevResponse.falcon + data["falcon"].message,
      }));

    } else if (data["resTime"]) {

      let time = data["resTime"]
      if (time["modelName"] === "gpt-3.5-turbo") {

        setResponseTime(prevResponse => ({
          ...prevResponse,
          gpt3: time["time"]

        }));


      } else if (time["modelName"] === "gpt-4") {

        setResponseTime(prevResponse => ({
          ...prevResponse,
          gpt4: time["time"]
        }));


      } else if (data["resTime"]["modelName"] === "llama") {

        setResponseTime(prevResponse => ({
          ...prevResponse,
          llama: time["time"]
        }));


      } else if (data["resTime"]["modelName"] === "falcon") {

        setResponseTime(prevResponse => ({
          ...prevResponse,
          falcon: time["time"]

        }));

      }
    }

  };

  async function onClickHandler() {
    if (ws.readyState !== 0) {
      setButton(true)
      ws.send(prompt);
      setResponse(prevResponse => ({
        ...prevResponse,
        gpt4: "\n- ",
        gpt3: "\n- ",
        llama: "\n- ",
        falcon: "\n- "
      }));
      setResponseTime({
        gpt4: "",
        gpt3: "",
        llama: "",
        falcon: ""
      })
    } else {
      window.alert("please wait untill the connection is ready")
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
        // disabled={inputDis}
        autocomplete="off"
      />
      <button className={styles.searchButton} disabled={prompt === "" || button } onClick={() => onClickHandler()}></button>
    </div>
  );
}
