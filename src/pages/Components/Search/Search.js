import { useState } from "react"
import styles from "../../../styles/Search.module.css"
export default function Search() {

    return <>
        <input type="text" name="text" className={styles.searchBar} placeholder="Prompt" />
        <button className={styles.searchButton}>
            <span>
                Search
            </span>
        </button>
    </>
}