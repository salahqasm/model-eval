import styles from "@/styles/Document.module.css"
import { useState } from "react";
import { Alegreya_Sans_SC } from "next/font/google";
const teko = Alegreya_Sans_SC({ weight: ["700"], subsets: ["latin"] });
function Documents({ doc, buttonFlag }) {
    const [flags, setFlags] = useState(Array(doc.length).fill(false));

    const handleShowMoreClick = (index) => {
        setFlags((prevFlags) => {
            const newFlags = [...prevFlags];
            newFlags[index] = !newFlags[index];
            return newFlags;
        });
    };
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
    // 
    return <>
        {!buttonFlag && <button className={`${styles.openbtn} ${teko.className}`} onClick={openNav}></button>}
        <div className={styles.slide} id="slide">
            <button className={styles.closebtn} onClick={closeNav}></button>

            {doc.map((elem, index) => (
                <div className={styles.doc} key={index}>

                    <span className={styles.title}>{elem.title}</span>
                    <span className={styles.score}>Similarity Score: {elem["similarity-score"]}</span>

                    <p className={styles.content}>
                        {elem.content?.length > 200 && !flags[index] ? (
                            <>
                                {elem.content.substr(0, 200)}...{' '}
                                <span className={styles.show} onClick={() => handleShowMoreClick(index)}>
                                    Show More
                                </span>
                            </>
                        ) : (
                            <>
                                {elem.content}{' '}
                                {elem.content?.length > 200 && <span className={styles.show} onClick={() => handleShowMoreClick(index)}>
                                    Show Less
                                </span>}
                            </>
                        )}
                    </p>
                    <br />
                    <span>
                        <strong>Reference: </strong>
                        <a href={elem["pdf-link"]} target="_blank">
                            {elem["pdf-link"]?.length > 100 ? elem["pdf-link"].substr(0, 100) + '...' : elem["pdf-link"]}
                        </a>
                    </span>
                </div>
            ))}
        </div>
    </>
}

export default Documents;
