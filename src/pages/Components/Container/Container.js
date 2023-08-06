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
  let dummy = `
What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
`

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
      <Documents title={"Test Doc"} simiScore={"89%"} link={"https://www.google.com"} content={dummy} />
      <Search setClicked={setClicked} setResponse={setResponse} responseTime={responseTime} setResponseTime={setResponseTime} />

    </>
  );
}
// setGpt3={setGpt3} setGpt4={setGpt4} setGpt3Time={setGpt3Time} setGpt4Time={setGpt4Time}