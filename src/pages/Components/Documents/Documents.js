import styles from "@/styles/Document.module.css"
import { useState } from "react";
function Documents({ title, simiScore, link, content, }) {
    const [flag, setFlag] = useState(true);
    function openNav() {
        let x = window.matchMedia("(max-width: 820px)")
        console.log(x.matches);
        if (!x.matches)
            document.getElementById("slide").style.width = "80%";
        else
            document.getElementById("slide").style.width = "100%";

    }
    function closeNav() {
        document.getElementById("slide").style.width = "0";
    }
    return <>
        <button className={styles.openbtn} onClick={openNav}></button>
        <div className={styles.slide} id="slide">
            <button className={styles.closebtn} onClick={closeNav}></button>

            <div className={styles.doc}>
                <h3 className={styles.title}><span>Title: {title}</span> - <span>Score: {simiScore}</span></h3>
                <p className={styles.content}>
                    {content?.length > 200 && flag ? <>{content.substr(0, 200)}... <span className={styles.show} onClick={() => setFlag(false)}>show more</span></> : <>{content} <span className={styles.show} onClick={() => { setFlag(true) }}>Show less</span></>}
                </p>
                <br />
                <span><strong>Reference: </strong><a href={link} target="_blank">{link?.length > 100 ? link.substr(0, 100) + "..." : link}</a></span>
            </div>
        </div>
    </>
}

export default Documents;