import { useEffect, useState } from "react";
import style from "../../../styles/Container.module.css";
import Card from "../Card/Card";
import Search from "../Search/Search";
import Landing from "../Landing/Landing";
import Documents from "../Documents/Documents";
import Sidebar from "../Sidebar/Sidebar";
export default function Container() {

  const [response, setResponse] = useState({ gpt4: "", gpt3: "", llama: "", falcon: "" })
  const [responseTime, setResponseTime] = useState({ gpt4: "", gpt3: "", llama: "", falcon: "" });
  const [doc, setDoc] = useState([{ title: "test", "similarity-score": "89%", "pdf-link": "test link", content: "This is content" }]);
  const [docFlag, setButtonFlag] = useState(true);

  const [clicked, setClicked] = useState(false);
  return (
    <>

      {response.gpt4 === "" && response.gpt3 === "" && response.llama === "" && response.falcon === "" && !clicked ? <Landing /> :

        <div className={style.container}>
          <Card title={"GPT 4"} time={responseTime.gpt4} response={response.gpt4} />
          <Card title={"GPT 3.5 turbo"} time={responseTime.gpt3} response={response.gpt3} />
          <Card title={"Llama"} time={responseTime.llama} response={response.llama} />
          <Card title={"Falcon"} time={responseTime.falcon} response={response.falcon} />

        </div>
      }
      <Documents buttonFlag={docFlag} doc={doc} />
      <Search setButtonFlag={setButtonFlag} setDoc={setDoc} setClicked={setClicked} setResponse={setResponse} responseTime={responseTime} setResponseTime={setResponseTime} />

    </>
  );
}
//title={"Test Doc"} simiScore={"89%"} link={"https://www.google.com"} content={dummy}