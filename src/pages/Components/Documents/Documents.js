import styles from "@/styles/Document.module.css"
import { useState } from "react";
// { title, simiScore, link, content, }
function Documents({ doc, buttonFlag }) {
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
        {!buttonFlag && <button className={styles.openbtn} onClick={openNav}></button>}
        <div className={styles.slide} id="slide">
            <button className={styles.closebtn} onClick={closeNav}></button>

            {doc.map((elem) =>
                <div className={styles.doc}>
                    <h3 className={styles.title}><span>Title: {elem.title}</span> - <span>Score: {elem["similarity-score"]}</span></h3>
                    <p className={styles.content}>
                        {elem.content?.length > 200 && flag ? <>{elem.content.substr(0, 200)}... <span className={styles.show} onClick={() => setFlag(false)}>Show More</span></> : <>{elem.content} <span className={styles.show} onClick={() => { setFlag(true) }}>Show less</span></>}
                    </p>
                    <br />
                    <span><strong>Reference: </strong><a href={elem["pdf-link"]} target="_blank">{elem["pdf-link"]?.length > 100 ? elem["pdf-link"].substr(0, 100) + "..." : elem["pdf-link"]}</a></span>
                </div>
            )
            }
        </div>
    </>
}

export default Documents;