import { memo, useEffect, useState } from "react";
import styles from "../../../styles/Search.module.css";
import { Raleway } from "next/font/google";

import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const raleway = Raleway({ subsets: ["latin"] });

function Search({ setResponse, responseTime, setClicked, setResponseTime }) {

  const [prompt, setPrompt] = useState("");
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

  // To make the button disabled untill all 4 llms ends the response 
  useEffect(() => {
    if (responseTime.gpt3 && responseTime.gpt4 && responseTime.llama && responseTime.falcon)
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

    } else if (data["ErrorReplicate"]) {

      setResponse(prevResponse => ({
        ...prevResponse,
        falcon: prevResponse.falcon + data["ErrorReplicate"].message,
        llama: prevResponse.llama + data["ErrorReplicate"].message
      }));

    } else if (data["ErrorFalcon"]) {

      setResponse(prevResponse => ({
        ...prevResponse,
        falcon: prevResponse.falcon + data["ErrorFalcon"].message,
      }));

    } else if (data["Error"]) {
      NotificationManager.error('An error occurred while connecting to the server!', '', 5000, () => {
        alert('callback');
      });
    } else if (data["FormatError"]) {
      NotificationManager.error('Error processing this prompt', '', 5000, () => {
        alert('callback');
      });
      setButton(false);
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
    if (ws.readyState === WebSocket.OPEN) {
      setButton(true)
      setClicked(true);
      ws.send(prompt);
      setResponse(prevResponse => ({
        ...prevResponse,
        gpt4: "",
        gpt3: "",
        llama: "",
        falcon: ""
      }));
      setResponseTime({
        gpt4: "",
        gpt3: "",
        llama: "",
        falcon: ""
      })
    } else {
      NotificationManager.warning('', 'Connection is not established yet!', 3000);
      setButton(true);
      setTimeout(() => {
        setButton(false)
      }, 3000);
    }

  }
  return (
    <div className={styles.mainSearch}>
      <NotificationContainer />

      <input
        type="text"
        name="prompt"
        className={styles.searchBar}
        placeholder="Prompt"
        onChange={(e) => setPrompt(e.target.value)}
        // disabled={inputDis}
        autocomplete="off"
      />
      <button className={styles.searchButton} disabled={prompt === "" || button} onClick={() => onClickHandler()}></button>
    </div>
  );
}

export default memo(Search);