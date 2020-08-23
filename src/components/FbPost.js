import React from 'react';
import ImageAvatars from "./ImageAvatars";
import FbImageGrid from "react-fb-image-grid"
import a from "./../images/a.jpg";
import b from "./../images/b.jpg";
import c from "./../images/c.jpeg";
import d from "./../images/d.jpeg";
import { HiOutlineThumbUp } from "react-icons/hi";
import { BiComment } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";


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
                    flexDirection: "column"
                }}>
                    <p style={{ fontWeight: "bold" }}>  {props.createdBy} <span
                        style={{
                            color: "grey", fontSize: "15px",
                            fontStyle: "normal"
                        }}>
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

            <FbImageGrid images={images} countFrom={2} />

            <div style={{display:"flex",
                        justifyContent:"space-evenly"
                    }}>
                <div style={{display:"flex",
                        width: "55px",
                        justifyContent:"space-between"
                        }}>
                    <HiOutlineThumbUp size="25px" />
                    <span> Like</span>
                </div>

                <div style={{display:"flex",
                        width: "85px",
                        justifyContent:"space-between"
                        }}>
                    <BiComment size="25px"/>
                    <span>Comment</span>
                </div>

                <div style={{display:"flex",
                        width: "65px",
                        justifyContent:"space-between"
                        }}>
                    <RiShareForwardLine size="25px"/>
                    <span>Share</span>
                </div>
            </div>
        </div>
    )
}

export default FbPost
