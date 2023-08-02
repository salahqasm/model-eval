import styles from "../../../styles/Card.module.css";

export default function Card(props) {
  return (
    <div className={styles.card}>
      <h4>{props.result.result}</h4>
      <p>Your Answer From [ {props.result.source} ] is: </p>
    </div>
  );
}
