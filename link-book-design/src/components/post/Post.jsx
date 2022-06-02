import "../post/post.css"
import {MoreVert} from "@mui/icons-material"
import {Users,Posts} from "../../exampleData"

export default function Post({post}) {
    return (
    <div> 
        
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopleft">
                        <img className="postProfileImg" src= {post.profileImg} alt="" />
                        <span className="postUserName">
                            {Users.filter(u => u.id === post.userId)[0].userName}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight"></div>
                    <MoreVert/>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className = "postImg" src= {post.photo} alt="Selfie of spiderman on top of empire state building" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className = "likeIcon" src="assets/Icon/likeButton.png" alt="" />
                        <img className = "likeIcon" src="assets/Icon/heartButton.jpg" alt="" />
                        <span className="postLikeCounter">{post.likes}</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comments}</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
    )
}
