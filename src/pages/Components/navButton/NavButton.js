import styles from "../../../styles/NavButton.module.css"
export default function NavButton({ source }) {
    return <div className={styles.mainDiv}>
        <p>{source}</p>
    </div>
}