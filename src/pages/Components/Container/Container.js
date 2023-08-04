import { useEffect, useState } from "react";
import style from "../../../styles/Container.module.css";
import Card from "../Card/Card";
import Search from "../Search/Search";
import Landing from "../Landing/Landing";

export default function Container() {
  const [clicked, setClicked] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [gpt4, setGpt4] = useState("");
  const [gpt4Time, setGpt4Time] = useState("");
  const [gpt3, setGpt3] = useState("");
  const [gpt3Time, setGpt3Time] = useState("");

  //###################################################### Testing prompt 
  useEffect(() => {
    console.log(prompt);
  }, [prompt])
  return (
    <>
      {gpt4 === "" && gpt3 === "" ? <Landing /> :

        <div className={style.container}>
          <Card title={"GPT 4"} time={gpt4Time} response={gpt4} />
          <Card title={"GPT 3.5 turbo"} time={gpt3Time} response={gpt3} />

        </div>
      }
      <Search prompt={prompt} setPrompt={setPrompt} setClicked={setClicked} setGpt3={setGpt3} setGpt4={setGpt4} setGpt3Time={setGpt3Time} setGpt4Time={setGpt4Time} />

    </>
  );
}
