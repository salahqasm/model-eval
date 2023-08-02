import { useState } from "react"
import styles from "../../../styles/Search.module.css"
import { Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'] })

export default function Search() {

    return <div className={styles.mainSearch}>
        <input type="text" name="text" className={styles.searchBar} placeholder="Prompt" />
        <button className={`${styles.searchButton} ${raleway.className}`}>
            <span >
                Send
            </span>
        </button>
    </div>
}