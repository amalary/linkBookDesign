import "../../components/online/online.css"

export default function Online({user}) {
  return (
    <div>
         <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img src="assets/profilePictures/harryOsborn.jpg" alt="" className="profileImg" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Harry Osborn</span>
            </li>
    </div>
  )
}
