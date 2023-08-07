import styles from "@/styles/Landing.module.css"

export default function Landing() {
    function onclickHandler() {

    }

    return <div className={styles.main}>
        <p className={styles.msg}>
            This website is meant to evaluate LLMs : Gpt4, Gpt3, Llama and Falcon.<br />
            Please enter a prompt and press on send button.</p>

    </div>
}