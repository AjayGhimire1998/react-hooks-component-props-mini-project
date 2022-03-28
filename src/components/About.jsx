import react from "react";

export default function About({image, alt, text, name, texttwo}) {
    return(
        <aside>
            <img src={image} alt={alt}></img>
            <p>{text}
                <strong style={{textDecorationLine: "underline", color: "pink"}}>
                    {name}
                </strong>
                <br/>
                <i>{texttwo}</i>
            </p>
        </aside>
    )
}