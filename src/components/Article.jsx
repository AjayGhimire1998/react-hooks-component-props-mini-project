import react from "react";

export default function Article({title, date="January 01, 2022", preview, readtime}){

    function coffeeMug (readtime){
        let emoji = "";
            if( readtime <= 5){
                emoji = "☕️";
            } else if (readtime>5 && readtime <=10){
                emoji = "☕️".repeat(2);
            } else if (readtime >10 && readtime <=15){
                emoji = "☕️".repeat(3);
            } else if (readtime >=30 && readtime <40){
                emoji = "🥡".repeat(3);
            } else if (readtime >= 40 && readtime <50){
                emoji = "🥡".repeat(4);
            }
            return emoji;
    };

    return(
        <article>
            <h3 style={{color: "pink"}}>{title}</h3>
            <small>{date}• {coffeeMug(readtime)} {readtime} min read</small>
            <p>{preview}</p>
        </article>
    )
}