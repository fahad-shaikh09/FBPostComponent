import React from 'react';
import ImageAvatars from "./ImageAvatars";
import FbImageGrid from "react-fb-image-grid"
import a from "./../images/a.jpg";
import b from "./../images/b.jpg";
import c from "./../images/c.jpeg";
import d from "./../images/d.jpeg";


const FbPost = (props) => {
    const images = [
        a,
        b,
        c,
        d
    ]
    return (
        <div>

            <div style={{ display: "flex" }}>
                <ImageAvatars />
                <div style={{
                    display: "flex",
                    textAlign: "left",
                    flexDirection:"column"
                }}>
                    <p style={{ fontWeight: "bold" }}>  {props.createdBy} <span
                        style={{color:"grey", fontSize:"15px",
                        fontStyle:"normal"}}>
                        {props.feeling}
                        </span>
                     </p> 
                    
                    <p>  {props.createdAt} </p>
                </div>
            </div>
            <p style={{
                textAlign: "left",
                paddingLeft: "10px"
            }}> {props.desc}      </p>

            <FbImageGrid images={images}  />

        </div>
    )
}

export default FbPost
