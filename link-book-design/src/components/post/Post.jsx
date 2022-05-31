import "../post/post.css"
import {MoreVert} from "@mui/icons-material"

export default function Post() {
    return (
    <div> 
        
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopleft">
                        <img className="postProfileImg" src="assets/profilePictures/peterParker.jpg" alt="" />
                        <span className="postUserName">Peter Parker</span>
                        <span className="postDate"> 1 min ago</span>
                    </div>
                    <div className="postTopRight"></div>
                    <MoreVert/>
                </div>
                <div className="postCenter">
                    <span className="postText">Hello how is this for a first post ?</span>
                    <img className = "postImg" src="assets/profilePictures/parkerSelfie.jpg" alt="Selfie of spiderman on top of empire state building" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className = "likeIcon" src="assets/Icon/likeButton.png" alt="" />
                        <img className = "likeIcon" src="assets/Icon/heartButton.jpg" alt="" />
                        <span className="postLikeCounter">24 people like this!</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">9 comments </span>
                    </div>
                </div>
            </div>
        </div>

    </div>
    )
}
