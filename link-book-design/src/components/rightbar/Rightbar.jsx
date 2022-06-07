import '../rightbar/rightbar.css'
import Online from "../online/Online"
import {Users} from "../../exampleData"; 


export default function Rightbar() {
  return (
    <div className='rightbar'>
        <div className="rightbarWrapper">
          <div className="birthdayContainer">
            <img className = "birthdayImg" src="assets/Icon/birthdayIconImg.png" alt="" />
            <span className="birthdayText"><b>Harry Osborn</b> and <b>2 other friends</b> have a birthday</span>
          </div>
          <img src="" alt="" className="rightbarAd" />
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
            {Users.map(u => 
              <Online key = {u.id} user = {u} /> )}
            
          </ul>
        </div>
        </div>
  )
}
