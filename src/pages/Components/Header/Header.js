
import styles from "@/styles/Header.module.css"
import { Cairo } from "next/font/google";
const cairo = Cairo({ subsets: ["latin"] });

export default function Header() {
    return <div className={`${styles.headMain} ${cairo.className}`}>
        <h1>Model Evaluation</h1>
    </div>
}

