import React, { useState } from 'react';
import ImageAvatars from "./ImageAvatars";
import FbImageGrid from "react-fb-image-grid"
import a from "./../images/a.jpg";
import b from "./../images/b.jpg";
import c from "./../images/c.jpeg";
import d from "./../images/d.jpeg";
import { HiOutlineThumbUp } from "react-icons/hi";
import { BiComment } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import Emojis from "./Emojis";
import Comments from './Comments'

const FbPost = (props) => {
    const images = [
        a,
        b,
        c,
        d
    ]

    const [emojis,setEmojis] = useState(false);
    const [comments,setComments] = useState(false)

    function showEmoji(){
        setEmojis(!emojis)
    }

    function showComments(){
        setComments(!comments)
    }

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


            {/* ----------------DIV FOR LIKE, COMMENT AND SHARE------------ */}
            <div style={{display:"flex",
                        justifyContent:"space-evenly",
                        marginRight:"300px"
                    }}>

            {/* ----------------LIKE------------ */}
                <div style={{display:"flex",
                        width: "65px",
                        justifyContent:"space-between"
                        }}>
                    <HiOutlineThumbUp size="35px" />
                    <button onClick={() => showEmoji()} > Like</button>
                    <div style={{ position:"absolute",top:"380px", left:"380px"}}> {emojis ? <Emojis /> : ""}  </div>

                </div>

            {/* ----------------COMMENT------------ */}
                <div style={{display:"flex",
                        width: "95px",
                        justifyContent:"space-between"
                        }}>
                    <BiComment size="35px"/>
                    <button onClick={() => showComments()} >Comment</button>
                </div>
                 <div style={{ position:"absolute",top:"450px",left:"380px"}}> {comments ? <Comments /> : ""}  </div>

            
            {/* ----------------SHARE------------ */}
                <div style={{display:"flex",
                        width: "75px",
                        justifyContent:"space-between"
                        }}>
                    <RiShareForwardLine size="35px"/>
                    <button>Share</button>
                </div>
            </div>
        </div>
    )
}

export default FbPost
