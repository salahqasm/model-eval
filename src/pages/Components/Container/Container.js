import styles from "../../../styles/Container.module.css";
import Card from "../Card/Card";

export default function Container() {
  const results = [
    { source: "vector-db", result: "answer" },
    { source: "gpt-4", result: "answer" },
    { source: "gpt-3.5 turbo", result: "answer" },
    { source: "Llama-2-70b-chat", result: "answer" },
    { source: "Falcon-40-instruct", result: "answer" },
  ];
  return (
    <>
      <div className={styles.Container}>
        //small boxes of the results //loop over 5 cards to display tiny boxes
        <ul>
          {results.map((s, r) => {
            <li>
              <Card source={s} result={r} />
            </li>;
          })}
        </ul>
        //selected card
        <Card />
      </div>
    </>
  );
}
