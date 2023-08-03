import { useState } from "react";
import style from "../../../styles/Container.module.css";
import NavButton from "../navButton/NavButton";

export default function Container() {
  const [isSelected, setIsSelected] = useState({ source: "", result: "" });

  function changeSelect(r) {
    setIsSelected({ source: r.source, result: r.result });
  }
  //   dummy data
  const results = [
    { source: "gpt-4", result: "answer" },
    { source: "gpt-3.5 turbo", result: "answer" },
    { source: "Llama-2-70b-chat", result: "answer" },
    { source: "Falcon-40-instruct", result: "answer" },
  ];

  return (
    <>
      <div className={style.container}>
        <ul className={style.list}>
          {results.map((res) => (
            <li onClick={() => changeSelect(res)}>
              <NavButton source={res.source} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
