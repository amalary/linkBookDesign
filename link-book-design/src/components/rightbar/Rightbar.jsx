import '../rightbar/rightbar.css'

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
            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img src="assets/profilePictures/harryOsborn.jpg" alt="" className="profileImg" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Harry Osborn</span>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img src="assets/profilePictures/gwenStacy.jpg" alt="" className="profileImg" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Gwen Stacy</span>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img src="assets/profilePictures/misterOsborn.jpg" alt="" className="profileImg" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Mr.Osborn</span>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img src="assets/profilePictures/stanLee.jpg" alt="" className="profileImg" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Stan Lee</span>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img src="assets/profilePictures/maryjaneWatson.png" alt="" className="profileImg" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Maryjane Watson</span>
            </li>
          </ul>
        </div>
        </div>
  )
}
