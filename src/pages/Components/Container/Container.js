import { useEffect, useState } from "react";
import style from "../../../styles/Container.module.css";
import Card from "../Card/Card";
import Search from "../Search/Search";
import Landing from "../Landing/Landing";

export default function Container() {
  
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState({ gpt4: "", gpt3: "", llama: "", falcon: "" })
  const [responseTime, setResponseTime] = useState({ gpt4: "", gpt3: "", llama: "", falcon: "" });


  return (
    <>
      {response.gpt4 === "" && response.gpt3 === "" ? <Landing /> :

        <div className={style.container}>
          <Card title={"GPT 4"} time={responseTime.gpt4} response={response.gpt4} />
          <Card title={"GPT 3.5 turbo"} time={responseTime.gpt3} response={response.gpt3} />
          <Card title={"Llama"} time={responseTime.llama} response={response.llama} />
          <Card title={"Falcon"} time={responseTime.falcon} response={response.falcon} />

        </div>
      }
      <Search prompt={prompt} setPrompt={setPrompt} setResponse={setResponse} responseTime={responseTime} setResponseTime={setResponseTime} />

    </>
  );
}
// setGpt3={setGpt3} setGpt4={setGpt4} setGpt3Time={setGpt3Time} setGpt4Time={setGpt4Time}